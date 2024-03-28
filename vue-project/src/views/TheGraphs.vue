<template>
  <div class="header flex flex-col w-1/2 justify-center m-auto">
      <h1 class=" text-3xl flex justify-center m-auto"></h1>
  </div>
    <Bar :data="chartData" :options="chartOptions" :key="key" class=" mb-36"/>
    <Doughnut :data="chartData2"/>
  </template>
  
  <script>
  import { Bar, Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'
  import { routes } from '@/stores/store'
  import { ref } from 'vue'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)
  
  export default {
    name: 'BarChart',
    components: { Bar, Doughnut },
    mounted() {
      this.rereload()
    },
    data() {
      return {
        key: 0,
        chartData: {
          labels: [ 'B', 'F', 'D', 'M'],
          datasets: [
            {
              label: 'Number of Routes for the B,F,D,M at any given time',
              backgroundColor: '#f87979',
              data: ref(routes.value)
            }
          ]
        },
        chartData2: {
          labels: [ 'B', 'F', 'D', 'M'],
          datasets: [
            {
              label: 'Most common time to stop per line',
              backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
              data: [1,2,3,4]
            }
          ]
        },
        chartOptions: {
          maintainAspectRatio: true,
          aspectRatio: 16/9,
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
        setInterval(this.reload, 7000)
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