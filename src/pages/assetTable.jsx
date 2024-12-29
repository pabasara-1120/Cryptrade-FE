import React from 'react';
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


const AssetTable = () => {
    return (
        <Table>
            <TableCaption >A list of your recent invoices.</TableCaption>
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
                {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index) => (<TableRow>
                    <TableCell className="font-medium flex items-center gap-2">
                        <Avatar className={"z-50"}>

                            <AvatarImage src={bitcoin} className={"h-10 w-10"}></AvatarImage>


                        </Avatar>
                        <span>Bitcoin</span>
                    </TableCell>
                    <TableCell>BTC</TableCell>
                    <TableCell>384938920</TableCell>
                    <TableCell>742302</TableCell>
                    <TableCell>0.4638</TableCell>
                    <TableCell >$250.00</TableCell>
                </TableRow>))}

            </TableBody>
        </Table>

    );
};

export default AssetTable;