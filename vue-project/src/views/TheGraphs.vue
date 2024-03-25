<template>
    <Bar :data="chartData" :key="key"/>
    <button @click="reload">Load Graph</button>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { routes } from '@/stores/store'
  import { ref } from 'vue'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },

    data() {
      return {
        key: 0,
        chartData: {
          labels: [ 'B', 'F', 'D', 'M'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: ref(routes.value)
            }
          ]
        }
      }
    },
    methods: {
      async reload() {
        this.key += 1
        this.chartData = {
          labels: [ 'B', 'F', 'D', 'M'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: ref(routes.value)
            }
          ]
        }
        console.log("reloaded")
        
      }
    },
    watch: {
      routes() {
        this.reload()  
      }
    },
    mounted() {
      this.reload()
    }
  }
  </script>