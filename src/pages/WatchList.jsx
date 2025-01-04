import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const WatchList = () => {
    const [watchlistData, setWatchlistData] = useState({ coins: [] });

    useEffect(() => {
        const getCoins = async () => {
            try {
                const token = sessionStorage.getItem("jwt");
                console.log("Token:", token);
                const response = await fetch("http://localhost:8080/api/watchlist/user", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                console.log("Watchlist Data:", data);
                setWatchlistData(data);
            } catch (err) {
                console.error(err);
            }
        };

        getCoins();
    }, []);

    return (
        <div className="relative p-10">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">My Watchlist</h1>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>COIN</TableHead>
                            <TableHead>SYMBOL</TableHead>
                            <TableHead>VOLUME</TableHead>
                            <TableHead>MARKET CAP</TableHead>
                            <TableHead>24h</TableHead>
                            <TableHead>PRICE</TableHead>
                            <TableHead>RANK</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {watchlistData.coins.map((coin) => (
                            <TableRow key={coin.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={coin.image}
                                            alt={coin.name}
                                            className="w-6 h-6"
                                        />
                                        {coin.name}
                                    </div>
                                </TableCell>
                                <TableCell className="uppercase">{coin.symbol}</TableCell>
                                <TableCell>
                                    ${Math.abs(coin.total_volume).toLocaleString()}
                                </TableCell>
                                <TableCell>
                                    ${coin.market_cap.toLocaleString()}
                                </TableCell>
                                <TableCell className={coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}>
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                </TableCell>
                                <TableCell>
                                    ${coin.current_price.toLocaleString()}
                                </TableCell>
                                <TableCell>
                                    {coin.market_cap_rank.toLocaleString()}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default WatchList;
