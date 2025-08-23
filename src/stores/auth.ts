import { ref, computed } from 'vue'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'

const user = ref<User | null>(null)
const isAuthenticated = computed(() => !!user.value)
const isLoading = ref(false)

export const useAuth = () => {
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    isLoading.value = true
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      user.value = data.user
      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al iniciar sesión'
      return { success: false, error: errorMessage }
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      user.value = null
    } catch (err) {
      console.error('Error logging out:', err)
    }
  }

  const initAuth = async () => {
    try {
      const { data: { user: currentUser } } = await supabase.auth.getUser()
      user.value = currentUser
      
      // Escuchar cambios de autenticación
      supabase.auth.onAuthStateChange((_event, session) => {
        user.value = session?.user ?? null
      })
    } catch (err) {
      console.error('Error initializing auth:', err)
    }
  }

  return {
    user: computed(() => user.value),
    isAuthenticated,
    isLoading,
    login,
    logout,
    initAuth
  }
}