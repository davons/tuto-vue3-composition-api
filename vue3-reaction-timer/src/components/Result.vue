<script setup lang="ts">
const props = defineProps<{
  score: number
}>()
</script>

<template>
  <div>
    <p v-if="score">Reaction Time: {{ score }} ms</p>
  </div>
</template>

<style scoped></style>
