<script setup lang="ts">
import { onMounted } from 'vue'
import { useProjects } from '../stores/projects'

const { projects, isLoading, error, fetchProjects } = useProjects()

onMounted(() => {
  fetchProjects()
})
</script>

<template>
  <section id="portfolio" class="section section-dark">
    <div class="container">
      <div class="section-header fade-in">
        <h2>Proyectos recientes</h2>
        <p>Un showcase de proyectos web exitosos que han ayudado a las empresas a crecer y involucrar a sus audiencias de manera efectiva.</p>
      </div>

      <div v-if="isLoading" class="loading-state">
        <p>Cargando proyectos...</p>
      </div>

      <div v-else-if="error" class="error-state">
        <p>Error al cargar proyectos: {{ error }}</p>
        <button @click="fetchProjects" class="btn btn-primary">Reintentar</button>
      </div>

      <div v-else-if="projects.length > 0" class="portfolio-grid">
        <div v-for="project in projects" :key="project.id" class="project-card fade-in">
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay">
              <div class="project-actions">
                <button class="btn btn-primary btn-small">Ver Proyecto</button>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in (project.technologies || [])" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="empty-portfolio">
        <h3>Próximamente</h3>
        <p>Estamos trabajando en nuevos proyectos increíbles. ¡Vuelve pronto!</p>
      </div>

      <div class="portfolio-cta fade-in">
        <h3>¿Listo para comenzar su proyecto?</h3>
        <p>Discutamos cómo podemos traer su visión a vida con una solución web personalizada.</p>
        <a href="#contact" class="btn btn-accent">Iniciar un proyecto</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.project-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
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
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(37, 99, 235, 0.9);
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  margin-bottom: 0.75rem;
  color: var(--text-dark);
}

.project-content p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: var(--bg-light);
  color: var(--primary-blue);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--border-gray);
}

.loading-state, .error-state {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 4rem;
}

.loading-state p, .error-state p {
  margin: 0 0 1rem 0;
  color: var(--text-gray);
  font-size: 1.125rem;
}

.error-state p {
  color: #dc2626;
}

.empty-portfolio {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 4rem;
}

.empty-portfolio h3 {
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.empty-portfolio p {
  color: var(--text-gray);
  font-size: 1.125rem;
}

.portfolio-cta {
  text-align: center;
  background: white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.portfolio-cta h3 {
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.portfolio-cta p {
  margin-bottom: 2rem;
  font-size: 1.125rem;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    max-width: 400px;
    margin: 0 auto;
  }

  .portfolio-cta {
    padding: 2rem 1.5rem;
  }
}
</style>