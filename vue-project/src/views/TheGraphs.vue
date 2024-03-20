<template>
    <Bar :data="chartData" />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { routes} from 'store.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'B', 'F', 'D', 'M'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: routes.value
            }
          ]
        }
      }
    }
  }
  </script>