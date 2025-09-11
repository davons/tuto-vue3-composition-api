<script setup lang="ts">
import { h, ref } from 'vue'
import type { Tables } from '../../../database/types'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { usePageStore } from '@/stores/page'
import { projectsQuery, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/projects'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)

const getProjects = async () => {
  const { data, error } = await projectsQuery

  if (error) {
    console.log(error)
  }

  projects.value = data as Tables<'projects'>[]
}

await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

<style scoped></style>
