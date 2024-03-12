<template>
  <div></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { fetchData } from '@/stores/store';

onMounted(() => {
  fetchData()
})
</script>

<style lang="css" scoped></style>
