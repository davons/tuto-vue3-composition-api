<script setup>
import { ref, computed } from 'vue'

const header = ref('Shopping List app')
const newItem = ref('')
const newItemHighPriority = ref(false)
const showForm = ref(false)
const purchased = ref(false)
const items = ref([
  {id: 1, label : '10 party hats', purchased: false,  priority: false},
  {id: 2, label : '2 board', purchased: false, priority: true},
  {id: 3, label : '20 cups', purchased: false, priority: false},
])

const hasItem = computed(() => items.value.length == 0)
const nbString = computed(() => newItem.value.length)
const reversedItems = computed(() => {
  return [...items.value].reverse()
})

const handleSubmit = () => {
  const objectNewItem = {
    id: items.value.length,
    label: newItem.value,
    purchased: purchased.value,
    priority: newItemHighPriority.value
  }

  if (newItem.value.trim() !== "") {
    items.value.push(objectNewItem)
    newItem.value = ""
    newItemHighPriority.value = false
  }
}

const toglePurchased = (id) => {
  const item = items.value.find((item) => item.id === id)
  if (item) {
    item.purchased = !item.purchased
  }
}

const display = () => {
  showForm.value = !showForm.value
}

</script>

<template>
   <h1 style="display: flex; justify-content: space-between;">
      {{ header }}
      <div style="display: flex; gap: 0.5em;">
        <button v-if="showForm" @click="display">Cancel</button>
        <button v-else @click="display">Add new Item</button>
      </div>
  </h1>
  <form @submit.prevent="handleSubmit" v-if="showForm">
    <input 
      type="text" 
      v-model.trim="newItem" 
      placeholder="New item"
    />
    {{ nbString }} / 200
    <label>
      <input type="checkbox" v-model="newItemHighPriority"/>
     
    </label>
    <button type="submit" :disabled="newItem.length == 0">Save</button>
  </form>
  <ul>
    <li v-for="{ id, label, priority, purchased } in reversedItems" :key="id">
     
      <span :class="{'priority': priority, 'purchased': purchased }" @click="toglePurchased(id)">{{ label }}</span> 
    </li>
  </ul>
  <p v-if="hasItem">No item added</p>
</template>

<style>
 .priority {
  color: brown;
 }
 .purchased {
   text-decoration: line-through;
 }
</style>
