import { createClient } from '@/utils/supabase/server';

export default async function Page() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <div className="flex flex-col items-start justify-start space-y-4">
      <span>Resources page</span>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  );
}
