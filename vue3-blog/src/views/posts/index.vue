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
  <h1>Posts <RouterLink to="/posts/create">Add post</RouterLink></h1>
  <p v-if="error">{{ error }}</p>
  <p v-if="loading">
    <Spinner />
  </p>
  <PostItem :posts="posts" v-if="posts"/>
</template>
