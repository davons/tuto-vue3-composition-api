<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
  title?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}
</script>

<template>
  <dialog :open="isOpen">
    <article>
      <header>
        <button aria-label="Close" rel="prev" @click="close"></button>
        <p>
          <strong>🗓️ {{ title || 'Default title' }}</strong>
        </p>
      </header>
      <p>
        We're excited to have you join us for our upcoming event. Please arrive at the museum on
        time to check in and get started.
      </p>
      <ul>
        <li>Date: Saturday, April 15</li>
        <li>Time: 10:00am - 12:00pm</li>
      </ul>
    </article>
  </dialog>
</template>

<style scoped></style>
