<template>
  <div class="min-h-screen py-24">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-24">
        <h1 class="text-6xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
          🛠️ Skills
        </h1>
      </div>

      <!-- Asymmetrical Skills Layout -->
      <div class="relative">
        <!-- Background elements -->
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-40 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <!-- Left Column - Main Skills -->
          <div class="space-y-8">
            <div class="glass-skill group cursor-default">
              <div class="flex items-center mb-6">
                <div class="w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full mr-4 flex-shrink-0"></div>
                <h3 class="text-2xl font-black group-hover:text-secondary">Core Stack</h3>
              </div>
              <div class="space-y-4">
                <div class="skill-item">
                  <span class="font-mono text-secondary">Vue.js (Vue 2 & 3)</span>
                  <div class="progress-bg">
                    <div class="progress-bar" style="width: 95%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <span class="font-mono text-secondary">JavaScript ES6+</span>
                  <div class="progress-bg">
                    <div class="progress-bar" style="width: 90%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <span class="font-mono text-secondary">Tailwind CSS</span>
                  <div class="progress-bg">
                    <div class="progress-bar" style="width: 90%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="glass-skill-sm rotate-1">
              <h4 class="font-bold text-lg mb-3 text-accent">Tools</h4>
              <div class="flex flex-wrap gap-2">
                <span class="tech-tag">Git</span>
                <span class="tech-tag">VS Code</span>
                <span class="tech-tag">Figma</span>
              </div>
            </div>
          </div>

          <!-- Right Column - Visual Timeline -->
          <div class="space-y-6">
            <div class="glass-skill relative overflow-hidden">
              <div class="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent opacity-30"></div>
              <div class="space-y-8 pl-16">
                <div class="skill-timeline-item">
                  <div class="w-6 h-6 bg-accent rounded-full flex items-center justify-center font-bold text-white text-xs mb-2 -ml-8">95%</div>
                  <div>
                    <h4 class="font-bold text-xl mb-1">Responsive Design</h4>
                    <p class="opacity-80 text-sm">Mobile-first, pixel-perfect layouts</p>
                  </div>
                </div>
                <div class="skill-timeline-item">
                  <div class="w-6 h-6 bg-secondary rounded-full flex items-center justify-center font-bold text-primary text-xs mb-2 -ml-8">90%</div>
                  <div>
                    <h4 class="font-bold text-xl mb-1">API Integration</h4>
                    <p class="opacity-80 text-sm">REST, real-time data handling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skills } from '../data'
</script>

<style scoped>
.glass-skill {
  @apply glass p-8 rounded-2xl border-white/10 shadow-2xl hover:shadow-accent/20 transition-all duration-500;
  background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
}

.glass-skill-sm {
  @apply glass p-6 rounded-xl border-accent/20 shadow-lg;
}

.skill-item {
  @apply flex justify-between items-center mb-2;
}

.progress-bg {
  @apply w-full h-2 bg-white/10 rounded-full overflow-hidden;
}

.progress-bar {
  @apply h-full bg-gradient-to-r from-secondary to-accent rounded-full shadow-inner transition-all duration-1000 ease-out;
}

.tech-tag {
  @apply px-3 py-1 text-sm rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-accent/20 transition-all;
}

.skill-timeline-item {
  @apply relative pb-6;
}

.skill-timeline-item::before {
  content: '';
  @apply absolute left-4 top-12 w-px h-full bg-white/10;
}

.rotate-1 {
  transform: rotate(1deg);
}
</style>

