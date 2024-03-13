<template>
  <div class="container">
    <Bar  :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { routes } from '@/stores/store'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  chartData: Object
})

setInterval(
      thing(),
      5000
    )
async function thing() {
     
    try {
      props.chartData = routes.value
    } catch (e) {
      console.error(e)
    } }
      
  
</script>