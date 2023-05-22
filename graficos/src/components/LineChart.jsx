import React from 'react'
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

let aca = [0, 56, 20, 36, 80, 40, 30, 0, 25, 30, 12, 100];
let cnt= [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25];

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'ACA',
            data: aca,
            tension: 0.5,
            fill : true,
            borderColor: 'red',
            backgroundColor: 'red',
            pointRadius: 8,
            pointBorderColor: 'black',
            pointBackgroundColor: 'black',
            datalabels: {
            color: 'white',
            labels: {
              title: {
                font: {
                  weight: 'bold',
                  size:10
                }
              },
            }
          }
        
        },
        {
            label: 'CNT',
            data: cnt,
            tension: 0.5,
            fill : true,
            borderColor: 'blue',
            backgroundColor: 'blue',
            pointRadius: 8,
            pointBorderColor: 'black',
            pointBackgroundColor: 'black', 
            datalabels: {
            color: 'white',
            labels: {
              title: {
                font: {
                  weight: 'bold',
                  size:10
                }
              },
            }
          }

        },
    ],
};

var misoptions = {

    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: 'Volumen de datos Ascendentes',
      },
  }

};


const LineChart = () => {
  return (
    <Line data={midata} options={misoptions} />
  )
}

export default LineChart