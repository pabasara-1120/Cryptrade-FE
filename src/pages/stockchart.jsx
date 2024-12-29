import React from 'react';
import Chart from 'react-apexcharts';
import {Button} from "@/components/ui/button.jsx";

const Stockchart = () => {
    const [activeLabel, setActiveLabel] = React.useState("1 day");

    const handleActiveLabel = (value) => {
        setActiveLabel(value);
    }

    const series = [
        {
            name: "Price", // Name for the series
            data: [
                [1732904208144, 97222.269356393],
                [1732907054253, 97246.3724230235],
                [1732910739392, 97446.7430420962],
                [1732914456251, 97461.7801077753],
                [1732917961260, 97439.7326052471],
                [1732922085355, 97229.6397756608],
                [1732925036012, 97508.5860726267],
                [1732928579055, 97014.2614212174],
                [1732932132871, 96605.3806170417],
                [1732935850716, 96633.3534097003],
                [1732939625781, 96758.519510965],
                [1732943773503, 96810.7077940219],
                [1732947267673, 97201.811692627],
                [1732950158600, 96638.4654878381],
                [1732954495355, 96755.0201538267],
                [1732957929500, 96771.4904227214],
                [1732961771345, 96816.4417756681],
                [1732965477045, 96325.0980001901],
                [1732968230031, 96295.4831235887],
                [1732972277731, 96601.0586445248],
                [1732976159578, 96635.4831103804],
                [1732979313571, 96651.8545401088],
                [1732982947672, 96722.4926780985],
                [1732986569468, 96992.657710162],
                [1732990216773, 96921.3564535822],
                [1732993840825, 97025.2011298379],
                [1732997095239, 97062.3400507374],
                [1733000622562, 97019.0839291062],
                [1733004750999, 96843.6612768985],
                [1733007733260, 96383.4083126522],
                [1733011406710, 96449.7525153709],
                [1733015323760, 96368.4165962921],
                [1733018771230, 96183.538656218],
                [1733022051091, 96004.879652923],
                [1733025979681, 96339.4110903762],
                [1733030058950, 96446.4278914795],
                [1733033074626, 96343.5212908596],
                [1733037064561, 96390.7414207457],
                [1733040566047, 96571.3082436384],
                [1733043752987, 97102.022624878],
                [1733047982693, 96931.6481377739],
                [1733051217104, 97002.8552643736],
                [1733055429977, 97134.4449430997],
                [1733058803923, 97038.9439813737],
                [1733062105993, 97174.1524887956],
                [1733065245230, 97326.0803132328],
                [1733069937986, 97270.4174246363],
            ],
        },
    ];

    const timeseries = [{
        keyword: "DIGITAL_CURRENCY_DAILY",
        key: "Time Series Daily",
        label: "1 day",
        value: 1
    },
        {
            keyword: "DIGITAL_CURRENCY_WEEKLY",
            key: "Time Series Weekly",
            label: "7 days",
            value: 7
        },
        {
            keyword: "DIGITAL_CURRENCY_MONTHLY",
            key: "Time Series Monthly",
            label: "30 days",
            value: 30
        }
    ]

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
            <div className={"space-x-3"}>
                {timeseries.map((item) => <Button variant={activeLabel===item.label?"":"outline"}
                    onClick={()=>handleActiveLabel(item.label)} key ={item.label}>
                    {item.label}
                </Button>)}
            </div>
            <div id="chart-timelines">
                <Chart options={options} series={series} type="area" height={650} width={800}/>
            </div>
        </div>
    );
};

export default Stockchart;
