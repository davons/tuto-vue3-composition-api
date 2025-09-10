<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

interface IJob {
  id: number
  title: string
  content: string
}

const route = useRoute()
const job = ref<IJob | null>(null)

const fetchJob = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:3000/jobs?id=${id}`)

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    const data: IJob[] = await response.json()
    job.value = data.length > 0 ? data[0] : null
  } catch (error) {
    console.warn(`HTTP error : `, error)
  }
}

onMounted(() => {
  const idParam = route.params.id
  if (idParam) {
    const id = Number(idParam)
    if (!isNaN(id)) fetchJob(id)
  }
})
</script>

<template>
  <div style="text-align: center">
    <h1>Details Job: {{ job?.title || 'Loading...' }}</h1>
    <p v-if="job">{{ job.content }}</p>
  </div>
</template>

<style scoped></style>
