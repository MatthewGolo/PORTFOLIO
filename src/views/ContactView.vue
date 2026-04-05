<template>
  <!-- Redesigned Contact - Floating Cards -->
  <main class="min-h-screen py-24 px-6 flex items-center justify-center relative">
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950 to-primary/50"></div>
    
    <div class="relative z-10 w-full max-w-md space-y-8">
      
      <!-- Main Contact Card -->
      <div class="glass-main p-10 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/10 hover:shadow-accent/20 transition-all duration-500 hover:scale-[1.02]">
        <div class="text-center mb-10">
          <h1 class="font-mono text-4xl font-black text-white mb-4 tracking-tight">
            Say Hello
          </h1>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto rounded-full"></div>
        </div>

        <!-- Email - Primary -->
        <div class="contact-item space-y-3 mb-8">
          <div class="flex items-center gap-3 text-slate-400 font-mono text-sm uppercase tracking-wider">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.27 4.84A2 2 0 0012 11a2 2 0 012-2 2 2 0 001.73.84L21 8m-6 4.84A2 2 0 0012 13a2 2 0 00-2 2 2 2 0 00-1.73-.84L3 16m18 0v4a1 1 0 01-1 1H1a1 1 0 01-1-1v-4"></path>
            </svg>
            Email
          </div>
          <a href="mailto:matthewgolo06@gmail.com" class="block font-mono text-xl font-bold text-white hover:text-secondary transition-all hover:translate-x-2 group">
            matthewgolo06@gmail.com
          </a>
        </div>

        <!-- Phone -->
        <div class="contact-item space-y-3 mb-8">
          <div class="flex items-center gap-3 text-slate-400 font-mono text-sm uppercase tracking-wider">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 01 1.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Phone
          </div>
          <a href="tel:+639766229247" class="block font-mono text-xl font-bold text-white hover:text-accent transition-all hover:translate-x-2">
            +63 976 622 9247
          </a>
        </div>

        <!-- Social -->
        <div class="pt-8 border-t border-white/10">
          <div class="flex items-center justify-center gap-6 pt-8">
            <a href="https://www.linkedin.com/in/charles-matthew-golo-7721912b3" target="_blank" class="p-4 rounded-2xl hover:bg-white/10 transition-all backdrop-blur border border-white/20 hover:border-white/40 hover:scale-110">
              <svg class="w-6 h-6 text-slate-300 hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.002z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Location Badge -->
      <div class="text-center">
        <div class="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-2xl backdrop-blur border border-white/10 text-slate-400 font-mono text-sm tracking-wider">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
          </svg>
          Las Piñas City, Philippines
        </div>
      </div>

      <!-- Final CTA -->
      <div class="text-center pt-12">
        <p class="text-slate-500 text-sm mb-8 font-mono uppercase tracking-wider">
          Available for new projects
        </p>
        <a href="mailto:matthewgolo06@gmail.com" class="inline-block px-12 py-4 font-mono font-bold text-lg text-white border-2 border-white/30 hover:border-white backdrop-blur-xl rounded-2xl hover:bg-white/10 transition-all duration-300 hover:shadow-2xl">
          Start Conversation →
        </a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// CSS only interactions
</script>

<style scoped>
.glass-main {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.contact-item {
  border-left: 3px solid transparent;
}

.contact-item:hover {
  border-left-color: theme('colors.secondary');
  padding-left: 1rem;
  margin-left: -1rem;
  transition: all 0.3s ease;
}
</style>

