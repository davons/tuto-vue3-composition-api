<script setup lang="ts">
import AppNavBar from './components/AppNavBar.vue'
</script>

<template>
  <AppNavBar />
  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  background: #f2f2f2;
}
#app {
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
