<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { fetchData } from './stores/store'
import { usedata as data } from './stores/store';

</script>

<template>
  <header>
    <div class="wrapper flex flex-row justify-center m-auto w-full">
      <nav class="flex justify-center m-auto">
        <button class="mr-10 bg-slate-300 border-2 border-black hover:bg-slate-600">
          <RouterLink to="/" class=" ">Home</RouterLink>
        </button>

        <button class="bg-slate-300 border-2 border-black hover:bg-slate-600">
          <RouterLink to="/graphs" class="]"> Graphs</RouterLink>
        </button>
        <button class="bg-slate-300 border-2 border-black hover:bg-slate-600">
          <RouterLink to="/graphTwo" class="]"> Graphs 2</RouterLink>
        </button>
        <button
          class="button bg-slate-300 border-2 border-black hover:bg-slate-600"
          @click="
            fetchData('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm')
          "
        >
          Refresh Data
        </button>
      </nav>
    </div>
  </header>
  <RouterView :data="data"/>
</template>

<style scoped></style>
