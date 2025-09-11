import { createRouter, createWebHistory } from 'vue-router'

import Posts from '@/views/posts/index.vue'
import PostsShow from '@/views/posts/[id].vue'
import PostsCreate from '@/views/posts/create.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'posts-show',
      component: PostsShow
    },
    {
      path: '/posts/create',
      name: 'posts-create',
      component: PostsCreate
    },
  ],
})

export default router
