import {Bar} from "react-chartjs-2";
import {Chart as ChartJS,LinearScale,CategoryScale,BarElement,Title,Tooltip,Legend} from "chart.js"
ChartJS.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend);

function Graph({values}){
    return(

        <Bar data={{
            labels:["Energy", "Car Miles","Flight Hours","Food"],
            datasets:[{
                label:"CO2 emissions",
                data: values,
                backgroundColor: [
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(54, 162, 235, 1)",
                ],
                borderWidth: 1,
            },],
        }}
        options={{
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        }}
    />
  );
}


export default Graph;