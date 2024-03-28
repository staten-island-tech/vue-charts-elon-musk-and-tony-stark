<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DataFetch from './components/DataFetch.vue';
import { usedata, routes } from './stores/store';
function reload() {
  location.reload()
}
</script>


<template>
  <DataFetch/>

  <header>

    <div class="wrapper flex flex-row justify-center m-auto w-full">
      <nav class="grid grid-cols-2 justify-center m-auto">
        <button class="col-start-1 w-1/4 justify-center m-auto bg-slate-300 border-2 border-black hover:bg-slate-600">  <RouterLink to="/" class="w-full">Home</RouterLink> </button>

        <button class=" col-start-2 w-1/4 justify-center m-auto bg-slate-300 border-2 border-black hover:bg-slate-600"> <RouterLink to="/graphs" class="w-full"> Graphs</RouterLink></button>

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
