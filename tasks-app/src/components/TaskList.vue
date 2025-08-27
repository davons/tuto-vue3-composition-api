<script setup lang="ts">
import { Task } from '@/types';

const props = defineProps<{
    tasks: Task[]
}>()

const emits = defineEmits<{
    toggleDone: [id: string], 
    removeTask: [id: string]
}>()

</script>

<template>
    <div class="task-list">
        <TransitionGroup name="task-list" tag="div" class="task-list">
            <article v-for="task in tasks" :key="task.id" class="task">
                <label>
                    <input  
                        type="checkbox" 
                        @input="emits('toggleDone',task.id)" 
                        :checked="task.done" 
                    />
                    <span :class="{ done: task.done}"> {{ task.title }}</span>
                </label>
                <button class="outline" @click="emits('removeTask', task.id)">Remove</button>
            </article> 
        </TransitionGroup>  
    </div>
</template>

<style scoped>
.task-list {
    margin-top: 1rem;
}
.done {
    text-decoration: line-through;
}
.task {
    display: flex;
    justify-content: space-between;
}
.task-list-enter-active,
.task-list-leave-active {
  transition: all 0.5s ease;
}
.task-list-enter-from,
.task-list-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
</style>