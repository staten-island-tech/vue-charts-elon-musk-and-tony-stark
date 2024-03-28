<script setup>
import { RouterLink, RouterView } from 'vue-router'
function reload() {
  location.reload()
}
import NavBar from './components/NavBar.vue'

</script>


<template>
  <header>

    <div class="wrapper flex flex-row justify-center m-auto w-full">
      <nav class=" flex justify-center m-auto">
        <button class="mr-10 bg-slate-300 border-2 border-black hover:bg-slate-600">  <RouterLink to="/" class=" ">Home</RouterLink> </button>

        <button class="bg-slate-300 border-2 border-black hover:bg-slate-600"> <RouterLink to="/graphs" class="]"> Graphs</RouterLink></button>

      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
