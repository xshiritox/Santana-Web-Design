<script setup lang="ts">
</script>

<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content fade-in">
        <h1 class="hero-title">Diseño web moderno para <span class="accent-text">Impulsar tu negocio</span></h1>
        <p class="hero-subtitle">Transforma tu presencia en línea con sitios web profesionales y adaptables que convierten visitantes en clientes. Hagamos realidad tu visión digital.</p>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary">Comenzar</a>
          <a href="#portfolio" class="btn btn-outline">Ver mi trabajo</a>
        </div>
      </div>
      <div class="hero-visual fade-in">
        <div class="hero-image">
          <img src="/src/assets/images/home.webp" alt="Modern web design workspace" />
        </div>
        <div class="floating-cards">
          <div class="card card-1">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
              </svg>
            </div>
            <span>Diseño creativo</span>
          </div>
          <div class="card card-2">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/>
              </svg>
            </div>
            <span>Móvil primero</span>
          </div>
          <div class="card card-3">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
              </svg>
            </div>
            <span>Carga rápida</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 8rem 0 5rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%232563EB" fill-opacity="0.05"><circle cx="30" cy="30" r="2"/></g></g></svg>');
  opacity: 0.5;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 500px;
}

.hero-title {
  margin-bottom: 1.5rem;
  color: var(--text-dark);
}

.accent-text {
  color: var(--accent-orange);
}

.hero-subtitle {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: var(--text-gray);
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 400px;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transform: rotate(-2deg);
  transition: transform 0.3s ease;
}

.hero-image:hover {
  transform: rotate(0deg) scale(1.02);
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floating-cards {
  position: absolute;
  width: 100%;
  height: 100%;
}

.card {
  position: absolute;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  color: var(--text-dark);
  border: 1px solid var(--border-gray);
  animation: float 3s ease-in-out infinite;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--accent-orange);
}

.card-1 {
  top: -10px;
  left: -20px;
  animation-delay: 0s;
}

.card-2 {
  top: 50%;
  right: -30px;
  animation-delay: 1s;
}

.card-3 {
  bottom: -10px;
  left: 20px;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 3rem;
  }

  .container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-content {
    max-width: none;
    order: 2;
  }

  .hero-visual {
    order: 1;
  }

  .hero-image {
    width: 300px;
    height: 225px;
  }

  .hero-cta {
    justify-content: center;
  }

  .floating-cards {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 200px;
    text-align: center;
  }
}
</style>