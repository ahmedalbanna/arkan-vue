<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <div class="flex items-center gap-6">
        <router-link to="/" class="flex items-center gap-2">
          <span class="text-xl font-bold text-primary">ARKAN</span>
        </router-link>
        <nav class="hidden md:flex items-center gap-6">
          <router-link to="/dashboard" class="text-sm font-medium hover:text-primary transition-colors">Dashboard</router-link>
          <router-link to="/generate" class="text-sm font-medium hover:text-primary transition-colors">Generate</router-link>
          <router-link to="/projects" class="text-sm font-medium hover:text-primary transition-colors">Projects</router-link>
          <router-link to="/docs" class="text-sm font-medium hover:text-primary transition-colors">Docs</router-link>
          <router-link to="/pricing" class="text-sm font-medium hover:text-primary transition-colors">Pricing</router-link>
        </nav>
      </div>
      <div class="flex items-center gap-4">
        <template v-if="authStore.isAuthenticated">
          <router-link to="/profile/user-1" class="text-sm font-medium hover:text-primary">{{ authStore.user?.displayName }}</router-link>
          <Button variant="ghost" size="sm" @click="authStore.logout()">Logout</Button>
        </template>
        <template v-else>
          <router-link to="/login"><Button variant="ghost" size="sm">Login</Button></router-link>
          <router-link to="/signup"><Button size="sm">Sign Up</Button></router-link>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>
