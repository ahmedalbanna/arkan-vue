<template>
  <div class="flex flex-col">
    <section class="py-20 md:py-32 bg-background overflow-hidden">
      <div class="container mx-auto px-4 text-center">
        <div class="text-6xl font-headline font-bold text-primary animate-fade-in-up">
          ARKAN
        </div>

        <h1
          class="text-2xl sm:text-3xl md:text-4xl font-headline font-semibold text-muted-foreground mb-4 overflow-hidden whitespace-nowrap mx-auto animate-fade-in-up"
          style="animation-delay: 0.1s"
        >
          AI-Powered Solutions for Your Business
        </h1>

        <p
          class="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up"
          style="animation-delay: 0.2s"
        >
          Transform your workflow with intelligent automation and powerful AI tools
        </p>

        <div
          class="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up"
          style="animation-delay: 0.3s"
        >
          <Button size="lg" class="font-headline w-full sm:w-auto">
            Explore Projects
            <ArrowRight class="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="secondary" class="font-headline w-full sm:w-auto">
            Try Summarizer
          </Button>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-muted/20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card
            v-for="(feature, index) in features"
            :key="index"
            class="p-8 flex flex-col items-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up bg-card"
            :style="{ animationDelay: `${0.4 + index * 0.1}s` }"
          >
            <div class="p-5 bg-primary/10 rounded-full mb-6 transition-colors group-hover:bg-primary">
              <component
                :is="feature.icon"
                class="w-12 h-12 text-primary transition-colors group-hover:text-primary-foreground"
              />
            </div>
            <CardHeader class="p-0">
              <CardTitle class="text-2xl font-headline font-semibold mb-3">{{ feature.title }}</CardTitle>
            </CardHeader>
            <CardContent class="p-0">
              <p class="text-muted-foreground leading-relaxed">
                {{ feature.description }}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ArrowRight, BrainCircuit, FileSpreadsheet, Presentation } from 'lucide-vue-next'

const features = [
  {
    icon: FileSpreadsheet,
    title: 'Smart Documents',
    description: 'Create and manage documents with AI assistance',
  },
  {
    icon: BrainCircuit,
    title: 'AI Intelligence',
    description: 'Powerful AI models at your fingertips',
  },
  {
    icon: Presentation,
    title: 'Presentations',
    description: 'Generate stunning presentations instantly',
  },
]
</script>
