import React, { useState } from 'react';
import { Button } from "@/components/ui/button.jsx";
import AssetTable from "@/pages/assetTable.jsx";
import Stockchart from "@/pages/stockchart.jsx";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import bitcoin from "@/assets/bitcoin.avif";
import { DotIcon, MessageCircle } from "lucide-react";

const Home = () => {
    const [category, setCategory] = useState("all");
    const[selectedCoin, setSelectedCoin] = useState(null);

    const handleCategoryChange = (value) => {
        setCategory(value);
    };

    const handleSelectCoin = (value) => {
        setSelectedCoin(value);
        console.log(value)
    }

    return (
        <div className="relative">
            <div className="lg:flex">
                <div className="lg:w-[50%] lg:border-r">
                    <div className="p-3 flex items-center gap-5">
                        <Button
                            onClick={() => handleCategoryChange("all")}
                            variant={category === "all" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            All
                        </Button>
                        <Button
                            onClick={() => handleCategoryChange("top50")}
                            variant={category === "top50" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            Top 50
                        </Button>
                        <Button
                            onClick={() => handleCategoryChange("topGainers")}
                            variant={category === "topGainers" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            Top Gainers
                        </Button>
                        <Button
                            onClick={() => handleCategoryChange("topLosers")}
                            variant={category === "topLosers" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            Top Losers
                        </Button>
                    </div>

                    {/* Add scrollable container for the table */}
                    <div
                        className="h-[900px] mb-4 overflow-y-auto"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        <AssetTable category={category} onSelectCoin={handleSelectCoin} />
                    </div>
                </div>
                <div className={"hidden lg:block lg:[50%] p-5"}>
                    <Stockchart coinId = {selectedCoin || "bitcoin"}  />
                    <div className={"flex gap-5 items-center"}>
                        <div>
                            <Avatar>
                                <AvatarImage src={bitcoin} className={"w-10 h-10"} />
                            </Avatar>
                        </div>
                        <div>
                            <div className={"flex items-center gap-2"}>
                                <p>ETH</p>
                                <DotIcon className="w-10 h-10 text-gray-400" />
                                <p className={"text-gray-400"}>{selectedCoin}</p>
                            </div>
                            <div className={"flex items-end gap-2"}>
                                <p className={"text-xl font-bold"}>6464</p>
                                <p>
                                    <span className={"text-red-500"}>-9930208989</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={"absolute bottom-5 right-5 z-50 flex flex-col justify-end items-end gap-2"}>
                <div className={"relative w-[10rem] cursor-pointer group"}>
                    <Button className={"w-full h-[3rem] gap-2 items-center"}>
                        <MessageCircle className={"fill-blue-950 -rotate-90"}></MessageCircle>
                        <span className={"text-2xl"}>TradeBot</span>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
