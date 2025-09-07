<script setup lang="ts">
import { supabase } from '@/lib/SupabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[]>([])

const getTasks = async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) {
    console.log(error)
  }

  tasks.value = data
}

;(async () => {
  //self executed
  await getTasks()
})()
</script>

<template>
  <h1>Tasks</h1>
  <RouterLink to="/">Go to Home</RouterLink>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.name }}
    </li>
  </ul>
</template>

<style scoped></style>
