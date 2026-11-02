<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold mb-2">Projects</h1>
        <p class="text-muted-foreground">Manage all your projects in one place</p>
      </div>
      <Button>New Project</Button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card v-for="project in projects" :key="project.id" class="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div class="flex items-center justify-between">
            <CardTitle>{{ project.name }}</CardTitle>
            <span class="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">{{ project.status }}</span>
          </div>
          <CardDescription>{{ project.description }}</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <span>{{ project.type }}</span>
            <span>{{ project.updatedAt }}</span>
          </div>
          <Button variant="outline" class="w-full">Open Project</Button>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  { id: 1, name: 'Marketing Campaign Q1', description: 'Social media and email campaign materials', type: 'Presentation', status: 'Active', updatedAt: '2 days ago' },
  { id: 2, name: 'Research Report', description: 'Market analysis and findings', type: 'Document', status: 'Draft', updatedAt: '1 week ago' },
  { id: 3, name: 'Product Proposal', description: 'New product launch proposal', type: 'Proposal', status: 'In Review', updatedAt: '3 days ago' },
  { id: 4, name: 'Training Materials', description: 'Employee onboarding documentation', type: 'Document', status: 'Active', updatedAt: '5 days ago' },
]
</script>
