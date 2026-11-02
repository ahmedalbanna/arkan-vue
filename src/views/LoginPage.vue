<template>
  <div class="min-h-screen flex items-center justify-center bg-muted/20 px-4">
    <Card class="w-full max-w-md">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl font-bold text-center">Login</CardTitle>
        <CardDescription class="text-center">Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Email</label>
          <input v-model="email" type="email" class="w-full px-3 py-2 border rounded-md" placeholder="you@example.com" />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium">Password</label>
          <input v-model="password" type="password" class="w-full px-3 py-2 border rounded-md" placeholder="••••••••" />
        </div>
        <Button class="w-full" @click="handleLogin">Sign In</Button>
        <p class="text-center text-sm text-muted-foreground">
          Don't have an account?
          <router-link to="/signup" class="text-primary hover:underline">Sign up</router-link>
        </p>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const email = ref('')
const password = ref('')

function handleLogin() {
  authStore.login(email.value || 'user@example.com')
  router.push('/dashboard')
}
</script>
