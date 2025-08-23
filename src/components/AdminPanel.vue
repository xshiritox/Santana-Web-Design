<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useAuth } from '../stores/auth'
import { useProjects, type Project, type ProjectInsert } from '../stores/projects'
import { PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const { user, logout } = useAuth()
const { projects, isLoading, error, fetchProjects, addProject, updateProject, deleteProject } = useProjects()

const isModalOpen = ref(false)
const isSubmitting = ref(false)
const editingProject = ref<Project | null>(null)
const isDeleteModalOpen = ref(false)
const projectToDelete = ref<Project | null>(null)
const formError = ref('')

const form = ref({
  title: '',
  description: '',
  image: '',
  technologies: ''
})

const projectCount = computed(() => projects.value.length)

onMounted(() => {
  fetchProjects()
})

const openModal = (project?: Project) => {
  if (project) {
    editingProject.value = project
    form.value = {
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies?.join(', ') || ''
    }
  } else {
    editingProject.value = null
    form.value = {
      title: '',
      description: '',
      image: '',
      technologies: ''
    }
  }
  isModalOpen.value = true
  formError.value = ''
}

const closeModal = () => {
  isModalOpen.value = false
  editingProject.value = null
  form.value = {
    title: '',
    description: '',
    image: '',
    technologies: ''
  }
  formError.value = ''
}

const handleSubmit = async () => {
  if (!form.value.title.trim() || !form.value.description.trim() || !form.value.image.trim()) {
    formError.value = 'Por favor completa todos los campos requeridos'
    return
  }

  isSubmitting.value = true
  formError.value = ''

  const projectData: Omit<ProjectInsert, 'id' | 'created_at' | 'updated_at'> = {
    title: form.value.title,
    description: form.value.description,
    image: form.value.image,
    technologies: form.value.technologies.split(',').map(tech => tech.trim()).filter(tech => tech)
  }

  try {
    let result
    if (editingProject.value) {
      result = await updateProject(editingProject.value.id, projectData)
    } else {
      result = await addProject(projectData)
    }

    if (result.success) {
      closeModal()
    } else {
      formError.value = result.error || 'Error al guardar el proyecto'
    }
  } catch (err) {
    formError.value = 'Error inesperado al guardar el proyecto'
  } finally {
    isSubmitting.value = false
  }
}

const confirmDelete = (project: Project) => {
  projectToDelete.value = project
  isDeleteModalOpen.value = true
}

const handleDelete = async () => {
  if (projectToDelete.value) {
    const result = await deleteProject(projectToDelete.value.id)
    if (result.success) {
      isDeleteModalOpen.value = false
      projectToDelete.value = null
    }
  }
}

const handleLogout = async () => {
  await logout()
  window.location.reload()
}
</script>

<template>
  <div class="admin-panel">
    <div class="admin-header">
      <div class="container">
        <div class="header-content">
          <div class="admin-title">
            <h1>Panel de Administración</h1>
            <p>Gestiona los proyectos del portafolio</p>
          </div>
          <div class="admin-actions">
            <span class="user-info">Bienvenido, {{ user?.email?.split('@')[0] || 'Usuario' }}</span>
            <button @click="handleLogout" class="btn btn-outline logout-btn">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="admin-content">
      <div class="container">
        <div class="projects-header">
          <h2>Proyectos ({{ projectCount }})</h2>
        </div>

        <div v-if="isLoading" class="loading-state">
          <p>Cargando proyectos...</p>
        </div>

        <div v-else-if="error" class="error-state">
          <p>Error: {{ error }}</p>
          <button @click="fetchProjects" class="btn btn-primary">Reintentar</button>
        </div>

        <div v-else-if="projectCount > 0" class="projects-grid">
          <div v-for="project in projects" :key="project.id" class="project-card">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in (project.technologies || [])" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
              <div class="project-actions">
                <button @click="openModal(project)" class="btn-icon edit-btn">
                  <PencilIcon class="h-4 w-4" />
                </button>
                <button @click="confirmDelete(project)" class="btn-icon delete-btn">
                  <TrashIcon class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="empty-state">
          <h3>No hay proyectos</h3>
          <p>Comienza agregando tu primer proyecto</p>
          <button @click="openModal()" class="add-project-btn">
            <span class="plus-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </span>
            <span>Agregar Proyecto</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de Proyecto -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>{{ editingProject ? 'Editar Proyecto' : 'Nuevo Proyecto' }}</h3>
          <button @click="closeModal" class="close-btn">
            <XMarkIcon class="h-6 w-6" />
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="project-form">
          <div class="form-group">
            <label for="title">Título del Proyecto</label>
            <input
              type="text"
              id="title"
              v-model="form.title"
              required
              placeholder="Ej: Plataforma de E-commerce"
            />
          </div>

          <div class="form-group">
            <label for="description">Descripción</label>
            <textarea
              id="description"
              v-model="form.description"
              required
              rows="4"
              placeholder="Describe el proyecto y sus características principales..."
            ></textarea>
          </div>

          <div class="form-group">
            <label for="image">URL de la Imagen</label>
            <input
              type="url"
              id="image"
              v-model="form.image"
              required
              placeholder="https://ejemplo.com/imagen.jpg"
            />
          </div>

          <div class="form-group">
            <label for="technologies">Tecnologías (separadas por comas)</label>
            <input
              type="text"
              id="technologies"
              v-model="form.technologies"
              required
              placeholder="Vue.js, Node.js, MongoDB, Stripe"
            />
          </div>

          <div v-if="formError" class="error-message">
            {{ formError }}
          </div>

          <div class="form-actions">
            <button type="button" @click="closeModal" class="btn btn-outline">
              Cancelar
            </button>
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Guardando...' : (editingProject ? 'Actualizar' : 'Crear') }} Proyecto
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal de Confirmación de Eliminación -->
    <div v-if="isDeleteModalOpen" class="modal-overlay" @click="isDeleteModalOpen = false">
      <div class="modal-content delete-modal" @click.stop>
        <div class="modal-header">
          <h3>Confirmar Eliminación</h3>
        </div>
        <p>¿Estás seguro de que quieres eliminar el proyecto "{{ projectToDelete?.title }}"?</p>
        <p class="warning-text">Esta acción no se puede deshacer.</p>
        <div class="form-actions">
          <button @click="isDeleteModalOpen = false" class="btn btn-outline">
            Cancelar
          </button>
          <button @click="handleDelete" class="btn btn-danger" :disabled="isLoading">
            {{ isLoading ? 'Eliminando...' : 'Eliminar' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .admin-content {
    padding: 1rem;
  }

  .projects-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .projects-header h2 {
    font-size: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-card {
    flex-direction: column;
  }

  .project-image {
    width: 100%;
    height: 200px;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .project-content {
    padding: 1rem;
  }

  .project-actions {
    flex-direction: column;
    gap: 0.5rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .modal-content {
    width: 95%;
    margin: 1rem;
    padding: 1.5rem;
  }

  .form-group {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .btn-cancel,
  .btn-primary {
    width: 100%;
  }
}

.admin-panel {
  min-height: 100vh;
  background: var(--bg-light);
}

.admin-header {
  background: white;
  border-bottom: 1px solid var(--border-gray);
  padding: 2rem 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.admin-title h1 {
  margin: 0 0 0.5rem 0;
  color: var(--text-dark);
}

.admin-title p {
  margin: 0;
  color: var(--text-gray);
}

.admin-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.user-info {
  color: var(--text-gray);
  font-weight: 500;
  white-space: nowrap;
}

.logout-btn {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  white-space: nowrap;
}

.admin-content {
  padding: 2rem 0;
}

.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.projects-header h2 {
  margin: 0;
  color: var(--text-dark);
}

.projects-header .btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-gray);
}

.project-image {
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  margin: 0 0 0.75rem 0;
  color: var(--text-dark);
  font-size: 1.125rem;
  line-height: 1.3;
}

.project-content p {
  margin: 0 0 1rem 0;
  line-height: 1.6;
  color: var(--text-gray);
  font-size: 0.95rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--bg-light);
  color: var(--primary-blue);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--border-gray);
}

.project-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.btn-icon {
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 2.5rem;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edit-btn {
  color: var(--primary-blue);
}

.edit-btn:hover {
  background: var(--primary-blue);
  color: white;
}

.delete-btn {
  color: #dc2626;
}

.delete-btn:hover {
  background: #dc2626;
  color: white;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 1rem;
  border: 1px solid var(--border-gray);
}

.empty-state h3 {
  margin: 0 0 0.5rem 0;
  color: var(--text-dark);
}

.empty-state p {
  margin: 0 0 2rem 0;
  color: var(--text-gray);
}

.add-project-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.75rem;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2), 0 2px 4px -1px rgba(79, 70, 229, 0.1);
}

.add-project-btn:hover {
  background: linear-gradient(135deg, #4338ca, #6d28d9);
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3), 0 4px 6px -2px rgba(79, 70, 229, 0.1);
}

.add-project-btn:active {
  transform: translateY(0);
}

.plus-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: relative;
}

.plus-icon svg {
  width: 100%;
  height: 100%;
  stroke: currentColor;
  transition: transform 0.3s ease;
}

.add-project-btn:hover .plus-icon svg {
  transform: rotate(90deg);
}

.empty-state .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
  padding: 1rem;
.loading-state, .error-state {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 1rem;
  border: 1px solid var(--border-gray);
}

.loading-state p, .error-state p {
  margin: 0 0 1rem 0;
  color: var(--text-gray);
  font-size: 1.125rem;
}

.error-state p {
  color: #dc2626;
}

}

