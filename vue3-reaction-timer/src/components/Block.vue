<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'

const show = ref(false)
const time = ref(0)

// Timer type: works for both Node.js and browser
const timer = ref<ReturnType<typeof setInterval> | null>(null)

const props = defineProps<{
  delay: number
}>()

const emits = defineEmits<{
  reactionTime: [number]
}>()

onMounted(() => {
  setTimeout(() => {
    show.value = true
    startTimer()
  }, props.delay)
})

onUpdated(() => {
  console.log('Updated.........')
})

onUnmounted(() => {
  console.log('Unmounted.........')
})

const startTimer = () => {
  if (timer.value) {
    return
  }

  timer.value = setInterval(() => {
    time.value += 10
  }, 10)
}

const stopTimer = () => {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }

  emits('reactionTime', time.value)
}
</script>

<template>
  <div class="block" v-if="show" @click="stopTimer">Click me {{ delay }}</div>
</template>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background-color: #0f0f0f;
  color: white;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
