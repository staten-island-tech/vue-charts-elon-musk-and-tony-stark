<template>
    <Bar :data="dataChart"/>
    <button @click="reload">Reload????</button>
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
    props: ["data"],
    data: {
    message: "Hello World",
    dataChart: routes.value,
    test: [4, 4, 4, 4, 4, 4]
  },
    mounted() {
      this.renderBarChart()
    },
    
    computed: {
      chartData: function () {
        return this.data
      }
    },
    
    methods: {
      renderBarChart: function () {
        this.renderChart(
          {
            labels: [
              'B',
              'F',
              'D',
              'M'
            ],
            datasets: [
              {
                label: "Data one",
                backgroundColor: "#f87979",
                data: this.chartData
              }
            ]
          },
        );
      },
    changeData: function() {
      this.dataChart = routes.value;
    }
    },
    watch: {
      data: function () {
        this._chart.destroy();
        this.renderBarChart();
      }
    }
  }
  </script>