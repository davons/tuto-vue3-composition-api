<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AddProjectForm from '@/components/AddProjectForm.vue'
import type { IProject } from '@/types'

const loading = ref(false)
const error = ref<string | null>(null)
const uri = 'http://localhost:3000/projects'
const router = useRouter()
const route = useRoute()
const project = ref<IProject | undefined>(undefined)

const handleSubmit = async (formData: { title: string; content: string }) => {
  loading.value = true
  error.value = null
  try {
    const editProject = {
      id: project.value?.id,
      ...formData,
    }

    const response = await fetch(`${uri}/${project.value?.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editProject),
    })

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    router.push({ name: 'home' })
  } catch (err: any) {
    error.value = err.message || 'An unknown error occurred while adding project'
    console.error('Error adding project:', err)
  } finally {
    loading.value = false
  }
}

const getProject = async (id: string) => {
  try {
    const response = await fetch(`${uri}/${id}`)
    if (!response.ok) {
      throw new Error(`HTTP Error status: ${response.status}`)
    }
    const data: IProject = await response.json()
    project.value = data
  } catch (err: any) {
    error.value = err.message || 'An unknown error occurred while editing project'
    console.error('Error editing project:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  const idParam = route.params.id
  if (idParam) {
    const id = String(idParam)
    getProject(id)
  }
})
</script>

<template>
  <div>
    <h1>Edit a Project</h1>
    <AddProjectForm @submit="handleSubmit" :project="project" />

    <div v-if="loading">Editing project...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<style scoped></style>
