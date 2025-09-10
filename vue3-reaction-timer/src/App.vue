<script setup lang="ts">
import { ref } from 'vue'
import Block from './components/Block.vue'
import Result from './components/Result.vue'

const isPlaying = ref(false)
const showResult = ref(false)
const delay = ref(0)
const score = ref(0)

const start = () => {
  console.log('start...')
  isPlaying.value = true
  delay.value = 2000 + Math.random() * 5000
  console.log(delay.value)
}

const reactionTime = (value: number) => {
  score.value = value
  isPlaying.value = false
  showResult.value = true
}
</script>

<template>
  <div class="container">
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">Start</button>
    <Block :delay="delay" v-if="isPlaying" @reaction-time="reactionTime" />
    <Result v-if="showResult" :score="score" />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>
