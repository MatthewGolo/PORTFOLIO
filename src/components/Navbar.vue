<template>
  <nav class="glass fixed top-0 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl mx-auto mt-6 z-50 rounded-2xl shadow-2xl">
    <div class="flex justify-between items-center p-6">
      <router-link to="/" class="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent hover:animate-pulse">
        Charles Dev
      </router-link>
      <ul class="flex space-x-8">
        <li v-for="route in routes" :key="route.name">
          <router-link 
            :to="route.path" 
            class="hover:text-secondary transition-all duration-300 relative group"
            active-class="text-secondary font-bold"
          >
            {{ route.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </li>
      </ul>
      <button 
        @click="toggleDark"
        class="p-2 rounded-xl glass-light hover:bg-white/10 transition-all"
        :class="{ 'rotate-180': isDark }"
        title="Toggle Dark Mode"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
]

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}

onMounted(() => {
  isDark.value = localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  if (isDark.value) document.documentElement.classList.add('dark')
})
</script>
