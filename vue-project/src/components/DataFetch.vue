<template>
    <div>  
      <button @click="fetch">click me</button>
      </div>
</template>

<script setup>
import GtfsRealtimeBindings from "gtfs-realtime-bindings";
let data = []
async function fetch() {
  try {
    const response = await fetch("https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm", {
      headers: {
        "x-api-key": "Lbc0gTUOwm8GvqZgMmu2t3MEktcvreZr8wiuihJn",
        // replace with your GTFS-realtime source's auth token
        // e.g. x-api-key is the header value used for NY's MTA GTFS APIs
      },
    });
    if (!response.ok) {
      const error = new Error(`${response.url}: ${response.status} ${response.statusText}`);
      error.response = response;
      throw error;
      process.exit(1);
    }
    const buffer = await response.arrayBuffer();
    const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
      new Uint8Array(buffer)
    );
    feed.entity.forEach((entity) => {
      if (entity.tripUpdate) {
        console.log(entity.tripUpdate);
        data = feed
        console.log(feed)
      }
    });
  }
  catch (error) {
    console.log(error);
    process.exit(1);
  }
}();
</script>

<style lang="css" scoped>

</style>