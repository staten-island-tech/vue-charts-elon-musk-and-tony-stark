import { ref } from 'vue'
import GtfsRealtimeBindings from 'gtfs-realtime-bindings'

export const usedata = ref([])
export const fetchData = async function (urlInput) {
  console.log('refreshing data')
  const data = ref([])
  const gooddata = ref([])
  ;(async () => {
    gooddata.value = []
    usedata.value = []
    try {
      const response = await fetch(
        urlInput,
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

      data.value.forEach((el, i) => {
        if (Object.prototype.hasOwnProperty.call(el, 'vehicle')) {
          let pushed = {vehicle: el, tripUpdate: data.value[i-1]}
          gooddata.value.push(pushed)
        }
      })  
      console.log(gooddata.value)
      gooddata.value.forEach((el) => {
        usedata.value.push(el)
        console.log(`pushing data to USE`)
      })
      console.log(usedata.value)
    } catch (error) {
      console.log(error)
    }
  })()
}

export async function getPosition(options){
  return new Promise((resolve, reject) => 
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
}
export const labels = ref([])
export const routes = ref([0,0,0,0])
