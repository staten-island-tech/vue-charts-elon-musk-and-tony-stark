<template>
  <div class="header flex flex-col w-1/2 justify-center m-auto">
      <h1 class=" text-3xl flex justify-center m-auto">Click button on page load to load graphs and update data</h1>
  <button @click="rereload" class="w-1/2 justify-center m-auto mt-4 border-black border-4 bg-red-400 hover:bg-red-600">Load Graph</button>
  </div>
    <Bar :data="chartData" :options="chartOptions" :key="key" class="h-[1x]"/>
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
        },
        chartOptions: {
          maintainAspectRatio: false,
          aspectRatio: 1,
          responsive: true,
        }
      }
    },
    methods: {
       reload() {
        this.key += 1
        this.chartData.datasets[0].data = ref(routes.value)
        console.log("reloaded")
      },
      rereload() {
        this.reload()
        setInterval(this.reload, 5000)
      }
    },
    watch: {
      routes() {
        this.reload()  
      }
    },
  }

  </script>
  <style scoped>
 
</style>