import { createRouter, createWebHistory } from 'vue-router'

import Posts from '@/views/posts/index.vue'
import PostsShow from '@/views/posts/[id].vue'
import PostsCreate from '@/views/posts/create.vue'
import Tags from '@/views/tags/[tag].vue'

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
    {
      path: '/tags/:tag',
      name: 'tags',
      component: Tags
    }
  ],
})

export default router
