'use server'

import { createClient } from '@/utils/supabase/server';

export async function createNote(theTitle: string) {
  const supabase = createClient();
  const { data: note, error } = await supabase
    .from('notes')
    .insert({ title: theTitle })
    .select()

  return { note, error }
}