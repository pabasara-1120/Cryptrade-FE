import React from 'react';
import { Button } from "@/components/ui/button.jsx";
import AssetTable from "@/pages/assetTable.jsx";

const Home = () => {
    const [category, setCategory] = React.useState("all");

    const handleCategoryChange = (value) => {
        setCategory(value);
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
                        <AssetTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
