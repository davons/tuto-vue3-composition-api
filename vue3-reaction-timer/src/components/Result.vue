<script setup lang="ts">
import { onMounted, ref } from 'vue'

const result = ref<string>('')

const props = defineProps<{
  score: number
}>()

onMounted(() => {
  if (props.score) {
    result.value = 'Top'
  } else if (props.score) {
    result.value = 'Rapid reflex'
  } else {
    result.value = 'Mauvais reflex'
  }
})
</script>

<template>
  <div class="result">
    <p v-if="score">Reaction Time: {{ score }} ms</p>
  </div>
</template>

<style scoped>
.result {
  background-color: aqua;
  text-align: center;
}
</style>
