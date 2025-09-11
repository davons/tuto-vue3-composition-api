<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePost } from '@/composables/usePost';
import { onMounted } from 'vue';
import Spinner from '@/components/Spinner.vue';
import PostShow from '@/components/PostShow.vue';

const route = useRoute()

const idParam = route.params?.id as string
const { loading, error, post, getPost } = usePost(idParam)

onMounted(() => {
  getPost()
})
</script>

<template>
   <div class="container">
    <p v-if="error">{{ error }}</p>
    <p  v-if="loading"><Spinner/></p>
    <PostShow :post="post" v-if="post"/>
  </div>
</template>

<style scoped>

</style>
