<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'

const title = ref('My first new App')
const input = useTemplateRef('my-input')

const handleClick = () => {
  const elem = input.value as HTMLElement
  elem.focus()
}
</script>

<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="my-input" />
  <button @click="handleClick">Ref</button>
</template>

<style scoped></style>
