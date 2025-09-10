<script setup lang="ts">
import type { IProject } from '@/types'
import { Trash, Pen, Check } from 'lucide-vue-next'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const show = ref(false)
const props = defineProps<{
  project: IProject
}>()

const emit = defineEmits<{
  (e: 'delete', id: string): void
  (e: 'edit', id: string): void
  (e: 'validate', id: string): void
}>()

const toggle = () => {
  show.value = !show.value
}
</script>

<template>
  <div class="project" :class="{ done: project.status }">
    <div class="action">
      <h3 @click="toggle">{{ project.title }}</h3>
      <div class="icons">
        <span @click="emit('delete', project.id)">
          <Trash color="red" :size="24" />
        </span>
        <RouterLink :to="{ name: 'projects-edit', params: { id: project.id } }">
          <Pen color="blue" :size="24" />
        </RouterLink>
        <span @click="emit('validate', project.id)">
          <Check color="green" :size="24" />
        </span>
      </div>
    </div>
    <div class="details" v-if="show">
      <p>{{ project.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 1px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
.project h3 {
  cursor: pointer;
}
.action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icons {
  display: flex;
  gap: 5px;
  cursor: pointer;
}

.done {
  border-left: 4px solid #2fe900b7;
}
</style>
