<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DataFetch from './components/DataFetch.vue';
import { usedata, routes } from './stores/store';
function reload() {
  location.reload()
}
</script>


<template>
  <DataFetch />

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
