import React, { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import AssetTable from "@/pages/assetTable.jsx";
import Stockchart from "@/pages/stockchart.jsx";

const Home = () => {
    const [category, setCategory] = useState("all");
    const [selectedCoin, setSelectedCoin] = useState(null);

    const handleCategoryChange = (value) => {
        setCategory(value);
    };

    const handleSelectCoin = (value) => {
        setSelectedCoin(value);
        console.log(value);
    };

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
                    </div>
                    <div className="h-[900px] mb-4 overflow-y-auto" style={{ scrollBehavior: "smooth" }}>
                        <AssetTable category={category} onSelectCoin={handleSelectCoin} />
                    </div>
                </div>
                <div className="hidden lg:block lg:w-[50%] p-5">
                    <Stockchart coinId={selectedCoin || "bitcoin"} />
                </div>
            </div>
        </div>
    );
};

export default Home;
