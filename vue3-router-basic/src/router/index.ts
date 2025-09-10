import About from '@/views/about.vue'
import Home from '@/views/home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Jobs from '@/views/jobs/index.vue'
import JobsShow from '@/views/jobs/[id].vue'
import NotFound from '@/views/[...catchAll].vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
    {
      path: '/jobs/:id',
      name: 'jobs-show',
      component: JobsShow,
    },
    {
      path: '/:cathAll(.*)',
      name: 'notfound',
      component: NotFound,
    },
  ],
})

export default router
