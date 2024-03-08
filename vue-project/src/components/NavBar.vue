<template>
  <nav>
    <RouterLink class="button" to="/">Home</RouterLink>
    <RouterLink class="button" to="/graphs">Graphs</RouterLink>
  </nav>
</template>

<script setup></script>

<style lang="css" scoped>

@import url('../assets/base.css');
  nav {
    font-size: 2rem;
  }

  .button {
    color: var(--color-heading);
    transition: 0.5s all;
  }

  .button:hover {
    background-color: var(--color-bg-anti);
  }
</style>
