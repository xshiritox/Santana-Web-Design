<template>
  <div class="right-side">
    <div class="page-container">
      <Transition name="page" mode="out-in">
        <component :is="currentComponent" :key="currentPage" />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HomePage from './pages/HomePage.vue'
import InfoPage from './pages/InfoPage.vue'
import PortfolioPage from './pages/PortfolioPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import ContactPage from './pages/ContactPage.vue'

interface Props {
  currentPage: string
}

const props = defineProps<Props>()

const currentComponent = computed(() => {
  switch (props.currentPage) {
    case 'info':
      return InfoPage
    case 'portfolio':
      return PortfolioPage
    case 'services':
      return ServicesPage
    case 'contact':
      return ContactPage
    default:
      return HomePage
  }
})
</script>

<style scoped>
.right-side {
  flex: 1;
  background: #fff;
  position: relative;
  overflow: hidden;
}

.page-container {
  height: 100%;
  position: relative;
}

/* Transición tipo cambio de página */
.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-enter-from {
  transform: translateX(100%) rotateY(15deg);
  opacity: 0;
  transform-origin: left center;
}

.page-leave-to {
  transform: translateX(-100%) rotateY(-15deg);
  opacity: 0;
  transform-origin: right center;
}

.page-enter-to,
.page-leave-from {
  transform: translateX(0) rotateY(0deg);
  opacity: 1;
  transform-origin: center center;
}

/* Responsivo */
@media (max-width: 1024px) {
  .page-enter-from {
    transform: translateY(100%) rotateX(15deg);
    transform-origin: center top;
  }
  
  .page-leave-to {
    transform: translateY(-100%) rotateX(-15deg);
    transform-origin: center bottom;
  }
  
  .page-enter-to,
  .page-leave-from {
    transform: translateY(0) rotateX(0deg);
  }
}
</style>