
<script setup lang="ts">
import type { IPost } from '@/App.vue';

const props = defineProps<{
  posts?: IPost[]
}>()

</script>

<template>
  <div v-if="posts">
    <template v-for="post in posts" :key="post.id">
      <RouterLink :to="{ name: 'posts-show', params: { id: post.id }}">
        <h1>{{ post.title }}</h1>
      </RouterLink>
      <p>{{ post.body }}</p>
      <span v-for="tag in post.tags" :key="tag" class="pill" style="padding: 5px 5px">
        #{{ tag }}
      </span>
    </template>
  </div>
</template>

<style scoped>

</style>
