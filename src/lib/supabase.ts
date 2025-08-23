import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://npvvalctaxxyezeuupen.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wdnZhbGN0YXh4eWV6ZXV1cGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTI4OTQsImV4cCI6MjA3MTMyODg5NH0.zy4eupsq8fr_Zao9zayo6qDLoKaENnU2vqTjmj4UtYY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          description: string
          image: string
          technologies: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image: string
          technologies: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image?: string
          technologies?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}