<script setup lang="ts">
import { ref } from 'vue'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { usePageStore } from '@/stores/page'
import { tasksWithProjectsQuery, type TasksWithProjects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/tasks'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TasksWithProjects | null>(null)

const getTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) {
    console.log(error)
  }

  tasks.value = data
}

/*;(async () => {
  //self executed
  await getTasks()
})()*/

await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped></style>
