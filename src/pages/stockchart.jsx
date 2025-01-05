import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Button } from "@/components/ui/button.jsx";

const Stockchart = ({ coinId }) => {
    const [series, setSeries] = useState([]);
    const [activeDays, setActiveDays] = useState(1);

    const timeseries = [
        { keyword: "DIGITAL_CURRENCY_DAILY", key: "Time Series Daily", label: "1 day", value: 1 },
        { keyword: "DIGITAL_CURRENCY_WEEKLY", key: "Time Series Weekly", label: "7 days", value: 7 },
        { keyword: "DIGITAL_CURRENCY_MONTHLY", key: "Time Series Monthly", label: "30 days", value: 30 },
    ];

    useEffect(() => {
        const fetchChartData = async () => {
            if (!coinId) return; // Ensure coinId is present before making the API call
            try {
                const response = await fetch(`http://localhost:8080/coins/${coinId}/chart?days=${activeDays}`);
                const data = await response.json();

                // Format the `prices` data for the ApexCharts
                const formattedPrices = data.prices.map(([timestamp, price]) => ({
                    x: new Date(timestamp).toISOString(), // Convert timestamp to ISO format
                    y: price,
                }));

                // Update the series state with the formatted data
                setSeries([{ name: "Price", data: formattedPrices }]);
            } catch (error) {
                console.error("Error fetching chart data:", error);
            }
        };

        fetchChartData();
    }, [coinId, activeDays]); // Re-fetch data when coinId or activeDays changes

    const handleActiveLabel = (daysLabel) => {
        const selectedTimeSeries = timeseries.find((item) => item.label === daysLabel);
        if (selectedTimeSeries) {
            setActiveDays(selectedTimeSeries.value);
        }
    };

    const options = {
        chart: {
            id: "area-datetime",
            type: "area",
            height: 500,
            width: "100%",
            zoom: {
                autoScaleYaxis: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: "datetime", // Ensure x-axis is treated as a datetime scale
            tickAmount: 6, // Adjust the number of ticks for better visualization
        },
        markers: {
            colors: ["#fff"],
            strokeColor: "#fff",
            strokeOpacity: 0.2,
            size: 0,
            strokeWidth: 1,
            strokeDasharray: 0,
            fillOpacity: 1,
            style: "hollow",
        },
        tooltip: {
            theme: "dark",
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0.9,
                opacityFrom: 0.8,
                opacityTo: 0.5,
                stops: [0, 100],
            },
        },
        grid: {
            borderColor: "#47535E",
            strokeDasharray: 4,
            show: true,
        },
    };

    return (
        <div>
            <div className="space-x-3">
                {timeseries.map((item) => (
                    <Button
                        variant={activeDays === item.value ? "" : "outline"}
                        onClick={() => handleActiveLabel(item.label)}
                        key={item.label}
                    >
                        {item.label}
                    </Button>
                ))}
            </div>
            <div id="chart-timelines">
                {series.length > 0 ? (
                    <Chart options={options} series={series} type="area" height={650} width={800} />
                ) : (
                    <p>Loading chart data...</p>
                )}
            </div>
        </div>
    );
};

export default Stockchart;
