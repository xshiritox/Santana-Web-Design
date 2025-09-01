<template>
  <div class="home-page">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          Bienvenido a 
          <span class="highlight">Santana Web Design</span>
        </h1>
        <p class="hero-description">
          Transformamos ideas en experiencias digitales excepcionales. 
          Creamos sitios web que no solo se ven increíbles, sino que 
          también generan resultados reales para tu negocio.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">50+</div>
            <div class="stat-label">Proyectos Completados</div>
          </div>
          <div class="stat">
            <div class="stat-number">100%</div>
            <div class="stat-label">Clientes Satisfechos</div>
          </div>
          <div class="stat">
            <div class="stat-number">5★</div>
            <div class="stat-label">Calificación</div>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="floating-elements">
          <div class="floating-card card-1">
            <div class="card-header">Diseño</div>
            <div class="card-content">Moderno</div>
          </div>
          <div class="floating-card card-2">
            <div class="card-header">Desarrollo</div>
            <div class="card-content">Rápido</div>
          </div>
          <div class="floating-card card-3">
            <div class="card-header">SEO</div>
            <div class="card-content">Optimizado</div>
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
.home-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
}

.hero-section {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 3rem;
  gap: 3rem;
}

.hero-content {
  flex: 1;
  max-width: 500px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #1a202c;
}

.highlight {
  color: #00BFFF;
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #00BFFF, #87CEEB);
  border-radius: 2px;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 600;
  color: #00BFFF;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #718096;
  font-weight: 400;
}

.hero-visual {
  flex: 1;
  position: relative;
  height: 400px;
}

.floating-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-card {
  position: absolute;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 1px solid rgba(0, 191, 255, 0.1);
}

.floating-card:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-1 {
  top: 25%;
  left: 10%;
  animation: float 6s ease-in-out infinite;
}

.card-2 {
  top: 50%;
  right: 20%;
  animation: float 6s ease-in-out infinite 2s;
}

.card-3 {
  bottom: 0.1%;
  left: 5%;
  animation: float 6s ease-in-out infinite 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
}

.card-header {
  font-size: 0.9rem;
  color: #00BFFF;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-content {
  font-size: 1.1rem;
  color: #2d3748;
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
@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
    text-align: center;
  }
  
  .hero-description {
    text-align: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1.5rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hero-visual {
    height: 200px;
  }
  
  .floating-card {
    position: static;
    margin-bottom: 1rem;
    transform: none !important;
    animation: none !important;
  }
  
  .floating-elements {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: auto;
  }
}
</style>