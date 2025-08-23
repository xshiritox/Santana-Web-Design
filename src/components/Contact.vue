<script setup lang="ts">
import { ref } from 'vue'
import { MapPinIcon } from '@heroicons/vue/24/outline'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  isSubmitted.value = true
  isSubmitting.value = false
  
  // Reset form after 3 seconds
  setTimeout(() => {
    isSubmitted.value = false
    form.value = { name: '', email: '', message: '' }
  }, 3000)
}
</script>

<template>
  <section id="contact" class="section section-dark">
    <div class="container">
      <div class="section-header fade-in">
        <div class="section-tag">Contáctanos</div>
        <h2>¿Listo para comenzar su proyecto?</h2>
        <p>Discutamos cómo podemos traer su visión a vida con una solución web personalizada.</p>
      </div>

      <div class="contact-content">
        <div class="contact-info fade-in">
          <h3>Contáctanos</h3>
          <p class="contact-intro">Listo para tomar su negocio al siguiente nivel? Me encantaría escuchar sobre su proyecto y discutir cómo podemos trabajar juntos para crear algo increíble.</p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div class="method-info">
                <h4>Email</h4>
                <p><a href="mailto:santana.web.design@gmail.com" class="email-link">santana.web.design@gmail.com</a></p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.42 1.41.54.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.1-.23-.16-.48-.27z"/>
                </svg>
              </div>
              <div class="method-info">
                <h4>WhatsApp</h4>
                <p><a href="https://wa.me/5353547990?text=Hola%20estoy%20interesado%20en%20tus%20servicios%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n" class="whatsapp-link" target="_blank" rel="noopener noreferrer">+53 53547990</a></p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">
                <MapPinIcon class="h-6 w-6" />
              </div>
              <div class="method-info">
                <h4>Ubicación</h4>
                <p>Disponible en todo el mundo</p>
              </div>
            </div>
          </div>

          <div class="response-time">
            <div class="response-badge">
              <span class="badge-icon">⚡</span>
              <span class="badge-text">24-horas de garantía de respuesta</span>
            </div>
          </div>
        </div>

        <div class="contact-form-container fade-in">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Nombre completo</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name"
                required
                placeholder="Tu nombre completo"
                :disabled="isSubmitting"
              />
            </div>

            <div class="form-group">
              <label for="contact-email">Correo electrónico</label>
              <input 
                type="email" 
                id="contact-email" 
                v-model="form.email"
                required
                placeholder="Tu correo electrónico"
                :disabled="isSubmitting"
              />
            </div>

            <div class="form-group">
              <label for="message">Detalles del proyecto</label>
              <textarea 
                id="message" 
                v-model="form.message"
                required
                rows="5"
                placeholder="Contanos sobre tu proyecto, metas y cronograma..."
                :disabled="isSubmitting"
              ></textarea>
            </div>

            <button 
              type="submit" 
              class="btn btn-accent submit-btn"
              :disabled="isSubmitting || isSubmitted"
              :class="{ 'submitting': isSubmitting, 'submitted': isSubmitted }"
            >
              <span v-if="!isSubmitting && !isSubmitted">Enviar mensaje</span>
              <span v-else-if="isSubmitting">Enviando...</span>
              <span v-else>Mensaje enviado! ✓</span>
            </button>
          </form>
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

.section-header h2 {
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.section-header p {
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h3 {
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.email-link, .phone-link, .whatsapp-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.email-link:hover, .phone-link:hover, .whatsapp-link:hover {
  color: var(--accent-orange);
  text-decoration: underline;
}

.contact-intro {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-methods {
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid var(--border-gray);
}

.method-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--accent-orange-10);
  color: var(--accent-orange);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-method:hover .method-icon {
  background-color: var(--accent-orange);
  color: white;
  transform: scale(1.1);
}

.method-info h4 {
  margin: 0 0 0.25rem 0;
  color: var(--text-dark);
  font-size: 1rem;
}

.method-info p {
  margin: 0;
  color: var(--text-gray);
}

.response-time {
  display: flex;
  justify-content: center;
}

.response-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--accent-orange);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 0.9rem;
}

.contact-form-container {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-gray);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-dark);
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-gray);
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--bg-white);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group input:disabled,
.form-group textarea:disabled {
  background-color: var(--bg-light);
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-btn {
  margin-top: 0.5rem;
  font-size: 1rem;
  padding: 0.875rem 2rem;
  transition: all 0.3s ease;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submit-btn.submitting {
  background-color: var(--text-gray);
}

.submit-btn.submitted {
  background-color: #10b981;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-form-container {
    padding: 2rem 1.5rem;
  }

  .contact-method {
    padding: 0.75rem;
  }

  .method-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>