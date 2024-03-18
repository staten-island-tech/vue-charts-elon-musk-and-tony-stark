<template>
  <div>
    <div v-for="item in usedata" :key="item.id">
      <!-- <h2>{{ routes[item.vehicle.trip.routeId].route_long_name }}</h2>
      <h2>{{ stops[item.vehicle.stopId].stop_name }}</h2> -->
      <h2>{{ item }}</h2>
    </div>
  </div>
</template>

<script setup>
import { usedata } from '@/stores/store'
import { stops } from '@/stores/google_transit/stops'
import { routes } from '@/stores/google_transit/routes';
</script>

<style lang="scss" scoped></style>
@/stores/google_transit/stops
