<template>
  <div>
  </div>
</template>

<script setup>
import GtfsRealtimeBindings from 'gtfs-realtime-bindings'
import { onBeforeMount } from 'vue'
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
      }
      const buffer = await response.arrayBuffer()
      const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(new Uint8Array(buffer))
      data.value = feed.entity
      console.log(data.value)

      
    } catch (error) {
      console.log(error)
    }
  })()
}

onBeforeMount(() => {
  test()
  setInterval(test, 5000)
})
</script>

<style lang="css" scoped></style>
