<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const redirect = () => {
  router.push({
    name: 'about',
  })
}
const go = () => {
  router.go(-1)
}
const forward = () => {
  router.go(1)
}
</script>

<template>
  <nav class="container">
    <ul>
      <li><strong>Router in Vue</strong></li>
    </ul>
    <ul>
      <li><RouterLink to="/" active-class="active"> Home </RouterLink></li>
      <li><RouterLink :to="{ name: 'jobs' }" active-class="active"> Jobs </RouterLink></li>
      <li><RouterLink :to="{ name: 'about' }" active-class="active"> About </RouterLink></li>
    </ul>
  </nav>

  <div style="display: flex; justify-content: center; gap: 1em; margin-bottom: 2em">
    <button @click="redirect">Redirect</button>
    <button @click="go">Go back</button>
    <button @click="forward">Go forward</button>
  </div>

  <RouterView />
</template>

<style scoped>
.container {
  text-align: center;
}
.active {
  color: black;
  background-color: aqua;
  border-radius: 20px;
  padding: 10px 10px;
}
</style>
