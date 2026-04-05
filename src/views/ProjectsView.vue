<template>
  <section class="py-32">
    <div class="text-center mb-20">
      <h2 class="text-5xl font-black mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
        Projects
      </h2>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="glass rounded-2xl overflow-hidden group hover:scale-105 transition-all tilt-hover shadow-2xl"
      >
        <div class="h-48 bg-gradient-to-br from-primary to-black group-hover:brightness-125 transition relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3 group-hover:text-secondary transition">{{ project.title }}</h3>
          <p class="opacity-80 mb-6">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="tech in project.tech" :key="tech" class="px-3 py-1 glass-light text-sm rounded-full">
              {{ tech }}
            </span>
          </div>
          <div class="flex gap-4">
            <a v-if="project.link" :href="project.link" target="_blank" class="flex-1 glass-light px-6 py-3 text-center rounded-xl hover:bg-white/20 transition font-bold">
              Live Demo
            </a>
            <a v-if="project.github" :href="project.github" target="_blank" class="glass-light px-6 py-3 text-center rounded-xl hover:bg-white/20 transition">
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '../data'
</script>
