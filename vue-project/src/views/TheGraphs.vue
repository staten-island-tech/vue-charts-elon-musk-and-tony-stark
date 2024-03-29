<template>
  <div class="header flex flex-col w-1/2 justify-center m-auto">
    <h1 class="text-3xl flex justify-center m-auto"></h1>
  </div>
  <Bar :data="chartData" :options="chartOptions" :key="key" class="mb-36" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from 'chart.js'
import { fetchData, routes } from '@/stores/store'
import { ref } from 'vue'
import { doLabels } from '@/stores/store'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

export default {
  name: 'BarChart',
  props: ['data'],
  components: { Bar },
  mounted() {
    this.rereload()
  },
  data() {
    return {
      key: 0,
      chartData: {
        labels: ['B', 'F', 'D', 'M'],
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
        aspectRatio: 16 / 9,
        responsive: true
      }
    }
  },
  methods: {
    reload() {
      fetchData('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm')
      doLabels(this.data);
      this.key += 1
      console.log(`reloading ${routes.value}`)
      this.chartData.datasets[0].data = ref(routes.value)
      console.log('reloaded')
    },
    rereload() {
      setTimeout(this.reload,500)
      setInterval(this.reload, 5000)
    }
  },
  watch: {
    routes() {
      this.reload()
    }
  }
}
</script>
<style scoped></style>
