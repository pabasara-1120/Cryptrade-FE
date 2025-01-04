import {useEffect, useState} from "react";
import Navbar from "@/components/Navbar.jsx";
import Home from "@/pages/Home.jsx";
import { Route, Routes } from "react-router-dom"; // Ensure you're using `react-router-dom` for v6+
import Portfolio from "@/pages/Portfolio.jsx";
import Activity from "@/pages/Activity.jsx";
import Wallet from "@/pages/Wallet.jsx";
import WatchList from "@/pages/WatchList.jsx";
import NotFound from "@/pages/NotFound.jsx";
import Auth from "@/Auth/auth.jsx";

import { useLocation } from "react-router-dom";
import {useNavigate} from "react-router";

function App() {
    const location = useLocation();
    const isAuthPage = location.pathname === "/signIn" || location.pathname === "/signUp";
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("jwt");

        if(token ===null && location.pathname !== "/signIn" && location.pathname !=="/signUp") {
            console.log("naviagte")
            navigate("/signIn");
        }
    },[location,navigate]);

    return (
        <div className="min-h-screen bg-background">
            {isAuthPage && <Auth />}
            <Navbar />
            <main className="max-w-[1920px] mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/activity" element={<Activity />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/watchlist" element={<WatchList />} />
                    <Route path="/search" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
