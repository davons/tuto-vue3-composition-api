<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { dbFirebase } from '../../../firebase/dbConfig'

const title = ref<string>('')
const body = ref<string>('')
const tag = ref<string>('')
const tags = ref<string[]>([])
const loading = ref<boolean>(false)
const error = ref<string | null>(null)
const router = useRouter()

const addTags = (e) => {
  if (e.type == 'keydown' && tag.value.trim() && !tags.value.includes(tag.value)) {
    tags.value.push(tag.value)
  }
  tag.value = ''
}

const handleSubmit = async() => {
  loading.value = true
  error.value = null
  try {

    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: title.value, body: body.value, tags: tags.value })
    })

    if (!response.ok) {
      throw new Error(`HTTP error status ${response.status}`)
    }

    router.push({ name: 'posts' })

  }catch(e: any) {
    error.value = e.message || 'Unknown error'
  }
}

</script>

<template>
  <div class="container">
    <h1>Create</h1>
    <div v-if="error"> {{ error }}</div>
    <form @submit.prevent="handleSubmit">

      <label>
        Title:
        <input v-model="title" type="text" required/>
      </label>
      <label>
        Body
        <textarea v-model="body" required></textarea>
      </label>

      <label>
        Tags (Enter to add Tags)
        <input v-model="tag" type="text" @keydown.enter.prevent="addTags"/>
        <div v-for="tag in tags" :key="tag" class="pill">
          #{{ tag }}
        </div>
      </label>

      <button type="submit">Save</button>
    </form>
  </div>
</template>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input, textarea {
  display: block;
  margin: 10px 0;
  width: 100px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}

textarea {
 height: 160x;
}

button {
  display: block;
  margin-top: 30px;
  background: #f8f;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}

</style>
