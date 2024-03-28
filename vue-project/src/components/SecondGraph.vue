<template>
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
import { onMounted } from 'vue'
import { usedata as data } from '@/stores/store'
import { timeToStop } from '@/stores/store'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['B', 'F', 'D', 'M'],
  datasets: [
    {
      label: 'Most common time to stop per line',
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [1, 2, 3, 4]
    }
  ]
}

let loaded = false

const chartOptions = {
  maintainAspectRatio: true,
  aspectRatio: 16 / 9,
  responsive: true
}
onMounted(() => {
    loaded = true
})

const dataForChart = function () {
    const returnedData = []
    data.forEach((piece) => {
        switch (piece.vehicle.vehicle.trip.routeId){
            case 'B':
            let count = []
            piece.tripUpdate.tripUpdate.stopTimeUpdate.forEach((stop) => { 
                count.push(timeToStop(stop.arrival.time))
            })
            count

            case 'D':
            case 'F':
            case 'M':
        }
    })
}

function mostCommon(arr) {

}
</script>

<style lang="scss" scoped></style>
