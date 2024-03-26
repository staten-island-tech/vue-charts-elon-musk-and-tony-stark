<template>
    <div class="container">
      <Bar  :data="chartData" :key="usedata" />
   </div>
  </template>
  
  <script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { routes } from '@/stores/store';
import { usedata } from '@/stores/store';
import { onBeforeMount, ref } from 'vue';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: ['B','F','D','M'],
          datasets: [
            {
              label: 'Data',
              backgroundColor: '#f87979',
              data: routes.value
            }
          ]
        }
      }
    },
  
    
    
  }
  </script>