<template>
    <div class="header flex flex-col w-1/2 justify-center m-auto">
        <h1 class=" text-3xl flex justify-center m-auto"></h1>
    </div>
      <Bar :data="chartData" :options="chartOptions" :key="key" class=""/>
    </template>
    
    <script>
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
    import { routes } from '@/stores/store'
    import { ref } from 'vue'
    (Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
    
    export default {
      name: 'BarChart',
      components: { Bar },
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