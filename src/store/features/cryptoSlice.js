import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCoins = createAsyncThunk(
    "coin/fetchCoins",
    async (category, { getState }) => {
        const state = getState();
        if (state.coins[category]?.length > 0) {
            // Data for the category is already in the store, skip fetching
            return { category, data: state.coins[category] };
        }

        // Fetch data if not already in the store
        let url = "http://localhost:8080/coins?page=100";
        if (category === "top50") {
            url = "http://localhost:8080/coins/top50";
        }
        const response = await fetch(url);
        const data = await response.json();
        return { category, data };
    }
);

const coinSlice = createSlice({
    name: "coin",
    initialState: {
        all: [],
        top50: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCoins.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCoins.fulfilled, (state, action) => {
            const { category, data } = action.payload;
            state[category] = data;
            state.loading = false;
        });
        builder.addCase(fetchCoins.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    },
});

export default coinSlice.reducer;
