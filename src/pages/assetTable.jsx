import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {fetchCoins} from "@/store/features/cryptoSlice.js";

const AssetTable = ({ category, onSelectCoin }) => {
    const dispatch = useDispatch();
    const { [category]: coins = [], loading } = useSelector((state) => state.coins);

    useEffect(() => {
        // Fetch coins if not already in the store
        dispatch(fetchCoins(category));
    }, [dispatch, category]);

    const handleRowClick = (coinId) => {
        onSelectCoin(coinId);
    };

    return (
        <Table>
            <TableCaption>The list of coins</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="pl-10">COIN</TableHead>
                    <TableHead>SYMBOL</TableHead>
                    <TableHead>VOLUME</TableHead>
                    <TableHead>MARKET_CAP</TableHead>
                    <TableHead>24h</TableHead>
                    <TableHead>PRICE</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {loading ? (
                    <TableRow>
                        <TableCell colSpan={6} className="text-center">
                            Loading...
                        </TableCell>
                    </TableRow>
                ) : (
                    coins.map((coin) => (
                        <TableRow
                            key={coin.id}
                            onClick={() => handleRowClick(coin.id)}
                            className="cursor-pointer hover:bg-gray-800"
                        >
                            <TableCell className="font-medium flex items-center gap-2 pl-10">
                                <Avatar>
                                    <AvatarImage src={coin.image} alt={coin.name} className="h-10 w-10" />
                                </Avatar>
                                <span>{coin.name}</span>
                            </TableCell>
                            <TableCell>{coin.symbol.toUpperCase()}</TableCell>
                            <TableCell>{coin.total_volume.toLocaleString()}</TableCell>
                            <TableCell>{coin.market_cap.toLocaleString()}</TableCell>
                            <TableCell
                                className={
                                    coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"
                                }
                            >
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </TableCell>
                            <TableCell>${coin.current_price.toFixed(2)}</TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>
        </Table>
    );
};

export default AssetTable;
