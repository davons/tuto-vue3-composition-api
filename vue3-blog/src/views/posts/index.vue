<script setup lang="ts">
import { onMounted } from 'vue';
import PostItem from '@/components/PostItem.vue'
import { usePosts } from '@/composables/usePosts';
import Spinner from '@/components/Spinner.vue';

const { posts, loading, error, getPosts } = usePosts()
onMounted(() => {
  getPosts()
})
</script>

<template>
  <div class="container">
  <h1>Posts</h1>
  <p v-if="error">{{ error }}</p>
  <p v-if="loading">
    <Spinner />
  </p>
  <PostItem :posts="posts" v-if="posts"/>
  </div>

</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
