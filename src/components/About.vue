<script setup lang="ts">
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <div class="about-content">
        <div class="about-image fade-in">
          <img src="../assets/images/icono.webp" alt="Professional web designer working" />
          <div class="experience-badge">
            <span class="badge-number">3+</span>
            <span class="badge-text">Años de experiencia</span>
          </div>
        </div>

        <div class="about-text fade-in">
          <div class="section-tag">Sobre mí</div>
          <h2>Creando Experiencias Digitales que Hacen una Diferencia</h2>
          <p class="about-intro">Hola, soy un diseñador web y desarrollador apasionado dedicado a ayudar a las empresas a prosperar en el mundo digital. Con más de 3 años de experiencia, me especializo en crear sitios web modernos y fáciles de usar que no solo se ven bien, sino que también generan resultados.</p>

          <div class="about-highlights">
            <div class="highlight">
              <h4><svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg> Enfoque Orientado a Resultados</h4>
              <p>Cada proyecto se enfoca en lograr los objetivos de su negocio y proporcionar resultados medibles.</p>
            </div>
            <div class="highlight">
              <h4><svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg> Proceso centrado en el cliente</h4>
              <p>Trabajo de cerca con usted durante todo el proceso, asegurando que su visión se convierta en realidad.</p>
            </div>
            <div class="highlight">
              <h4><svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg> Tecnologías modernas</h4>
              <p>Usando las últimas herramientas y frameworks para construir sitios web rápidos, seguros y escalables.</p>
            </div>
          </div>

          <div class="about-stats">
            <div class="stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Satisfacción del cliente</span>
            </div>
            <div class="stat">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Soporte disponible</span>
            </div>
          </div>

          <div class="about-cta">
            <a href="#contact" class="btn btn-primary">Trabajemos juntos</a>
            <a href="#portfolio" class="btn btn-outline">Ver mi trabajo</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.about-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;
}

.experience-badge {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.badge-number {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-blue);
  line-height: 1;
}

.badge-text {
  font-size: 0.875rem;
  color: var(--text-gray);
  font-weight: 500;
}

.section-tag {
  display: inline-block;
  background-color: var(--accent-orange);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.about-text h2 {
  margin-bottom: 1.5rem;
  color: var(--text-dark);
}

.about-intro {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.about-highlights {
  margin-bottom: 2rem;
}

.highlight {
  margin-bottom: 1.5rem;
}

.highlight h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.highlight-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--accent-orange);
  flex-shrink: 0;
}

.highlight p {
  margin-bottom: 0;
  line-height: 1.6;
}

.about-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--bg-light);
  border-radius: 1rem;
  border: 1px solid var(--border-gray);
}

.stat {
  text-align: center;
  flex: 1;
}

.stat-number {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-blue);
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-gray);
  font-weight: 500;
}

.about-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-image {
    order: 2;
  }

  .about-text {
    order: 1;
  }

  .about-image img {
    height: 300px;
  }

  .about-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .about-cta {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .about-cta .btn {
    width: 200px;
    text-align: center;
  }
}
</style>