<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'vue-sonner'
import { Button } from '@/components/ui/button'
import 'vue-sonner/style.css'

const handleToast = () => {
  toast('Event has been created', {
    description: 'Sunday, December 03, 2023 at 9:00 AM',
    action: {
      label: 'Undo',
      onClick: () => console.log('Undo'),
    },
  })
}
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main>
      <Button variant="outline" @click="handleToast"> Add to calendar </Button>
    </main>
  </SidebarProvider>
  <Toaster />
</template>
