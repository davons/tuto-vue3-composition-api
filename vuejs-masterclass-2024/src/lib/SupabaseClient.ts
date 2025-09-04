import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URl,
  import.meta.env.VITE_SUPABASE_KEY,
)
