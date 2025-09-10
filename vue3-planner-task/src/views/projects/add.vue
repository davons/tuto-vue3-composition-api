<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AddProjectForm from '@/components/AddProjectForm.vue'

const loading = ref(false)
const error = ref<string | null>(null)
const uri = 'http://localhost:3000/projects'
const router = useRouter()

const handleSubmit = async (formData: { title: string; content: string }) => {
  loading.value = true
  error.value = null
  try {
    const project = {
      id: crypto.randomUUID(),
      ...formData,
    }

    const response = await fetch(uri, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
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
</script>

<template>
  <div>
    <h1>Add a New Project</h1>
    <AddProjectForm @submit="handleSubmit" />

    <div v-if="loading">Saving project...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<style scoped></style>
