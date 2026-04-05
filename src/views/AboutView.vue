<template>
  <!-- Redesigned About - Timeline Flow Layout -->
  <div class="relative min-h-screen py-24 overflow-hidden">
    <!-- Floating background elements -->
    <div class="absolute top-40 -left-32 w-64 h-64 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-3xl blur-xl animate-float-slow"></div>
    <div class="absolute bottom-40 -right-24 w-72 h-72 bg-gradient-to-tl from-accent/15 to-primary/30 rounded-full blur-2xl rotate-12"></div>

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <!-- Floating Title -->
      <div class="text-center mb-32 -rotate-1">
        <div class="inline-block glass-title px-12 py-8 rounded-2xl shadow-2xl backdrop-blur-lg">
          <h1 class="text-6xl lg:text-7xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent leading-tight">
            About Me
          </h1>
        </div>
      </div>

      <!-- Flowing Timeline Layout -->
      <div class="grid lg:grid-cols-12 gap-12 items-start">
        <!-- Left - Profile & Timeline -->
        <div class="lg:col-span-5 space-y-12">
          <!-- Profile Card -->
          <div class="glass-profile p-10 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-700">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="w-32 h-32 bg-gradient-to-br from-secondary via-accent to-primary rounded-3xl mx-auto mb-8 shadow-2xl relative z-10 ring-4 ring-white/10"></div>
            <h2 class="text-3xl font-black text-center mb-6 text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
              Charles Matthew Golo
            </h2>
            <p class="text-center opacity-90 mb-8 font-mono text-lg tracking-wide uppercase">Frontend Developer</p>
            <div class="grid grid-cols-2 gap-4 text-sm opacity-80">
              <div class="text-center p-4">
                <div class="font-mono text-accent text-xl font-bold">Philippines</div>
                <div>Las Piñas City</div>
              </div>
              <div class="text-center p-4">
                <div class="font-mono text-secondary text-xl font-bold">Available</div>
                <div>Full-time</div>
              </div>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="glass-stats grid grid-cols-3 gap-4 p-8 rounded-2xl">
            <div class="text-center">
              <div class="text-2xl font-black text-accent mb-1">5+</div>
              <div class="text-xs opacity-75 uppercase tracking-wider">Projects</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-black text-secondary mb-1">2+</div>
              <div class="text-xs opacity-75 uppercase tracking-wider">Years Exp</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-black text-accent mb-1">10+</div>
              <div class="text-xs opacity-75 uppercase tracking-wider">Technologies</div>
            </div>
          </div>
        </div>

        <!-- Center - Experience Timeline -->
        <div class="lg:col-span-2 flex items-start justify-center lg:-mt-12 relative">
          <div class="timeline-line w-1 h-96 bg-gradient-to-b from-secondary to-accent opacity-30 absolute lg:left-1/2 transform -translate-x-1/2"></div>
          <div class="space-y-16 lg:space-y-24">
            <div class="timeline-item">
              <div class="w-20 h-20 bg-gradient-to-r from-accent to-secondary rounded-2xl flex items-center justify-center shadow-2xl ring-8 ring-primary/20 mx-auto mb-6 transform rotate-12">
                <span class="font-bold text-primary text-lg">🎮</span>
              </div>
              <h3 class="font-black text-xl text-center mb-3 text-secondary">GameZone Platform</h3>
              <p class="opacity-80 text-center text-sm mb-4">Production Vue.js apps • SEO pages • API integration</p>
              <div class="w-full bg-white/5 h-1 rounded-full mx-auto">
                <div class="bg-gradient-to-r from-secondary to-accent h-1 rounded-full w-3/4 shadow-inner"></div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl ring-8 ring-primary/20 mx-auto mb-6 -rotate-6">
                <span class="font-bold text-primary text-lg">🏆</span>
              </div>
              <h3 class="font-black text-xl text-center mb-3 text-accent">GTCC Tournament</h3>
              <p class="opacity-80 text-center text-sm mb-4">H5 landing pages • CMS integration</p>
              <div class="w-full bg-white/5 h-1 rounded-full mx-auto">
                <div class="bg-gradient-to-r from-accent to-secondary h-1 rounded-full w-2/3 shadow-inner"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right - Bio & Skills Highlights -->
        <div class="lg:col-span-5 space-y-8">
          <!-- Bio Flow -->
          <div class="glass-bio p-10 rounded-3xl relative">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/20 rounded-2xl -mr-12 -mt-12 blur-xl"></div>
            <h3 class="text-3xl font-black mb-8 text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
              My Journey
            </h3>
            <div class="space-y-4 text-lg leading-relaxed opacity-90 prose prose-invert max-w-none">
              <p>Frontend Developer based in Philippines with hands-on experience building production web apps. Specializing in Vue.js, JavaScript, and Tailwind CSS.</p>
              <p>Worked on user-facing platforms and internal systems, contributing to real-time features, SEO optimization, and reusable components. Collaborated in Agile teams.</p>
            </div>
          </div>

          <!-- Why Me Cards - Staggered -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="glass-card p-8 rounded-2xl hover:scale-105 hover:-rotate-1 transition-all duration-500 relative z-10 bg-gradient-to-b from-transparent to-white/5">
              <div class="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 shadow-xl">
                <span class="font-bold text-primary text-lg">⚡</span>
              </div>
              <h4 class="font-bold text-xl mb-3 text-secondary">Production Ready</h4>
              <p class="opacity-80">Scalable apps for real users</p>
            </div>
            <div class="glass-card p-8 rounded-2xl hover:scale-105 hover:rotate-1 transition-all duration-500 relative z-20 -mt-4 bg-gradient-to-b from-transparent to-accent/5 ml-auto">
              <div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 shadow-xl">
                <span class="font-bold text-primary text-lg">🎯</span>
              </div>
              <h4 class="font-bold text-xl mb-3 text-accent">Team Player</h4>
              <p class="opacity-80">Agile collaboration expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// About timeline
</script>

<style scoped>
.glass-title {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-profile, .glass-bio, .glass-card, .glass-stats {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.glass-profile:hover {
  box-shadow: 0 30px 60px rgba(0, 245, 255, 0.15);
}

.timeline-line {
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}
</style>

