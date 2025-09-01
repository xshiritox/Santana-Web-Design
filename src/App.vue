<template>
  <div class="app-container">
    <div class="book-wrapper">
      <div class="book">
        <!-- Lado izquierdo - Fijo -->
        <LeftSide @navigate="currentPage = $event" :currentPage="currentPage" />
        
        <!-- Lado derecho - Dinámico -->
        <RightSide :currentPage="currentPage" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LeftSide from './components/LeftSide.vue'
import RightSide from './components/RightSide.vue'

const currentPage = ref('home')
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  overflow-x: hidden;
}

.app-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.book-wrapper {
  perspective: 1000px;
  perspective-origin: center center;
}

.book {
  display: flex;
  width: 1200px;
  height: 700px;
  max-width: 95vw;
  max-height: 85vh;
  background: #fff;
  border-radius: 16px;
  box-shadow: 
    0 0 40px rgba(0, 0, 0, 0.1),
    0 0 80px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  animation: bookOpen 1s ease-out;
}

@keyframes bookOpen {
  from {
    transform: rotateY(-15deg) scale(0.9);
    opacity: 0;
  }
  to {
    transform: rotateY(0deg) scale(1);
    opacity: 1;
  }
}

/* Divisor central del libro */
.book::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, 
    rgba(0, 0, 0, 0.1) 0%, 
    rgba(0, 0, 0, 0.05) 50%, 
    rgba(0, 0, 0, 0.1) 100%);
  z-index: 10;
}

/* Responsivo */
@media (max-width: 1024px) {
  .book {
    width: 100%;
    height: 600px;
    flex-direction: column;
  }
  
  .book::before {
    left: 0;
    right: 0;
    top: 50%;
    bottom: auto;
    width: 100%;
    height: 2px;
  }
}

@media (max-width: 768px) {
  .app-container {
    padding: 1rem;
  }
  
  .book {
    height: 100vh;
    max-height: none;
    border-radius: 0;
  }
}
</style>