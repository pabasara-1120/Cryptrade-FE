import React, {useEffect, useState} from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Avatar, AvatarImage} from "@radix-ui/react-avatar";
import bitcoin from "@/assets/bitcoin.avif";


const AssetTable = ({category}) => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCoins = async () => {
            setLoading(true);
            let url = "http://localhost:8080/coins?page=100";
            if(category==="top50") {
                url = "http://localhost:8080/coins/top50"
            }
            try{
                const response = await fetch(url)
                const data = await response.json();
                setCoins(data);
            }catch(err){
                console.log(err);
            }finally{
                setLoading(false);
            }
        };
        getCoins();
    },[category])

    return (
        <Table>
            <TableCaption >The list of coins</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead >COIN</TableHead>
                    <TableHead>SYMBOL</TableHead>
                    <TableHead>VOLUME</TableHead>
                    <TableHead>MARKET_CAP</TableHead>
                    <TableHead>24h</TableHead>
                    <TableHead >PRICE</TableHead>
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
                        <TableRow key={coin.id}>
                            <TableCell className="font-medium flex items-center gap-2">
                                <Avatar className="z-50">
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