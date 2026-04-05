<template>
  <!-- Minimalist Modern Hero -->
  <main class="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
    <!-- Subtle gradient background with micro textures -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary to-slate-900"></div>
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/15 rounded-full mix-blend-multiply animate-blob animation-delay-4000"></div>
    </div>

    <!-- Centered content container -->
    <div class="relative z-10 text-center max-w-4xl mx-auto px-6">
      
      <!-- Typing headline with cursor -->
      <h1 class="font-mono text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-none tracking-tight">
        Frontend Developer<span class="typing-cursor ml-2">|</span>
      </h1>
      
      <!-- Subtitle with gradient highlight -->
      <p class="text-xl md:text-2xl lg:text-3xl font-light text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
        specializing in
      </p>
      <p class="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent mb-12 max-w-xl mx-auto">
        Vue.js & Modern Web Apps
      </p>

      <!-- Description -->
      <p class="text-lg md:text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed opacity-90">
        Building scalable, performant web applications with Vue 3, Tailwind CSS & TypeScript. 
        Currently crafting production systems at DigiPlus (GameZone).
      </p>

      <!-- Minimal CTAs -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
        <a href="/projects" class="group relative inline-flex items-center px-10 py-4 font-mono text-lg font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10">
          <span>View Projects</span>
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
        <a href="/contact" class="px-10 py-4 font-mono text-lg font-bold text-slate-300 hover:text-white border border-white/20 hover:border-white/40 rounded-2xl transition-all duration-300 hover:shadow-xl backdrop-blur-sm">
          Contact Me
        </a>
      </div>

      <!-- Subtle scroll indicator -->
      <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-slate-500/50 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-gradient-to-b from-slate-400 to-transparent rounded mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>

    <!-- Current role badge - floating -->
    <div class="fixed top-8 right-8 z-40">
      <div class="glass-badge px-6 py-3 rounded-full text-sm font-mono backdrop-blur-md border border-white/20 text-slate-300 hover:text-white transition-colors">
        <span class="inline-block w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
        DigiPlus Interactive · GameZone
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Minimal interactions via CSS animations
</script>

<style scoped>
.typing-cursor {
  @apply inline-block w-4 bg-gradient-to-r from-white to-transparent;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes blob {
  0% { 
    transform: translate(0px, 0px) scale(1);
  }
  33% { 
    transform: translate(30px, -50px) scale(1.1);
  }
  66% { 
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% { 
    transform: translate(0px, 0px) scale(1);
  }
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-blob {
  animation: blob 7s infinite;
}

.glass-badge {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
</style>

