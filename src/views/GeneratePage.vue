<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Generate Content</h1>
      <p class="text-muted-foreground">Create AI-powered content for your projects</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card v-for="tool in tools" :key="tool.name" class="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div class="flex items-center gap-3 mb-2">
            <div class="p-2 bg-primary/10 rounded-lg">
              <component :is="tool.icon" class="h-6 w-6 text-primary" />
            </div>
            <CardTitle class="text-xl">{{ tool.name }}</CardTitle>
          </div>
          <CardDescription>{{ tool.description }}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button class="w-full">Start Creating</Button>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Presentation, FileSpreadsheet, Mail, BookOpen, Image } from 'lucide-vue-next'

const tools = [
  { name: 'Document', description: 'Create professional documents with AI assistance', icon: FileText },
  { name: 'Presentation', description: 'Generate slides and presentations instantly', icon: Presentation },
  { name: 'Report', description: 'Build comprehensive reports and analysis', icon: FileSpreadsheet },
  { name: 'Email', description: 'Write effective emails and communications', icon: Mail },
  { name: 'Essay', description: 'Generate essays and academic content', icon: BookOpen },
  { name: 'Image', description: 'Create and enhance images with AI', icon: Image },
]
</script>
