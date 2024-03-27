<script setup>
import { RouterLink, RouterView } from 'vue-router'
function reload() {
  location.reload()
}
import NavBar from './components/NavBar.vue'

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
