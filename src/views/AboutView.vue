<template>
  <!-- Ultra Minimal About - Single Column Flow -->
  <section class="min-h-screen py-32 px-6 max-w-4xl mx-auto relative">
    <!-- Subtle backdrop -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-primary/20"></div>

    <div class="relative z-10 space-y-24">
      
      <!-- Profile Header -->
      <div class="text-center space-y-8 max-w-2xl mx-auto">
        <div class="w-32 h-32 bg-gradient-to-br from-slate-200 via-white to-slate-300 rounded-2xl mx-auto shadow-xl ring-4 ring-white/20"></div>
        <div>
          <h1 class="font-mono text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Charles Matthew Golo
          </h1>
          <p class="text-2xl text-slate-400 font-light tracking-wide">
            Frontend Developer
          </p>
        </div>
        <p class="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed opacity-90">
          Philippines-based Vue.js developer creating clean, scalable web experiences.
        </p>
      </div>

      <!-- Single Experience Flow -->
      <div class="glass-card max-w-3xl mx-auto p-12 rounded-3xl backdrop-blur-xl">
        <div class="flex items-start gap-8 lg:gap-16">
          <!-- Left - Current Role -->
          <div class="min-w-0 flex-1 space-y-6">
            <div class="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl backdrop-blur border border-white/10 w-fit">
              <div class="w-3 h-3 bg-accent rounded-full"></div>
              <span class="font-mono uppercase text-sm tracking-wider text-slate-300">Current</span>
            </div>
            <h2 class="text-3xl lg:text-4xl font-black text-white mb-6">
              Frontend Developer
            </h2>
            <div class="space-y-4 text-xl text-slate-300 leading-relaxed">
              <p>
                Building production Vue.js applications at <span class="font-bold text-accent bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">DigiPlus Interactive</span>
              </p>
              <ul class="space-y-2 ml-6">
                <li>• GameZone platform development</li>
                <li>• SEO-optimized landing pages</li>
                <li>• API integrations & real-time features</li>
                <li>• Component libraries & reusable UI</li>
              </ul>
            </div>
          </div>

          <!-- Right - Quick Stats -->
          <div class="hidden lg:block w-64 flex-shrink-0 pt-12">
            <div class="space-y-8">
              <div class="text-center p-6 bg-white/5 rounded-2xl backdrop-blur border border-white/10">
                <div class="text-4xl font-black text-secondary mb-1">5+</div>
                <div class="text-sm uppercase tracking-wider text-slate-400">Projects</div>
              </div>
              <div class="text-center p-6 bg-white/5 rounded-2xl backdrop-blur border border-white/10">
                <div class="text-4xl font-black text-accent mb-1">2+</div>
                <div class="text-sm uppercase tracking-wider text-slate-400">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Grid - Ultra Minimal -->
      <div class="max-w-2xl mx-auto">
        <h3 class="font-mono text-3xl font-black text-white mb-12 text-center tracking-tight">
          Tech Stack
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="tech-stack-item p-6 rounded-xl hover:bg-white/5 transition-all backdrop-blur border border-white/5 hover:border-white/20 hover:scale-105">
            <div class="text-2xl mb-2">⚛️</div>
            <div class="font-mono text-sm text-slate-300">Vue.js</div>
          </div>
          <div class="tech-stack-item p-6 rounded-xl hover:bg-white/5 transition-all backdrop-blur border border-white/5 hover:border-white/20 hover:scale-105">
            <div class="text-2xl mb-2">⚡</div>
            <div class="font-mono text-sm text-slate-300">JS/TS</div>
          </div>
          <div class="tech-stack-item p-6 rounded-xl hover:bg-white/5 transition-all backdrop-blur border border-white/5 hover:border-white/20 hover:scale-105">
            <div class="text-2xl mb-2">🎨</div>
            <div class="font-mono text-sm text-slate-300">Tailwind</div>
          </div>
          <div class="tech-stack-item p-6 rounded-xl hover:bg-white/5 transition-all backdrop-blur border border-white/5 hover:border-white/20 hover:scale-105">
            <div class="text-2xl mb-2">🔧</div>
            <div class="font-mono text-sm text-slate-300">Git</div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <a href="/contact" class="inline-flex items-center gap-3 px-12 py-6 font-mono text-lg font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 group">
          <span>Let's Work Together</span>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Pure CSS interactions
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
}

.tech-stack-item {
  text-align: center;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .flex-1 {
    min-width: 0;
  }
}
</style>

