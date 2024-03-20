<template>
  <div>
  </div>
</template>

<script setup>
import GtfsRealtimeBindings from 'gtfs-realtime-bindings'
import { onBeforeMount } from 'vue'
import { usedata, labels,routes } from '@/stores/store';
import { ref } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const data = ref([])
async function test() {
  ;(async () => {
    try {
      const response = await fetch(
        'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm',
        {
          headers: {
            'x-api-key': 'Lbc0gTUOwm8GvqZgMmu2t3MEktcvreZr8wiuihJn'
            // replace with your GTFS-realtime source's auth token
            // e.g. x-api-key is the header value used for NY's MTA GTFS APIs
          }
        }
      )
      if (!response.ok) {
        const error = new Error(`${response.url}: ${response.status} ${response.statusText}`)
        error.response = response
        throw error
      }
      const buffer = await response.arrayBuffer()
      const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(new Uint8Array(buffer))
      data.value = feed.entity
      data.value.forEach((el) =>{
     if (el.hasOwnProperty("vehicle")) {
        gooddata.value.push(el)
        } 
     }
      )
      gooddata.value.forEach((el) => {
      usedata.value.push(el)
     })
      console.log(usedata.value.length)
      usedata.value.forEach((el) => {
   labels.value.push(el.vehicle.trip.routeId)
   
      })
      labels.value.forEach((el) => {
        
        if (el === "B") {
          routes.value[0]++
        } else if (el === "F") {
          routes.value[1]++
        } else if (el === "D") {
          routes.value[2]++
        } else {
          routes.value[3]++
        }
        
        
      })
      console.log(routes.value)

    } catch (error) {
      console.log(error)
    }
  })()
}
const gooddata = ref([])
function blah() {
  gooddata.value = []
  usedata.value = []
  labels.value = []
  routes.value = [0, 0, 0, 0]
  
}
onBeforeMount(() => {
  test()
  setInterval(blah, 5000)
  setInterval(test, 5000)

})

</script>

<style lang="css" scoped></style>
