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
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <button @click="reload">Update Graph!</button>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/graphs">Graphs</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
