import { useState } from "react";
import Navbar from "@/components/Navbar.jsx";
import Home from "@/pages/Home.jsx";
import { Route, Routes } from "react-router-dom"; // Ensure you're using `react-router-dom` for v6+
import Portfolio from "@/pages/Portfolio.jsx";
import Activity from "@/pages/Activity.jsx";
import Wallet from "@/pages/Wallet.jsx";
import WatchList from "@/pages/WatchList.jsx";
import NotFound from "@/pages/NotFound.jsx";
import Auth from "@/Auth/auth.jsx";

function App() {
    return (
        <div className="min-h-screen bg-background">
            <Routes>
                <Route path="/auth/*" element={<Auth />} />
                <Route path="/" element={
                    <>
                        <Navbar />
                        <main className="max-w-[1920px] mx-auto">
                            <Home />
                        </main>
                    </>
                } />
                {/* Other routes with Navbar */}
                <Route path="/*" element={
                    <>
                        <Navbar />
                        <main className="max-w-[1920px] mx-auto">
                            <Routes>
                                <Route path="/portfolio" element={<Portfolio />} />
                                <Route path="/activity" element={<Activity />} />
                                <Route path="/wallet" element={<Wallet />} />
                                <Route path="/watchlist" element={<WatchList />} />
                                <Route path="/search" element={<Home />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </main>
                    </>
                } />
            </Routes>
        </div>
    );
}


export default App;
