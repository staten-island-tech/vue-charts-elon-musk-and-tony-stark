<script setup>
import { RouterView } from 'vue-router'
import DataFetch from './components/DataFetch.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <DataFetch />

  <header>
    <NavBar />
  </header>

  <RouterView />
</template>

<style scoped>

</style>
