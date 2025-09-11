<script setup lang="ts">
import AuthLayout from '@/components/Layout/main/AuthLayout.vue'
import { Suspense } from 'vue'
</script>

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component">
        <component :is="Component" :key="route.name"></component>
        <template #fallback> Loading... </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
