<script setup lang="ts">
import { ref } from 'vue'
import { useCycleList } from './composables/useCycleList'

const items = ref(['Dog', 'Cat', 'Bird', 'Iguana'])

const { state, prev, next, go } = useCycleList(items)
//const { state, prev, next, go } = useCycleList(['Dog', 'Cat', 'Bird', 'Iguana'])
//const { state, prev, next, go } = useCycleList(() => ['Dog', 'Cat', 'Bird', 'Iguana'])

const goto = ref(0)
</script>

<template>
  <h1>Composables</h1>
  <div>
    {{ state }}
    <br />
    <button @click="prev">Previous</button> <button @click="next">Next</button>
    <br />
    <input type="text" v-model="goto" />
    <button @click="go(goto)">Go to {{ goto }}</button>
  </div>
</template>

<style scoped></style>
