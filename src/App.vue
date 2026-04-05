<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-primary via-black to-primary text-white font-mono dark:from-slate-900 dark:to-slate-900">
    <Navbar />
    <main class="container mx-auto px-6 py-24">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
