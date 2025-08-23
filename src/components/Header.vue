<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useAuth } from '../stores/auth'

const { initAuth, isAuthenticated } = useAuth()

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const emit = defineEmits<{
  showAdmin: []
}>()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleLogoClick = () => {
  emit('showAdmin')
}

onMounted(() => {
  initAuth()
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <div class="logo" @click="handleLogoClick">
          <h2>Santana Web Design</h2>
          <span v-if="isAuthenticated" class="admin-badge">Admin</span>
        </div>

        <!-- Desktop Navigation -->
        <ul class="nav-links desktop-nav">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#portfolio">Portafolio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

        <a href="#contact" class="btn btn-accent cta-btn desktop-nav">Solicitar Cotización</a>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="toggleMenu">
          <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </button>
      </nav>

      <!-- Mobile Navigation -->
      <div class="mobile-nav-overlay" :class="{ 'open': isMenuOpen }" @click="toggleMenu">
        <div class="mobile-nav" :class="{ 'open': isMenuOpen }" @click.stop>
          <div class="mobile-nav-header">
            <button class="close-menu-btn" @click="toggleMenu">
              <XMarkIcon class="h-6 w-6" />
            </button>
          </div>
          <nav class="mobile-nav-content">
            <div class="mobile-nav-scroll">
              <ul class="mobile-nav-links">
                <li><a href="#home" @click="toggleMenu">Inicio</a></li>
                <li><a href="#services" @click="toggleMenu">Servicios</a></li>
                <li><a href="#portfolio" @click="toggleMenu">Portafolio</a></li>
                <li><a href="#about" @click="toggleMenu">Sobre mí</a></li>
                <li><a href="#contact" @click="toggleMenu">Contacto</a></li>
                <li><a href="#contact" @click="toggleMenu">Solicitar</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-gray);
  z-index: 1000;
  transition: all 0.3s ease;
}

.header.scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo h2 {
  color: var(--primary-blue);
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.logo:hover h2 {
  color: var(--accent-orange);
}

.admin-badge {
  background: var(--accent-orange);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-gray);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:hover {
  color: var(--primary-blue);
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--primary-blue);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.cta-btn {
  font-size: 0.9rem;
  padding: 0.6rem 1.5rem;
}

.mobile-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--text-gray);
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1002;
  transition: all 0.2s ease;
  position: relative;
  width: 40px;
  height: 40px;
}

.mobile-menu-btn:active {
  transform: scale(0.95);
}

.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-nav-overlay.open {
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 85%;
  max-width: 320px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.mobile-nav.open {
  transform: translateX(-100%);
}

.mobile-nav-header {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}

.close-menu-btn {
  background: none;
  border: none;
  color: var(--text-gray);
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;
}

.close-menu-btn:active {
  transform: scale(0.9);
}

.mobile-nav-content {
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mobile-nav-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 0 1.5rem;
}

.mobile-nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  padding-bottom: 1.5rem;
}

.mobile-nav-links li {
  border-bottom: 1px solid var(--border-gray);
}

.mobile-nav-links a {
  display: block;
  padding: 1rem 0;
  color: var(--text-gray);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.mobile-nav-links a:active {
  color: var(--primary-blue);
}

.mobile-cta-container {
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  background: white;
  position: sticky;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.mobile-cta-btn {
  display: block;
  width: 100%;
  background: linear-gradient(135deg, var(--accent-orange), #e05a1a);
  color: white;
  text-align: center;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(224, 90, 26, 0.2), 
              0 2px 4px -1px rgba(224, 90, 26, 0.1);
}

.mobile-cta-btn:active {
  transform: translateY(1px);
  background: linear-gradient(135deg, #d9461a, #c43d12);
  box-shadow: 0 2px 3px -1px rgba(224, 90, 26, 0.15);
}

@media (min-width: 769px) {
  .mobile-menu-btn {
    display: none;
  }
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .logo h2 {
    font-size: 1.5rem;
  }

  .admin-badge {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
  
  /* Prevent body scroll when mobile menu is open */
  body.menu-open {
    overflow: hidden;
    position: fixed;
    width: 100%;
  }
}
</style>