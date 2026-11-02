<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Dashboard</h1>
      <p class="text-muted-foreground">Welcome back! Here's an overview of your workspace.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card v-for="stat in stats" :key="stat.label">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium">{{ stat.label }}</CardTitle>
          <component :is="stat.icon" class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ stat.value }}</div>
          <p class="text-xs text-muted-foreground">{{ stat.change }}</p>
        </CardContent>
      </Card>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
          <CardDescription>Your latest work</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div v-for="project in projects" :key="project.id" class="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 class="font-medium">{{ project.name }}</h3>
                <p class="text-sm text-muted-foreground">{{ project.type }}</p>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Start creating something new</CardDescription>
        </CardHeader>
        <CardContent class="space-y-2">
          <router-link to="/generate" class="block">
            <Button variant="outline" class="w-full justify-start">Generate Content</Button>
          </router-link>
          <router-link to="/editor" class="block">
            <Button variant="outline" class="w-full justify-start">Open Editor</Button>
          </router-link>
          <router-link to="/projects" class="block">
            <Button variant="outline" class="w-full justify-start">View All Projects</Button>
          </router-link>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, FolderOpen, Zap, Users } from 'lucide-vue-next'

const stats = [
  { label: 'Total Projects', value: '12', change: '+2 from last month', icon: FolderOpen },
  { label: 'Documents', value: '48', change: '+8 from last month', icon: FileText },
  { label: 'AI Generations', value: '156', change: '+24 from last month', icon: Zap },
  { label: 'Team Members', value: '3', change: '+1 from last month', icon: Users },
]

const projects = [
  { id: 1, name: 'Marketing Campaign', type: 'Presentation' },
  { id: 2, name: 'Research Report', type: 'Document' },
  { id: 3, name: 'Product Proposal', type: 'Proposal' },
]
</script>
