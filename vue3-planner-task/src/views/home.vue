<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { type IProject } from '@/types'
import ProjectItem from '@/components/ProjectItem.vue'
import FilterNav, { type IFilterType } from '@/components/FilterNav.vue'

const loading = ref(false)
const projects = ref<IProject[]>([])
const error = ref<string | null>(null)
const currentFilter = ref('all')

const uri = 'http://localhost:3000/projects'

const getProjects = async () => {
  loading.value = true

  try {
    const response = await fetch(uri)
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    const datas: IProject[] = await response.json()

    projects.value = datas
    loading.value = false
  } catch (error: any) {
    error.value = err.message || 'An unknown error occurred'
    console.error('Fetch Error:', err)
  } finally {
    loading.value = false
  }
}

const handleDelete = async (id: string) => {
  error.value = null
  try {
    const response = await fetch(`${uri}/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    projects.value = projects.value.filter((item) => item.id !== id)
  } catch (err: any) {
    error.value = err.message || 'An unknown error occurred'
    console.error('Delete Error:', err)
  }
}

const handelValidate = async (id: string) => {
  //loading.value = true
  error.value = null

  try {
    const project = projects.value.find((item) => item.id === id)
    if (!project) {
      throw new Error(`Project with ID ${id} not found.`)
    }

    project.status = !project.status

    const response = await fetch(`${uri}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...project }),
    })

    if (!response.ok) {
      throw new Error(`HTTP Error status ${response.status}`)
    }
  } catch (error: any) {
    error.value = error.message || 'An unknown error occurred'
    console.error('Validate Error:', error)
  }
}

const applyFilter = (value: IFilterType) => {
  currentFilter.value = value
}

const filterProjects = computed(() => {
  const filters: Record<string, () => IProject[]> = {
    all: () => projects.value,
    completed: () => projects.value.filter((p) => p.status),
    ongoing: () => projects.value.filter((p) => !p.status),
  }

  return (filters[currentFilter.value] || filters['all'])()
})

onMounted(() => {
  getProjects()
})
</script>

<template>
  <div class="home">
    <h1>Projects</h1>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>Error: {{ error }}</p>
    </div>
    <div v-else-if="projects.length">
      <FilterNav @update-filter="applyFilter" :current="currentFilter" />
      <div v-for="project in filterProjects" :key="project.id" class="project">
        <ProjectItem :project="project" @delete="handleDelete" @validate="handelValidate" />
      </div>
    </div>
    <div v-else>
      <p>No projects to display.</p>
    </div>
  </div>
</template>

<style scoped></style>
