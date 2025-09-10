<script setup lang="ts">
import { ref } from 'vue'
import AppModal from './components/AppModal.vue'

const isOpen = ref(false)
const title = ref('My first new App')
const modalHeader = ref('')
const open = () => {
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}
</script>

<template>
  <h1>{{ title }}</h1>
  <Teleport to=".modals">
    <AppModal :title="modalHeader" :isOpen="isOpen" @close="close" />
  </Teleport>
  <button @click="open">Open</button>
</template>

<style scoped></style>
