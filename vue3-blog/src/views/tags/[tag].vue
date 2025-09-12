<script setup lang="ts">
import Spinner from '@/components/Spinner.vue';
import { usePosts } from '@/composables/usePosts';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const tagParam = route.params.tag as string

const { loading, error, posts, getPosts} = usePosts()
const postsWithTag = computed(() => {
  return posts.value.filter((p) => p.tags.includes(tagParam))
})

onMounted(() => {
  getPosts()
})

</script>

<template>

  <div class="container">
    <div v-if="error">{{ error }}</div>
    <span v-if="loading">
      <Spinner />
    </span>
    <div v-if="posts">
      <div v-for="p in postsWithTag" :key="p.id">
           <h2>{{ p.title }}</h2>
            <span v-for="tag in p.tags" :key="tag" class="pill" style="padding: 5px 5px">
              #{{ tag }}
            </span>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
