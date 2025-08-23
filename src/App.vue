<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import AdminPanel from './components/AdminPanel.vue'
import AdminLogin from './components/AdminLogin.vue'
import { useAuth } from './stores/auth'

const { isAuthenticated, initAuth } = useAuth()
const showAdmin = ref(false)
const showAdminLogin = ref(false)

const handleShowAdminLogin = () => {
  if (isAuthenticated.value) {
    showAdmin.value = true
  } else {
    showAdminLogin.value = true
  }
}

const handleLoginSuccess = () => {
  showAdminLogin.value = false
  showAdmin.value = true
}

onMounted(() => {
  initAuth()
  
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  const fadeElements = document.querySelectorAll('.fade-in')
  fadeElements.forEach(el => observer.observe(el))

  // Smooth scrolling for navigation links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      e.preventDefault()
      const id = target.getAttribute('href')?.substring(1)
      const element = document.getElementById(id!)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
})
</script>

<template>
  <div v-if="showAdminLogin">
    <AdminLogin @loginSuccess="handleLoginSuccess" />
  </div>
  <div v-if="showAdmin && isAuthenticated">
    <AdminPanel />
  </div>
  <div v-else>
    <Header @showAdmin="handleShowAdminLogin" />
    <Hero />
    <Services />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped>
  /* Removed styles for .back-to-site */
</style>