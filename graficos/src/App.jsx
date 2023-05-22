import './App.css'
import LineChart from './components/LineChart'


function App() {

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
        text: 'Volumen de datos Ascendente',
      },
  }
  

};

var misoptions2 = {

  plugins: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Volumen de datos Descendente',
    },
}


};




  return (
    <main>
      <h1>Gráficos</h1>
      <LineChart midata={midata} misoptions={misoptions}/>
        <hr />
      <LineChart midata={midata} misoptions={misoptions2}/>
    </main>
  )
}

export default App
