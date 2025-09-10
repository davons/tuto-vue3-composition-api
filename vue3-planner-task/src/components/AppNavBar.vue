<script setup lang="ts"></script>

<template>
  <nav class="main-nav">
    <RouterLink to="/">Projects</RouterLink>
    <RouterLink :to="{ name: 'projects-add' }">Add a New Project</RouterLink>
  </nav>
</template>

<style scoped>
.main-nav {
  text-align: center;
  margin: 4px auto;
}

.main-nav a {
  display: inline;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
}
a.router-link-active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
</style>
