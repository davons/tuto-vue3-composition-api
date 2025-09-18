<script setup lang="ts">
defineProps({
    wordOfTheDay: String
})
</script>
<template>
    <input type="text" />
    <p>You won!</p>
    <p>{{ wordOfTheDay }}</p>
</template>