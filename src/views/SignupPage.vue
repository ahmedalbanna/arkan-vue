<template>
  <div class="min-h-screen flex items-center justify-center bg-muted/20 px-4">
    <Card class="w-full max-w-md">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl font-bold text-center">Create Account</CardTitle>
        <CardDescription class="text-center">Sign up to get started with Arkan</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Full Name</label>
          <input v-model="name" class="w-full px-3 py-2 border rounded-md" placeholder="John Doe" />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium">Email</label>
          <input v-model="email" type="email" class="w-full px-3 py-2 border rounded-md" placeholder="you@example.com" />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium">Password</label>
          <input v-model="password" type="password" class="w-full px-3 py-2 border rounded-md" placeholder="••••••••" />
        </div>
        <Button class="w-full" @click="handleSignup">Create Account</Button>
        <p class="text-center text-sm text-muted-foreground">
          Already have an account?
          <router-link to="/login" class="text-primary hover:underline">Login</router-link>
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
const name = ref('')
const email = ref('')
const password = ref('')

function handleSignup() {
  authStore.signup(email.value || 'user@example.com', name.value || 'User')
  router.push('/dashboard')
}
</script>
