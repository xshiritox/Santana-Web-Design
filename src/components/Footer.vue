<script setup lang="ts">
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  GlobeAltIcon
} from '@heroicons/vue/24/outline';
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>Santana Web Design</h3>
          <p>Creando sitios web modernos y profesionales que ayudan a las empresas a prosperar en el mundo digital.</p>
          <div class="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener" class="social-link">
              <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <a href="https://instagram.com/santanawebdesign" target="_blank" rel="noopener" class="social-link">
              <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://wa.me/5353547990" target="_blank" rel="noopener" class="social-link">
              <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.42 1.41.54.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.1-.23-.16-.48-.27z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#portfolio">Portafolio</a></li>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          <div class="link-group">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#services">Diseño web</a></li>
              <li><a href="#services">Optimización SEO</a></li>
              <li><a href="#services">Marca digital</a></li>
              <li><a href="#contact">Soluciones personalizadas</a></li>
            </ul>
          </div>

          <div class="link-group">
            <h4>Información de contacto</h4>
            <ul class="contact-info">
              <li>
                <EnvelopeIcon class="contact-icon" />
                <a href="mailto:santana.web.design@gmail.com" class="email-link">santana.web.design@gmail.com</a>
              </li>
              <li>
                <PhoneIcon class="contact-icon" />
                <a href="tel:+5353547990" class="phone-link">+53 53547990</a>
              </li>
              <li>
                <GlobeAltIcon class="contact-icon" />
                <span>Disponible mundialmente</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="footer-bottom-content">
          <p>&copy; 2025 Santana Web Design. Todos los derechos reservados.</p>
          <div class="footer-badges">
            <span class="badge">Profesional</span>
            <span class="badge">Confiable</span>
            <span class="badge">Orientado a resultados</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--text-dark);
  color: #cbd5e1;
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.footer-brand p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #94a3b8;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #cbd5e1;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.95rem;
}

.social-link:hover {
  color: var(--accent-orange);
  padding-left: 0.5rem;
}

.social-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--accent-orange);
  transition: all 0.3s ease;
}

.social-link:hover .social-icon {
  transform: scale(1.1);
  color: white;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.link-group h4 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.125rem;
}

.link-group ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.link-group a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.25rem 0;
}

.link-group a:hover {
  color: var(--accent-orange);
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #cbd5e1;
  padding: 0.25rem 0;
}

.contact-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--accent-orange);
  flex-shrink: 0;
  margin-right: 0.5rem;
}

.footer-bottom {
  margin-top: 2rem;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #475569, transparent);
  margin-bottom: 1.5rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom-content p {
  margin: 0;
  color: #94a3b8;
  font-size: 0.9rem;
}

.footer-badges {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.badge {
  background-color: var(--primary-blue);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .social-links {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-badges {
    justify-content: center;
  }
}
</style>