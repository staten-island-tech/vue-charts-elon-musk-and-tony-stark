<script setup>
import DataFetch from './components/DataFetch.vue'
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <DataFetch />

  <header>
    <NavBar />
  </header>

  <RouterView />
</template>

<style scoped></style>
