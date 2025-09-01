<template>
  <div class="services-page">
    <div class="content">
      <header class="page-header">
        <h1 class="page-title">Nuestros Servicios</h1>
        <div class="title-underline"></div>
        <p class="page-subtitle">
          Soluciones completas para tu presencia digital
        </p>
      </header>
      
      <div class="services-grid">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="service-card"
        >
          <div class="service-icon" v-html="service.icon"></div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
          <div class="service-price">{{ service.price }}</div>
          <button class="service-button">Solicitar Cotización</button>
        </div>
      </div>
      
      <div class="process-section">
        <h2 class="section-title">Nuestro Proceso</h2>
        <div class="process-steps">
          <div 
            v-for="(step, index) in processSteps" 
            :key="step.id"
            class="process-step"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h4 class="step-title">{{ step.title }}</h4>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <footer class="page-footer">
      © 2025 Santana Web Design | Todos los derechos reservados
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Service {
  id: number
  title: string
  description: string
  features: string[]
  price: string
  icon: string
}

interface ProcessStep {
  id: number
  title: string
  description: string
}

const services = ref<Service[]>([
  {
    id: 1,
    title: "Diseño Web",
    description: "Diseños únicos y atractivos que reflejan la identidad de tu marca",
    features: [
      "Diseño personalizado",
      "UX/UI optimizado",
      "Prototipado interactivo",
      "Diseño responsivo"
    ],
    price: "Desde $800",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 16V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM5 4h14v12H5V4z"/>
      <path d="M7 6h10v2H7V6zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/>
    </svg>`
  },
  {
    id: 2,
    title: "Desarrollo Frontend",
    description: "Desarrollo de aplicaciones web modernas con las últimas tecnologías",
    features: [
      "Vue.js / React",
      "TypeScript",
      "Optimización SEO",
      "Performance optimizada"
    ],
    price: "Desde $1,200",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.25 2.1l-.4-.4a.75.75 0 0 0-1.06 0l-.4.4L9 5.5 5.61 2.1a.75.75 0 0 0-1.06 0l-.4.4a.75.75 0 0 0 0 1.06L7.5 7 4.1 10.39a.75.75 0 0 0 0 1.06l.4.4a.75.75 0 0 0 1.06 0L9 8.5l3.39 3.39a.75.75 0 0 0 1.06 0l.4-.4a.75.75 0 0 0 0-1.06L10.5 7l3.39-3.39a.75.75 0 0 0 0-1.06z"/>
      <path d="M3 16.5h18v1.5H3v-1.5zm0 3h18V21H3v-1.5z"/>
    </svg>`
  },
  {
    id: 3,
    title: "Branding Digital",
    description: "Identidad visual completa para fortalecer tu presencia online",
    features: [
      "Diseño de logo",
      "Paleta de colores",
      "Guía de marca",
      "Assets digitales"
    ],
    price: "Desde $600",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>`
  }
])

const processSteps = ref<ProcessStep[]>([
  {
    id: 1,
    title: "Consulta Inicial",
    description: "Analizamos tus necesidades y objetivos de negocio"
  },
  {
    id: 2,
    title: "Propuesta",
    description: "Creamos una propuesta personalizada con cronograma y presupuesto"
  },
  {
    id: 3,
    title: "Diseño",
    description: "Desarrollamos mockups y prototipos para tu aprobación"
  },
  {
    id: 4,
    title: "Desarrollo",
    description: "Construimos tu sitio web con las mejores prácticas"
  },
  {
    id: 5,
    title: "Lanzamiento",
    description: "Publicamos tu sitio y te capacitamos en su uso"
  }
])

</script>

<style scoped>
.services-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.content {
  flex: 1;
  padding: 2rem 3rem;
  overflow-y: auto;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1rem;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #00BFFF, #87CEEB);
  margin: 0 auto 1rem;
  border-radius: 2px;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #718096;
  line-height: 1.5;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.service-card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 191, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00BFFF, #87CEEB);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.service-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  color: #00BFFF;
}

.service-icon svg {
  width: 100%;
  height: 100%;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1rem;
}

.service-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  margin-bottom: 2rem;
}

.service-features li {
  padding: 0.5rem 0;
  color: #718096;
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #00BFFF;
  font-weight: 600;
}

.service-price {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00BFFF;
  margin-bottom: 1.5rem;
}

.service-button {
  background: linear-gradient(135deg, #00BFFF, #87CEEB);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.service-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 191, 255, 0.3);
}

.process-section {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1a202c;
  text-align: center;
  margin-bottom: 2rem;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.process-step {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.process-step:hover {
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00BFFF, #87CEEB);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.step-description {
  color: #4a5568;
  line-height: 1.5;
}

.page-footer {
  text-align: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.02);
  color: #718096;
  font-size: 0.9rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

/* Responsivo */
@media (max-width: 768px) {
  .content {
    padding: 1.5rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .process-step {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}
</style>