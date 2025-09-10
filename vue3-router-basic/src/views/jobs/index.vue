<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface IJob {
  title: string
  id: number
  content: string
}

const jobs = ref<IJob[]>([])

const findJobs = async () => {
  try {
    const response = await fetch('http://localhost:3000/jobs')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: IJob[] = await response.json()
    jobs.value = data

    console.log('Jobs fetched: ', jobs.value)
  } catch (error) {
    console.warn('Error fetching jobs:', error)
  }
}

onMounted(() => {
  findJobs()
})
</script>

<template>
  <div style="text-align: center">
    <h1>Jobs</h1>
    <ul>
      <li v-for="job in jobs" :key="job.id" class="job" style="list-style-type: none">
        <RouterLink :to="{ name: 'jobs-show', params: { id: job.id } }">
          <h2>{{ job.title }}</h2>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h2:hover {
  background: #ddd;
}

.job a {
  text-decoration: none;
}
</style>
