<template>
  <div>
  </div>
</template>

<script setup>
import GtfsRealtimeBindings from 'gtfs-realtime-bindings'
import { onBeforeMount } from 'vue'
import { usedata } from '@/stores/store';
import { ref } from 'vue';
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
        process.exit(1)
      }
      const buffer = await response.arrayBuffer()
      const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(new Uint8Array(buffer))
      data.value = feed.entity
      console.log(data.value)
      data.value.forEach((el) =>{
     if (el.hasOwnProperty("vehicle")) {
        gooddata.value.push(el)
        } 
     }
      )
      console.log(gooddata.value)
      gooddata.value.forEach((el) => {
      usedata.value.push(el)
     })
      console.log(usedata.value)
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  })()
}
const gooddata = ref([])
function blah() {
  gooddata.value=[]
}
onBeforeMount(() => {
  test()
  setInterval(blah, 4500)
  setInterval(test, 5000)

})
</script>

<style lang="css" scoped></style>
