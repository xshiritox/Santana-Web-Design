<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useAuth } from '../stores/auth'

const { login, isLoading, isAuthenticated } = useAuth()

const email = ref('')
const password = ref('')
const error = ref('')
const showPassword = ref(false)

const emit = defineEmits<{
  loginSuccess: []
}>()

const passwordFieldType = computed(() => showPassword.value ? 'text' : 'password')
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

onMounted(() => {
  // If already authenticated, emit success immediately
  if (isAuthenticated.value) {
    emit('loginSuccess')
  }
})

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    error.value = 'Por favor completa todos los campos'
    return
  }

  error.value = ''

  const result = await login(email.value, password.value)
  
  if (result.success) {
    emit('loginSuccess')
  } else {
    error.value = result.error || 'Error al iniciar sesión'
  }
}

const goBack = (event: Event) => {
  event.preventDefault()
  window.location.href = '/'
}
</script>

<template>
  <div class="admin-login-page">
    <div class="container">
      <div class="login-container">
        <div class="login-header">
          <button @click="goBack" class="back-btn">
            ← Volver al sitio
          </button>
          <div class="brand">
            <h1>Santana Web Design</h1>
            <p>Panel de Administración</p>
          </div>
        </div>

        <div class="login-card">
          <div class="card-header">
            <h2>Acceso Administrativo</h2>
            <p>Ingresa tus credenciales para acceder al panel de administración</p>
          </div>

          <form @submit.prevent="handleSubmit" class="login-form">
            <div class="form-group">
              <label for="admin-email">Email</label>
              <input
                type="email"
                id="admin-email"
                v-model="email"
                required
                :disabled="isLoading"
                placeholder="Ingresa tu email"
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <label for="password">Contraseña</label>
              <div class="password-input-container">
                <input
                  id="password"
                  v-model="password"
                  :type="passwordFieldType"
                  required
                  :disabled="isLoading"
                  placeholder="Ingresa tu contraseña"
                  autocomplete="current-password"
                />
                <button 
                  type="button" 
                  class="toggle-password"
                  @click="togglePasswordVisibility"
                  :aria-label="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
                >
                  <svg v-if="showPassword" class="icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                  <svg v-else class="icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div v-if="error" class="error-message">
              {{ error }}
            </div>

            <button
              type="submit"
              class="btn btn-primary login-btn"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.login-container {
  width: 100%;
  max-width: 450px;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.back-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.brand h1 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.brand p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  margin: 0;
}

.login-card {
  background: white;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.card-header {
  text-align: center;
  margin-bottom: 2rem;
}

.card-header h2 {
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.card-header p {
  color: var(--text-gray);
  font-size: 0.95rem;
  margin: 0;
}

.login-form {
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

.form-group input {
  padding: 0.875rem 1rem;
  border: 2px solid var(--border-gray);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: var(--bg-white);
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group input:disabled {
  background: var(--bg-light);
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  background: #fee2e2;
  color: #dc2626;
  padding: 0.875rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid #fecaca;
  text-align: center;
}

.login-btn {
  width: 100%;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  margin-top: 0.5rem;
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* Password Toggle Styles */
.password-input-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.password-input-container input {
  padding-right: 3rem;
  width: 100%;
}

.toggle-password {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  outline: none;
}

.toggle-password:hover {
  background-color: #f1f5f9;
  color: #64748b;
}

.toggle-password:focus-visible {
  box-shadow: 0 0 0 2px #e0e7ff, 0 0 0 4px #6366f1;
}

.toggle-password .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
  color: #64748b;
}

.toggle-password:hover .icon {
  color: #3b82f6;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .admin-login-page {
    padding: 1rem;
  }

  .login-card {
    padding: 2rem 1.5rem;
  }

  .brand h1 {
    font-size: 1.75rem;
  }
}
</style>