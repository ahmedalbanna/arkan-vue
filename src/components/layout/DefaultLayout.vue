<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
    <footer class="border-t py-6">
      <div class="container mx-auto px-4 text-center text-sm text-muted-foreground">
        © 2026 Arkan. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
</script>
