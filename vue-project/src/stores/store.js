import { ref } from 'vue'
import GtfsRealtimeBindings from 'gtfs-realtime-bindings'

export const usedata = ref([])
export const fetchData = async function () {
  console.log('refreshing data')
  const data = ref([])
  const gooddata = ref([])
  ;(async () => {
    gooddata.value = []
    usedata.value = []
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

      data.value.forEach((el) => {
        // if (Object.prototype.hasOwnProperty.call(el, 'vehicle')) {
          gooddata.value.push(el)
        // }
      })
      console.log(gooddata.value)
      gooddata.value.forEach((el) => {
        usedata.value.push(el)
      })
      console.log(usedata.value)
    } catch (error) {
      console.log(error)
    }
  })()
}
