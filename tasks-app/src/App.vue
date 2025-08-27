<script setup lang="ts">
import { computed, ref } from 'vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import FilterButton from './components/FilterButton.vue';
import { Task, TaskFilter } from './types';

const tasks = ref<Task[]>([]) 
const msg = ref('Tasks App')
const filter = ref<TaskFilter>("all")

const addTask = (newTak: string) => {
  tasks.value.push({
    id: crypto.randomUUID(),
    title: newTak,
    done: false
  })
}

const toggleDone = (id: string) => {
  const task = tasks.value.find((task) => task.id === id)
  if (task) {
    task.done = !task.done
  }
}

const totalDone = computed(() => {
  return tasks.value.reduce((total, task) => task.done ? total + 1 : total, 0)
})

const removeTask = (id: string) => {
  //tasks.value = tasks.value.filter((task) => task.id !== id)
  const index = tasks.value.findIndex((task) => task.id === id)
  if (index !== -1) {
    tasks.value.splice(index, 1)
  }
}

const setFiler = (value: TaskFilter) => {
  filter.value = value;
}

const filteredTasks = computed(() => {
  switch(filter.value) {
    case "all": 
      return tasks.value;
    case 'done':
      return tasks.value.filter((task) => task.done)
    case 'todo' : 
      return tasks.value.filter((task) => !task.done)
    default:
      return tasks.value;
  }
})
</script>

<template>
  <main>
      <h1>{{ msg }}</h1>
      <TaskForm @add-task="addTask"/>
      <h3 v-if="tasks.length == 0">Add a task to get started.</h3>
      <h3 v-else> {{ totalDone }} / {{ tasks.length }} tasks completed</h3>
      <div v-if="tasks.length !== 0" class="button-container">
        <FilterButton 
          :currentFilter="filter"
          filter="all" 
          @set-filter="setFiler"   
        />
        <FilterButton 
          :currentFilter="filter"
          filter="todo" 
          @set-filter="setFiler" 
        />
        <FilterButton 
          :currentFilter="filter"
          filter="done" 
          @set-filter="setFiler"
        />
      </div>
      <TaskList :tasks="filteredTasks" @toggle-done="toggleDone" @remove-task="removeTask"/>
  </main>
</template>

<style>
main {
  max-width: 800px;
  margin: 1em auto;
}
.button-container {
  display: flex;
  justify-content: end;
  gap: 0.5em;
}
</style>
