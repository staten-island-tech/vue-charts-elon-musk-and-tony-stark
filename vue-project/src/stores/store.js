import { reactive, ref } from 'vue'

export const usedata = ref([])
export const labels = ref([])
export const routes = ref({
        labels: ['B','F','D','M'],
        datasets: [
          {
            label: 'Number of Each Subway Lines',
            backgroundColor: '#f87979',
            data: [0,0,0,0]
          }
        ]
})