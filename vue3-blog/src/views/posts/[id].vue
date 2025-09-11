<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePost } from '@/composables/usePost';
import { onMounted } from 'vue';
import Spinner from '@/components/Spinner.vue';

const route = useRoute()

const idParam = route.params?.id as string
const { loading, error, post, getPost } = usePost(idParam)

onMounted(() => {
  getPost()
})
</script>

<template>
  <div v-if="post">
  <h1>Post: #{{ idParam }}</h1>
  <p v-if="error">{{ error }}</p>
  <p>{{ post?.body }}</p>
  <p>{{ post?.tags }}</p>
  </div>

  <p  v-if="loading"><Spinner/></p>
</template>

<style scoped>

</style>
