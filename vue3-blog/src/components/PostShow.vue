
<script setup lang="ts">
import type { IPost } from '@/composables/usePosts';

const props = defineProps<{
  post: IPost
}>()
</script>


<template>
  <div v-if="post">
    <h1>Post: #{{ post.id }}</h1>
    <p>{{ post?.body }}</p>
    <span v-for="tag in post.tags" :key="tag" class="pill"> #{{ tag }}</span>
  </div>
</template>

<style scoped>

</style>
