<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { fetchData } from '@/stores/store';

onMounted(() => {
  fetchData('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-si')
})
</script>

<template>
  <header>
    <NavBar />
  </header>
  <RouterView />
</template>

<style scoped></style>
