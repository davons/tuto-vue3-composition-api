<script setup lang="ts">
import { ref } from 'vue';

const newTask = ref("")
const error = ref("")

const emits = defineEmits<{
    addTask: [newTaks: string]
}>()

const handleSubmit = () => {
    if (newTask.value.trim() != "") {
        emits("addTask", newTask.value)
        newTask.value = ""
    } else {
        error.value = "Task can not be empty."
    }
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <label>
          New task
          <input 
               v-model="newTask" 
               name="newTask"
               :aria-invalid="!!error || undefined"
               aria-describedby="invalid-helper"
               @input="error=''"
          />
        </label>
        <small v-if="error" id="invalid-helper">{{ error }}</small>

        <div class="button-container">        
          <button>Add</button>
        </div>
    </form>
</template>

<style scoped>
</style>
    
