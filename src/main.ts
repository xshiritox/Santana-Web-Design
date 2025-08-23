import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Ensure the DOM is fully loaded before mounting
async function initApp() {
  try {
    const app = createApp(App)
    app.mount('#app')
  } catch (error) {
    console.error('Failed to mount app:', error)
  }
}

document.addEventListener('DOMContentLoaded', initApp)
