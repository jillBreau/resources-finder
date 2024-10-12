import { createClient } from '@/utils/supabase/server';
import { TempButton } from '../../components/TempButton'

export default async function Page() {
  const supabase = createClient();
  const { data: notes } = await supabase
    .from('notes')
    .select()

  return (
    <div className="flex flex-col items-center">
      Admin page - restricted
      {notes?.map(({ id, title }) => (
        <div className="flex flex-col space-y-8" key={id}>
          <span>{title}</span>
        </div>
      ))}
      <TempButton/>
    </div>
  );
}
