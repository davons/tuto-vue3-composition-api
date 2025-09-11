<script setup lang="ts">
</script>

<template>

<nav class="container">
  <router-link to="/" style="margin-right: 20px;">Home</router-link>
  <router-link to="/posts/create">Add a New Post</router-link>
</nav>

<router-view/>

</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
