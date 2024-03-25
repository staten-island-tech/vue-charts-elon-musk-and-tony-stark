<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import { fetchData } from '@/stores/store';

onBeforeMount(() => {
  fetchData('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm')
})
</script>

<template>
  <header>
    <NavBar />
  </header>
  <RouterView />
</template>

<style scoped></style>
