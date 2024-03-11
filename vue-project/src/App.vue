<script setup>
import DataFetch from './components/DataFetch.vue'
import NavBar from './components/NavBar.vue'
import { RouterLink, RouterView } from 'vue-router'
import DataFetch from './components/DataFetch.vue';
import { usedata } from './stores/store';
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
