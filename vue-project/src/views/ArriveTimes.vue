<template>
  <div>
    <div v-for="item in data" :key="item.id">
      <h2>{{ routes[item.vehicle.vehicle.trip.routeId].route_long_name }}</h2>
      <h2>Currently stopped at: {{ stops[item.vehicle.vehicle.stopId].stop_name }}</h2>

      <h3 v-for="stop in item.tripUpdate.tripUpdate.stopTimeUpdate" :key="stop.arrival.time">
        Arrives at {{ stops[stop.stopId].stop_name }} in {{ timeToStop(stop.arrival.time) }} minutes.
      </h3>
      <h2>{{ item }}</h2>
    </div>
  </div>
</template>

<script setup>
import { usedata as data } from '@/stores/store'
import { stops } from '@/stores/google_transit/stops'
import { routes } from '@/stores/google_transit/routes'

const timeToStop = function(time) {
  let currentTime = Date.now()
  let currentTimeSeconds = toSeconds(currentTime)
  console.log(`time inputted ${time} - ${currentTimeSeconds}`)
  let timeLeftUntilStop = time - currentTimeSeconds
  console.log(timeLeftUntilStop)
  return Math.round(timeLeftUntilStop / 60)
}

const toSeconds = function (digit) { 
  return Math.round(digit / 1000)
}
</script>

<style lang="scss" scoped></style>
@/stores/google_transit/stops
