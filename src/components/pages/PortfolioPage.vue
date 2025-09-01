<template>
  <div class="portfolio-page">
    <div class="content">
      <header class="page-header">
        <h1 class="page-title">Nuestro Portafolio</h1>
        <div class="title-underline"></div>
        <p class="page-subtitle">
          Descubre algunos de nuestros proyectos más destacados
        </p>
      </header>
      
      <div class="portfolio-grid">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="project-card"
          @click="selectProject(project)"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay">
              <div class="overlay-content">
                <h3 class="overlay-title">{{ project.title }}</h3>
                <p class="overlay-description">{{ project.shortDescription }}</p>
                <span class="view-project">Ver Proyecto →</span>
              </div>
            </div>
          </div>
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="project-tag"
              >
                {{ tag }}
              </span>
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

interface Project {
  id: number
  title: string
  description: string
  shortDescription: string
  image: string
  tags: string[]
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: "E-commerce Boutique",
    description: "Tienda online elegante con sistema de pagos integrado y gestión de inventario.",
    shortDescription: "Tienda online moderna",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    tags: ["E-commerce", "Vue.js", "Responsive"]
  },
  {
    id: 2,
    title: "App Restaurante",
    description: "Aplicación web para restaurante con reservas online y menú digital interactivo.",
    shortDescription: "Sistema de reservas",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
    tags: ["Restaurante", "Reservas", "PWA"]
  },
  {
    id: 3,
    title: "Portal Corporativo",
    description: "Sitio web empresarial con dashboard administrativo y sistema de contenidos.",
    shortDescription: "Web corporativa",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    tags: ["Corporativo", "CMS", "Dashboard"]
  },
  {
    id: 4,
    title: "Portafolio Creativo",
    description: "Sitio web de artista con galería interactiva y efectos visuales avanzados.",
    shortDescription: "Portafolio artístico",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
    tags: ["Arte", "Galería", "Animaciones"]
  },
  {
    id: 5,
    title: "Landing Page SaaS",
    description: "Página de aterrizaje para startup tecnológica con conversiones optimizadas.",
    shortDescription: "Landing optimizada",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    tags: ["SaaS", "Landing", "Conversión"]
  },
  {
    id: 6,
    title: "Plataforma Educativa",
    description: "Sistema de aprendizaje online con cursos, evaluaciones y seguimiento.",
    shortDescription: "E-learning avanzado",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
    tags: ["Educación", "LMS", "Interactivo"]
  }
])

const selectProject = (project: Project) => {
  console.log('Proyecto seleccionado:', project.title)
  // Aquí se podría abrir un modal o navegar a una página de detalle
}
</script>

<style scoped>
.portfolio-page {
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

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.project-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(0, 191, 255, 0.1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 191, 255, 0.9), rgba(135, 206, 235, 0.9));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-content {
  padding: 1rem;
}

.overlay-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.overlay-description {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.view-project {
  font-weight: 600;
  font-size: 1rem;
}

.project-info {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.75rem;
}

.project-description {
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  background: rgba(0, 191, 255, 0.1);
  color: #00BFFF;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
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
  
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-image {
    height: 180px;
  }
}
</style>