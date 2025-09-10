<script setup lang="ts">
export type IFilterType = 'all' | 'completed' | 'ongoing'

const emit = defineEmits<{
  (e: 'update-filter', filterBy: IFilterType): void
}>()

const props = defineProps<{
  current: IFilterType
}>()
const updateFilter = (filterBy: IFilterType) => {
  emit('update-filter', filterBy)
}
</script>

<template>
  <div>
    <nav class="filter-nav">
      <button @click="updateFilter('all')" :class="{ active: current == 'all' }">Tous</button>
      <button @click="updateFilter('completed')" :class="{ active: current == 'completed' }">
        Terminé
      </button>
      <button @click="updateFilter('ongoing')" :class="{ active: current == 'ongoing' }">
        Encours
      </button>
    </nav>
  </div>
</template>

<style scoped>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>
