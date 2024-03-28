<template>
  <div class="header flex flex-col w-1/2 justify-center m-auto">
      <h1 class=" text-3xl flex justify-center m-auto mb-10 border-4 border-green-500 bg-yellow-200">We love Graphs!</h1>
  </div>
  <div class="graphs grid grid-cols-2 justify-around border-b-">
    <div class="b col-start-1 flex justify-center m-auto w-full p-10 mb-[-18%]"><Bar :data="chartData" :options="chartOptions" :key="key"/></div>
    <div class="d col-start-2 h-full flex justify-center m-auto w-full p-10 mb-[-3%]"> <Doughnut :data="chartData2"/></div>
   
  </div>
    
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
              label: 'Curret number of trips for the B, F, D, and M',
              backgroundColor: '#ff6319',
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
  }

  </script>
  <style scoped>
 
</style>