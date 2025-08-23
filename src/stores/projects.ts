import { ref } from 'vue'
import { supabase } from '../lib/supabase'
import type { Database } from '../lib/supabase'

export type Project = Database['public']['Tables']['projects']['Row']
export type ProjectInsert = Database['public']['Tables']['projects']['Insert']
export type ProjectUpdate = Database['public']['Tables']['projects']['Update']

const projects = ref<Project[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)

export const useProjects = () => {
  const fetchProjects = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const { data, error: fetchError } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      
      projects.value = data || []
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error al cargar proyectos'
      console.error('Error fetching projects:', err)
    } finally {
      isLoading.value = false
    }
  }

  const addProject = async (project: Omit<ProjectInsert, 'id' | 'created_at' | 'updated_at'>) => {
    isLoading.value = true
    error.value = null

    try {
      const { data, error: insertError } = await supabase
        .from('projects')
        .insert([project])
        .select()
        .single()

      if (insertError) throw insertError

      if (data) {
        projects.value.unshift(data)
      }
      
      return { success: true, data }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error al crear proyecto'
      console.error('Error adding project:', err)
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const updateProject = async (id: string, updates: ProjectUpdate) => {
    isLoading.value = true
    error.value = null

    try {
      const { data, error: updateError } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (updateError) throw updateError

      if (data) {
        const index = projects.value.findIndex(p => p.id === id)
        if (index !== -1) {
          projects.value[index] = data
        }
      }

      return { success: true, data }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error al actualizar proyecto'
      console.error('Error updating project:', err)
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const deleteProject = async (id: string) => {
    isLoading.value = true
    error.value = null

    try {
      const { error: deleteError } = await supabase
        .from('projects')
        .delete()
        .eq('id', id)

      if (deleteError) throw deleteError

      projects.value = projects.value.filter(p => p.id !== id)
      
      return { success: true }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error al eliminar proyecto'
      console.error('Error deleting project:', err)
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const getProject = (id: string) => {
    return projects.value.find(p => p.id === id)
  }

  return {
    projects,
    isLoading,
    error,
    fetchProjects,
    addProject,
    updateProject,
    deleteProject,
    getProject
  }
}