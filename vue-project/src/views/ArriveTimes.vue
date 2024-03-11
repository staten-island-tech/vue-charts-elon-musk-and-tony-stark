<template>
  <div>
    <div v-for="item in usedata" :key="item">
      <h2>{{ item.vehicle.trip.routeId }}</h2>
      {{ item }}
    </div>
  </div>
</template>

<script setup>
import { usedata } from '@/stores/store'
</script>

<style lang="scss" scoped></style>
