<script setup lang="ts">
import { ref, watchEffect } from 'vue'

// Champs contrôlés
const title = ref('')
const content = ref('')

const props = defineProps<{
  project?: { title: string; content: string }
}>()

// Synchroniser les valeurs locales quand props.project change
watchEffect(() => {
  if (props.project) {
    title.value = props.project.title
    content.value = props.project.content
  }
})

// Définir les événements émis
const emit = defineEmits<{
  (e: 'submit', payload: { title: string; content: string }): void
}>()

// Soumettre le formulaire
const handleSubmit = () => {
  emit('submit', { title: title.value, content: content.value })
  // Optionnel : reset du formulaire
  title.value = ''
  content.value = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label>
      Titre
      <input v-model="title" type="text" required />
    </label>

    <label>
      Contenu
      <textarea v-model="content" required></textarea>
    </label>

    <button type="submit">
      {{ props.project ? 'Update Project' : 'Add Project' }}
    </button>
  </form>
</template>

<style scoped>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  resize: both; /* permet redimensionnement H+V */
}

form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