.modal-content {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.delete-modal {
  max-width: 400px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.modal-header h3 {
  margin: 0;
  color: var(--text-dark);
  flex: 1;
  min-width: 0;
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-gray);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.close-btn:hover {
  background: var(--bg-light);
  color: var(--text-dark);
}

.project-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-dark);
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 2px solid var(--border-gray);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-blue);
}

.error-message {
  background: #fee2e2;
  color: #dc2626;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid #fecaca;
  margin-bottom: 1rem;
  word-wrap: break-word;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.warning-text {
  color: #dc2626;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  word-wrap: break-word;
}

.btn-danger {
  background-color: #dc2626;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-danger:hover {
  background-color: #b91c1c;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Tablet styles */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  .project-content {
    padding: 1.25rem;
  }

  .modal-content {
    padding: 1.75rem;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .admin-header {
    padding: 1.5rem 0;
  }

  .header-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    align-items: stretch;
  }

  .admin-title {
    order: 1;
  }

  .admin-actions {
    order: 2;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .admin-content {
    padding: 1.5rem 0;
  }

  .projects-header {
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
    text-align: center;
  }

  .projects-header h2 {
    font-size: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-card {
    max-width: none;
  }

  .project-content {
    padding: 1.25rem;
  }

  .project-actions {
    justify-content: center;
    gap: 1rem;
  }

  .btn-icon {
    min-width: 3rem;
    min-height: 3rem;
  }

  .empty-state {
    padding: 3rem 1.5rem;
  }

  .loading-state, .error-state {
    padding: 3rem 1.5rem;
  }

  .modal-overlay {
    padding: 0.5rem;
    align-items: flex-start;
    padding-top: 2rem;
  }

  .modal-content {
    padding: 1.5rem;
    max-height: calc(100vh - 4rem);
    width: 100%;
    max-width: none;
  }

  .modal-header {
    margin-bottom: 1.25rem;
  }

  .modal-header h3 {
    font-size: 1.25rem;
  }

  .form-actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .form-actions .btn {
    width: 100%;
    justify-content: center;
  }

  .delete-modal {
    max-width: none;
  }
}

/* Small mobile styles */
@media (max-width: 480px) {
  .admin-title h1 {
    font-size: 1.5rem;
  }

  .admin-title p {
    font-size: 0.9rem;
  }

  .projects-header h2 {
    font-size: 1.25rem;
  }

  .project-content h3 {
    font-size: 1rem;
  }

  .project-content p {
    font-size: 0.9rem;
  }

  .tech-tag {
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
  }

  .modal-content {
    padding: 1.25rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 0.625rem;
    font-size: 0.95rem;
  }

  .btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
  }

  .btn-icon {
    min-width: 2.75rem;
    min-height: 2.75rem;
  }

  .empty-state {
    padding: 2rem 1rem;
  }

  .loading-state, .error-state {
    padding: 2rem 1rem;
  }
}
</style>