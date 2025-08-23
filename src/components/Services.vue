<script setup lang="ts">
// Custom SVG icons for services
</script>

<template>
  <section id="services" class="section">
    <div class="container">
      <div class="section-header fade-in">
        <h2>Servicios que generan resultados</h2>
        <p>Soluciones web integrales diseñadas para elevar su negocio e involucrar a su audiencia de manera efectiva.</p>
      </div>

      <div class="services-grid">
        <div class="service-card fade-in">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zm-4.2-5.8c.1.1.2.1.3.1.1 0 .2 0 .3-.1l1.4-1.4c.2-.2.2-.5 0-.7l-3.2-3.2c-.2-.2-.5-.2-.7 0l-3.2 3.2c-.2.2-.2.5 0 .7l1.4 1.4c.2.2.5.2.7 0l1.3-1.3 1.3 1.3z"/>
            </svg>
          </div>
          <h3>Diseño web adaptable</h3>
          <p>Crea sitios web impactantes, optimizados para dispositivos móviles, que funcionan a la perfección en todos los dispositivos. Diseños modernos con una experiencia de usuario intuitiva y tiempos de carga rápidos.</p>
          <ul class="service-features">
            <li>Layouts optimizados para dispositivos móviles</li>
            <li>Compatibilidad con navegadores</li>
            <li>Optimización de rendimiento</li>
            <li>Interfaces de usuario intuitivas</li>
          </ul>
        </div>

        <div class="service-card fade-in">
          <div class="service-icon accent">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <h3>Optimización SEO</h3>
          <p>Mejora la visibilidad en línea con estrategias probadas de SEO. Encuentra a tu audiencia objetivo y dirige el tráfico orgánico a tu sitio web.</p>
          <ul class="service-features">
            <li>Investigación de palabras clave y optimización</li>
            <li>Mejoras técnicas de SEO</li>
            <li>Optimización de contenido</li>
            <li>Monitoreo de rendimiento</li>
          </ul>
        </div>

        <div class="service-card fade-in">
          <div class="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>
            </svg>
          </div>
          <h3>Diseño digital</h3>
          <p>Establece una fuerte presencia digital con branding cohesivo que resuena con tu audiencia y construye relaciones duraderas.</p>
          <ul class="service-features">
            <li>Diseño de identidad de marca</li>
            <li>Logo y elementos visuales</li>
            <li>Guías de marca</li>
            <li>Mensajes consistentes</li>
          </ul>
        </div>
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-gray);
  text-align: center;
  transition: all 0.3s ease;
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
  background: var(--primary-blue);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.service-icon {
  width: 4rem;
  height: 4rem;
  background-color: var(--primary-blue);
  color: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
}

.service-icon.accent {
  background-color: var(--accent-orange);
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-card h3 {
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.service-card p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  text-align: left;
}

.service-features li {
  padding: 0.5rem 0;
  color: var(--text-gray);
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-orange);
  font-weight: 600;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 2rem 1.5rem;
  }
}
</style>