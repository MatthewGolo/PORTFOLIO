<template>
  <!-- Minimalist Contact - Single Glass Sheet -->
  <main class="min-h-screen flex items-center justify-center p-8 py-24 relative overflow-hidden">
    <!-- Subtle background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary/30 to-slate-900"></div>
    
    <!-- Floating particles -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div class="absolute top-20 left-20 w-20 h-20 bg-secondary/30 rounded-full blur-xl animate-float"></div>
      <div class="absolute top-1/2 right-32 w-16 h-16 bg-accent/25 rounded-full blur-lg animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-40 left-1/2 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" style="animation-delay: 2s;"></div>
    </div>

    <!-- Single elegant contact sheet -->
    <div class="relative z-10 w-full max-w-lg">
      <div class="glass-sheet backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/10 max-w-md mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
            <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.27 4.84A2 2 0 0012 11a2 2 0 012-2 2 2 0 001.73.84L21 8m-6 4.84A2 2 0 0012 13a2 2 0 00-2 2 2 2 0 00-1.73-.84L3 16m18 0v4a1 1 0 01-1 1H1a1 1 0 01-1-1v-4"></path>
            </svg>
            <h1 class="font-mono text-2xl font-bold text-white tracking-tight">Get In Touch</h1>
          </div>
          <p class="text-lg text-slate-300 opacity-90 max-w-sm mx-auto leading-relaxed">
            Ready to discuss your project? Here's how to reach me:
          </p>
        </div>

        <!-- Contact Methods - Vertical Stack -->
        <div class="space-y-8">
          <!-- Email -->
          <div class="group">
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-slate-400 text-sm uppercase tracking-wider">Email</span>
              <div class="w-2 h-2 bg-secondary rounded-full scale-0 group-hover:scale-100 transition-transform origin-center"></div>
            </div>
            <a href="mailto:matthewgolo06@gmail.com" class="block font-mono text-lg font-bold text-white hover:text-secondary transition-colors group-hover:translate-x-2">
              matthewgolo06@gmail.com
            </a>
          </div>

          <!-- Phone -->
          <div class="group">
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-slate-400 text-sm uppercase tracking-wider">Phone</span>
              <div class="w-2 h-2 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform origin-center"></div>
            </div>
            <a href="tel:+639766229247" class="block font-mono text-lg font-bold text-white hover:text-accent transition-colors group-hover:translate-x-2">
              +63 976 622 9247
            </a>
          </div>

          <!-- Location -->
          <div class="group">
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-slate-400 text-sm uppercase tracking-wider">Location</span>
              <div class="w-2 h-2 bg-secondary rounded-full scale-0 group-hover:scale-100 transition-transform origin-center"></div>
            </div>
            <p class="font-mono text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
              Las Piñas City<br />
              <span class="text-sm font-normal opacity-75">Philippines</span>
            </p>
          </div>

          <!-- LinkedIn -->
          <div class="group pt-8 border-t border-white/10">
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-slate-400 text-sm uppercase tracking-wider">LinkedIn</span>
              <div class="w-2 h-2 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform origin-center"></div>
            </div>
            <a href="https://www.linkedin.com/in/charles-matthew-golo-7721912b3" target="_blank" rel="noopener" class="inline-flex items-center font-mono text-lg font-bold text-slate-200 hover:text-accent transition-all group-hover:translate-x-2">
              Charles Matthew Golo
              <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-3.334 9.319a.496.496 0 01-.948 0L5.387 5.316a1 1 0 011.633-1.265l1.852 5.175 1.444-4.04A1 1 0 0112.316 3.051z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Primary CTA -->
        <div class="text-center mt-20 pt-12 border-t border-white/10">
          <button class="mx-auto px-12 py-5 font-mono text-lg font-bold text-white bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent border border-white/20 hover:border-white/40 backdrop-blur-xl rounded-2xl px-12 py-5 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02] inline-block">
            Start Project →
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Contact interactions via CSS
</script>

<style scoped>
.glass-sheet {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px);
  }
  50% { 
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>

