<template>
  <div>
    <div v-for="item in usedata" :key="item.id">
      <!-- <h2>{{ item.vehicle.trip.routeId }}</h2> -->
<h2>{{ item }}</h2>
    </div>
  </div>
</template>

<script setup>
import { usedata } from '@/stores/store'
</script>

<style lang="scss" scoped></style>
