<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('')
const content = ref('')
const loading = ref(false)
const error = ref(null)
const uri = 'http://localhost:3000/projects'
const router = useRouter()

const handleSubmit = async () => {
  loading.value = true
  error.value = null
  try {
    const project = {
      id: crypto.randomUUID,
      title: title.value,
      content: content.value,
    }

    const response = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }
    router.push({
      name: 'home',
    })
  } catch (error: any) {
    error.value = error.message || 'HTTP Un known error AddProject'
    console.error('HTTP error Adding project')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>
        Titre
        <input v-model="title" type="text" />
      </label>

      <label>
        Contenu
        <textarea v-model="content"></textarea>
      </label>

      <button type="submit">Enregistrer</button>
    </form>
  </div>
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
  border: 0px;
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
