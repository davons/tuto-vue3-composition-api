<script setup lang="ts">
import type { IPost } from '@/composables/usePosts';
import { useTags } from '@/composables/useTags';

const props = defineProps<{
  posts: IPost[]
}>()

const { tags } = useTags(props.posts);
</script>

<template>
  <div>
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <RouterLink :to="{ name: 'tags', params: { tag: tag}}">#{{ tag }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>
