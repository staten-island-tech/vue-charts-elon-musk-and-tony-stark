<template>
  <div>
    <h2>Selected: {{ select }}</h2>
    <select v-model="select" name="" id="select">
      <option disabled value="">--Select a Train--</option>
      <option value="">All</option>
      <option>B</option>
      <option>D</option>
      <option>F</option>
      <option>M</option>
    </select>
    <div v-if="select === ''">
      <div v-for="item in data" :key="item.id">
        <div v-if="stops[item.vehicle.vehicle.stopId]">
          <h2>{{ item.vehicle.vehicle.trip.routeId }}</h2>
          <h2>{{ routes[item.vehicle.vehicle.trip.routeId].route_long_name }}</h2>
          <h2>Currently stopped at: {{ stops[item.vehicle.vehicle.stopId].stop_name }}</h2>

          <h3 v-for="stop in item.tripUpdate.tripUpdate.stopTimeUpdate" :key="stop.arrival.time">
            <h3 v-if="stops[stop.stopId]">
              Arrives at {{ stops[stop.stopId].stop_name }} in
              {{ timeToStop(stop.arrival.time) }} minutes.
            </h3>
          </h3>
          <h2>{{ item }}</h2>
        </div>
      </div>
    </div>
    <div v-else v-for="item in sort(select)" :key="item.id">
      <div v-if="stops[item.vehicle.vehicle.stopId]">
        <h2>{{ item.vehicle.vehicle.trip.routeId }}</h2>
        <h2>{{ routes[item.vehicle.vehicle.trip.routeId].route_long_name }}</h2>
        <h2>Currently stopped at: {{ stops[item.vehicle.vehicle.stopId].stop_name }}</h2>

        <h3 v-for="stop in item.tripUpdate.tripUpdate.stopTimeUpdate" :key="stop.arrival.time">
          <h3 v-if="stops[stop.stopId]">
            Arrives at {{ stops[stop.stopId].stop_name }} in
            {{ timeToStop(stop.arrival.time) }} minutes.
          </h3>
        </h3>
        <h2>{{ item }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usedata as data } from '@/stores/store'
import { stops } from '@/stores/google_transit/stops'
import { routes } from '@/stores/google_transit/routes'
import { onBeforeUpdate, onBeforeMount, ref } from 'vue'
import { fetchData } from '@/stores/store'
import { timeToStop } from '@/stores/store'

const select = ref('')

onBeforeMount(() => {
  fetchData('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm')
})

const sort = function (route) {
  const sorted = []
  data.value.forEach((piece) => {
    if (piece.vehicle.vehicle.trip.routeId == route) {
      sorted.push(piece)
    }
  })
  return sorted
}




</script>

<style lang="scss" scoped></style>
@/stores/google_transit/stops
