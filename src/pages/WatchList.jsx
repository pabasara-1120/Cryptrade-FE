import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const WatchList = () => {
    // Sample data to mimic API response
    const watchlistData = {
        "id": 52,
        "user": {
            "id": 253,
            "fullName": "Darrel Rivers"
        },
        "coins": [
            {
                "id": "tether",
                "symbol": "usdt",
                "name": "Tether",
                "image": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
                "current_price": 0.999816,
                "market_cap": 139397611439,
                "market_cap_rank": 3,
                "price_change_percentage_24h": 0.02563,
                "total_volume": -632526206
            },
            {
                "id": "ethereum",
                "symbol": "eth",
                "name": "Ethereum",
                "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
                "current_price": 3332.28,
                "market_cap": 401529485695,
                "market_cap_rank": 2,
                "price_change_percentage_24h": -3.91679,
                "total_volume": -1879520006
            },
            {
                "id": "bitcoin",
                "symbol": "btc",
                "name": "Bitcoin",
                "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png",
                "current_price": 95553.0,
                "market_cap": 1892059869154,
                "market_cap_rank": 1,
                "price_change_percentage_24h": -3.39702,
                "total_volume": 852727874
            }
        ]
    };

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