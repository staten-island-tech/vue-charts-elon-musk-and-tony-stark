<template>
  <div>{{ dataForChart(data) }}</div>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { usedata as data, dataForChart } from '@/stores/store'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const chartNumbers = dataForChart(data)
const chartData = {
  labels: ['B', 'F', 'D', 'M'],
  datasets: [
    {
      label: 'Most common time to stop per line in minutes',
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: chartNumbers
    }
  ]
}

setInterval(function() {
  chartData.datasets[0].data = dataForChart(data)
},1000)



const chartOptions = {
  maintainAspectRatio: true,
  aspectRatio: 16 / 9,
  responsive: true
}


</script>

<style lang="scss" scoped></style>
