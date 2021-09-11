import axios from "axios";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/request";

type CharData = {
    labels: string[];
    series: number[];
}

const DonutChar = () => {

    let charData : CharData = { series:[], labels:[]} 

    axios.get(`${BASE_URL}/sales/sum_by_seller`).then(response => {

        //Conversão do tipo de objeto
        const data = response.data as SaleSum[];

        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => x.sum);

        let charData  = { labels: myLabels, series: mySeries } 

        console.log(charData);
        
    })
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options = {{...options, labels: charData.labels}}
            series = {charData.series}
            type = "donut"
            height = "240"
        />
    );
}

export default DonutChar;
