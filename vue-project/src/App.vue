<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GtfsRealtimeBindings from 'gtfs-realtime-bindings'
import { onBeforeMount } from 'vue'
import { usedata, labels,routes} from '@/stores/store';
import { ref } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const data = ref([])

//ben
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
     if (Object.prototype.hasOwnProperty.call(el, "vehicle")) {
        gooddata.value.push(el)
        } 
     }
      )
      gooddata.value.forEach((el) => {
        usedata.value.push(el)
        console.log('Pushing data for USE')
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
      console.log(usedata.value)
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

//yi
import { fetchData } from './stores/store'

onBeforeMount(() => {
  fetchData('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm')
})
</script>

<template>
  <header>
    <div class="wrapper flex flex-row justify-center m-auto w-full">
      <nav class="flex justify-center m-auto">
        <button class="mr-10 bg-slate-300 border-2 border-black hover:bg-slate-600">
          <RouterLink to="/" class=" ">Home</RouterLink>
        </button>

        <button class="bg-slate-300 border-2 border-black hover:bg-slate-600">
          <RouterLink to="/graphs" class="]"> Graphs</RouterLink>
        </button>
        <button class="bg-slate-300 border-2 border-black hover:bg-slate-600">
          <RouterLink to="/graphTwo" class="]"> Graphs 2</RouterLink>
        </button>
        <button
          class="button bg-slate-300 border-2 border-black hover:bg-slate-600"
          @click="
            fetchData('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm')
          "
        >
          Refresh Data
        </button>
      </nav>
    </div>
  </header>
  <RouterView :data="data"/>
</template>

<style scoped></style>
