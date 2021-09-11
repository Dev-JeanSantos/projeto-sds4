import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/request";

type CharData = {
    labels: string[];
    series: number[];
}

const DonutChar = () => {

    const [chartData, setCharData] = useState<CharData>({ series: [], labels: [] })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sum_by_seller`).then(response => {
            //Conversão do tipo de objeto
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);
            setCharData({ labels: myLabels, series: mySeries });
        });
    }, [])



    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChar;
