import Home from '@/views/home.vue'
import ProjectsEdit from '@/views/projects/[id].vue'
import ProjectsAdd from '@/views/projects/add.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects/edit/:id',
      name: 'projects-edit',
      component: ProjectsEdit,
    },
    {
      path: '/projects/add',
      name: 'projects-add',
      component: ProjectsAdd,
    },
  ],
})

export default router
