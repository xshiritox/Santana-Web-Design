<template>
  <div class="info-page">
    <div class="content">
      <header class="page-header">
        <h1 class="page-title">Información</h1>
        <div class="title-underline"></div>
      </header>
      
      <div class="info-content">
        <div class="info-section">
          <div class="info-text">
            <h2 class="section-title">Quiénes Somos</h2>
            <p class="section-description">
              Santana Web Design es un estudio especializado en crear experiencias 
              digitales que conectan marcas con sus audiencias. Hemos 
              ayudado a empresas de todos los tamaños a establecer su presencia 
              digital con sitios web que combinan diseño excepcional y funcionalidad 
              impecable.
            </p>
          </div>
          <div class="info-image">
            <img src="../../assets/image/somos.webp" alt="Diseño web moderno" />
          </div>
        </div>
        
        <div class="info-section reverse">
          <div class="info-image">
            <img src="../../assets/image/mision.webp" alt="Web funcional" />
          </div>
          <div class="info-text">
            <h2 class="section-title">Nuestra Misión</h2>
            <p class="section-description">
              Creemos que cada negocio merece una presencia digital que refleje 
              su esencia y potencie su crecimiento. Nuestro enfoque combina 
              creatividad, tecnología de vanguardia y estrategia comercial para 
              entregar resultados que superan expectativas.
            </p>
          </div>
        </div>
        
        <div class="values-section">
          <h2 class="section-title centered">Nuestros Valores</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette">
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
              </svg>
            </div>
              <h3 class="value-title">Creatividad</h3>
              <p class="value-description">Diseños únicos que destacan en el mercado</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
              <h3 class="value-title">Velocidad</h3>
              <p class="value-description">Sitios optimizados para carga rápida</p>
            </div>
            <div class="value-card">
              <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
              <h3 class="value-title">Seguridad</h3>
              <p class="value-description">Protección y confiabilidad garantizada</p>
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

<style scoped>
.info-page {
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
  margin: 0 auto;
  border-radius: 2px;
}

.info-content {
  max-width: 800px;
  margin: 0 auto;
}

.info-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
}

.info-section.reverse {
  flex-direction: row-reverse;
}

.info-text {
  flex: 1;
}

.info-image {
  flex: 1;
  max-width: 300px;
}

.info-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.info-image img:hover {
  transform: scale(1.05);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #00BFFF;
  margin-bottom: 1rem;
}

.section-title.centered {
  text-align: center;
  margin-bottom: 2rem;
}

.section-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
}

.values-section {
  margin-top: 3rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.value-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 191, 255, 0.1);
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.value-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #00BFFF;
  background: rgba(0, 191, 255, 0.1);
  border-radius: 16px;
  padding: 12px;
  transition: all 0.3s ease;
}

.value-icon svg {
  width: 32px;
  height: 32px;
}

.value-card:hover .value-icon {
  background: rgba(0, 191, 255, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 191, 255, 0.1);
}

.value-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.value-description {
  color: #718096;
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
  
  .info-section,
  .info-section.reverse {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .info-image {
    max-width: 100%;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .value-card {
    padding: 1.5rem;
  }
}
</style>