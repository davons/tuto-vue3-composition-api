<script setup lang="ts">
import { useCycleList } from './composables/useCycleList'

const { state, prev, next, go } = useCycleList(['Dog', 'Cat', 'Bird', 'Iguana'])
</script>

<template>
  <h1>Composables</h1>
  <div>
    {{ state }}
    <br />
    <button @click="prev">Previous</button> <button @click="next">Next</button>
    <button @click="go(2)">Go to {{ 2 }}</button>
  </div>
</template>

<style scoped></style>
