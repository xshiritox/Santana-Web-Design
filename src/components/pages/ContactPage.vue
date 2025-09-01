<template>
  <div class="contact-page">
    <div class="content">
      <header class="page-header">
        <h1 class="page-title">Contáctanos</h1>
        <div class="title-underline"></div>
        <p class="page-subtitle">
          ¿Listo para llevar tu negocio al siguiente nivel? Hablemos de tu proyecto
        </p>
      </header>
      
      <div class="contact-container">
        <div class="contact-info">
          <h3 class="info-title">Información de Contacto</h3>
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">Email:</span>
              <a href="mailto:marcoant.offc@gmail.com" class="contact-value email-link">marcoant.offc@gmail.com</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">Llamar:</span>
              <a href="tel:+5353547990" class="contact-value phone-link">+53 53547990</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">Horario:</span>
              <span class="contact-value">Lun - Sab: 9:00 - 18:00</span>
            </div>
          </div>
          
          <div class="response-time">
            <h4 class="response-title">Tiempo de Respuesta</h4>
            <p class="response-text">
              Respondemos todas las consultas en menos de 24 horas. 
              Para proyectos urgentes, contáctanos por WhatsApp.
            </p>
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
// Script vacío ya que se eliminó el formulario
</script>

<style scoped>
.contact-page {
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

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 16px;
  height: fit-content;
}

.info-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  transition: transform 0.2s ease;
}

.contact-item:hover {
  transform: translateX(8px);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(0, 191, 255, 0.1);
  border-radius: 12px;
  color: #00BFFF;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-icon svg {
  width: 24px;
  height: 24px;
  stroke-width: 2;
}

.contact-item:hover .contact-icon {
  background: rgba(0, 191, 255, 0.2);
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(0, 191, 255, 0.1);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-label {
  font-weight: 600;
  color: #4a5568;
  font-size: 0.9rem;
}

.contact-value {
  color: #00BFFF;
  font-weight: 500;
}

.response-time {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(0, 191, 255, 0.05);
  border-radius: 12px;
  border-left: 4px solid #00BFFF;
}

.response-title {
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.response-text {
  color: #4a5568;
  line-height: 1.5;
  font-size: 0.95rem;
}

.contact-form-container {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 16px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-weight: 600;
  color: #374151;
  font-size: 0.95rem;
}

.form-input {
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.phone-link,
.email-link {
  text-decoration: none;
  color: #00BFFF;
  transition: opacity 0.3s ease;
}

.phone-link:hover,
.email-link:hover {
  opacity: 0.8;
}

.form-input:focus {
  outline: none;
  border-color: #00BFFF;
  box-shadow: 0 0 0 3px rgba(0, 191, 255, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.submit-button {
  background: linear-gradient(135deg, #00BFFF, #87CEEB);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 191, 255, 0.3);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
}

.form-status.success {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.form-status.error {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border: 1px solid rgba(239, 68, 68, 0.2);
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
  
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-info,
  .contact-form-container {
    padding: 1.5rem;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>