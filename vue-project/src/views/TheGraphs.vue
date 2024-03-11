<template>
    <div class="container">
        <Bar :data="chartData" />
     </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { usedata, labels, routes } from '@/stores/store'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
            labels: ['B','F','D','M'],
        datasets: [
          {
            label: 'Amount of Subway Routes',
            backgroundColor: '#f87979',
            data: routes.value
          }
        ]
      }
    }
  }
}

  </script>