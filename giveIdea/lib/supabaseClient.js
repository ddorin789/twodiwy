// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://toxjfcqzdoxjjtiaihml.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRveGpmY3F6ZG94amp0aWFpaG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMjI0NzUsImV4cCI6MjA2NTU5ODQ3NX0.HzcsHR2TRogV8PuIB7b1KDrLJsgn096A9iuxDaPfJFA'
export const supabase = createClient(supabaseUrl, supabaseKey)

