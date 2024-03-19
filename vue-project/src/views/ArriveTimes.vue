<template>
  <div>
    <div v-for="item in data" :key="item.id">
      <h2>{{ routes[item.vehicle.vehicle.trip.routeId].route_long_name }}</h2>
      <h2>Currently stopped at: {{ stops[item.vehicle.vehicle.stopId].stop_name }}</h2>
      
      <h3 v-for="stop in item.tripUpdate.tripUpdate.stopTimeUpdate" :key="stop.arrival.time"> {{ stop }}</h3>
      <h2>{{ item }}</h2>
    </div>
  </div>
</template>

<script setup>
import { usedata as data } from '@/stores/store'
import { stops } from '@/stores/google_transit/stops'
import { routes } from '@/stores/google_transit/routes';
</script>

<style lang="scss" scoped></style>
@/stores/google_transit/stops
