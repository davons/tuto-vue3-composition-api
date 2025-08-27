<script setup lang="ts">
import type { TaskFilter } from '@/types';

const props = defineProps<{
    filter: TaskFilter, 
    currentFilter: TaskFilter
}>()

const emits = defineEmits<{
    setFilter:[ filter: TaskFilter]
}>()
</script>

<template>
    <button 
        class="secondary"
        :class="{ contrast: currentFilter === filter }"
        @click="emits('setFilter', filter)"
    >
    {{ filter }}
    </button>
</template>

<style scoped>
button {
    text-transform: capitalize;
}
</style>