<template>
  <div class="left-side">
    <div class="brand-section">
      <h1 class="brand-title">Santana<br>Web Design</h1>
      <p class="brand-tagline">Creamos sitios web modernos que venden</p>
    </div>
    
    <nav class="navigation">
      <button 
        @click="navigate('home')"
        :class="['nav-button', { active: currentPage === 'home' }]"
      >
        Home
      </button>
      <button 
        @click="navigate('info')"
        :class="['nav-button', { active: currentPage === 'info' }]"
      >
        Información
      </button>
      <button 
        @click="navigate('portfolio')"
        :class="['nav-button', { active: currentPage === 'portfolio' }]"
      >
        Portafolio
      </button>
      <button 
        @click="navigate('services')"
        :class="['nav-button', { active: currentPage === 'services' }]"
      >
        Servicios
      </button>
      <button 
        @click="navigate('contact')"
        :class="['nav-button', { active: currentPage === 'contact' }]"
      >
        Contacto
      </button>
    </nav>
    
    <div class="social-links">
      <h3 class="social-title">Síguenos</h3>
      <div class="social-icons">
        <a href="https://wa.me/5354537990" target="_blank" class="social-link whatsapp">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/marco.offc/" target="_blank" class="social-link instagram">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/marcosantonio.perezinfante" target="_blank" class="social-link facebook">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentPage: string
}

defineProps<Props>()

const emit = defineEmits<{
  navigate: [page: string]
}>()

const navigate = (page: string) => {
  emit('navigate', page)
}
</script>

<style scoped>
.left-side {
  flex: 1;
  background: linear-gradient(135deg, #000 0%, #333 100%);
  color: white;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.left-side::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
  z-index: 0;
}

.brand-section,
.navigation,
.social-links {
  position: relative;
  z-index: 1;
}

.brand-title {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00BFFF, #87CEEB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 191, 255, 0.3);
}

.brand-tagline {
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.5;
  color: #e0e0e0;
}

.navigation {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-button {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  position: relative;
  overflow: hidden;
}

.nav-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-button:hover::before {
  left: 100%;
}

.nav-button:hover {
  border-color: #00BFFF;
  background: rgba(0, 191, 255, 0.1);
  transform: translateX(8px);
}

.nav-button.active {
  background: #00BFFF;
  border-color: #00BFFF;
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(0, 191, 255, 0.3);
}

.social-links {
  text-align: center;
}

.social-title {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
  font-weight: 400;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link svg {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.social-link:hover svg {
  transform: scale(1.1);
}

.whatsapp {
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
}

.instagram {
  background: linear-gradient(135deg, #E4405F, #833AB4);
  color: white;
}

.facebook {
  background: linear-gradient(135deg, #3b5998, #2d4373);
  color: white;
}

.social-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* Responsivo */
@media (max-width: 1024px) {
  .left-side {
    flex: none;
    height: 50%;
    padding: 2rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  .brand-section {
    flex: 1;
  }
  
  .brand-title {
    font-size: 2rem;
  }
  
  .navigation {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    flex: 2;
    justify-content: center;
  }
  
  .nav-button {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  
  .social-links {
    flex: 1;
  }
  
  .social-icons {
    gap: 0.5rem;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
  }
  
  .social-link svg {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 768px) {
  .left-side {
    padding: 1.5rem;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .brand-title {
    font-size: 1.8rem;
    text-align: center;
  }
  
  .brand-tagline {
    text-align: center;
    font-size: 1rem;
  }
  
  .navigation {
    justify-content: center;
  }
  
  .nav-button {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }
}
</style>