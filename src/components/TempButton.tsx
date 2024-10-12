'use client'

import { createNote } from '@/app/admin/actions';
import { useState } from 'react';

export function TempButton() {
  const [iter, setIter] = useState(0)
  const titles = ['Pachinko1', 'Parable2', 'Handmaid3', 'Ready4', 'Husbands5']
  const title = titles[iter]

  const handleClick = async () => {
    const { note, error } = await createNote(title)
    console.log(note, error)
    setIter((iter) => (iter + 1) % titles.length)
  }

  return (
    <button
      onClick={handleClick}
    >
      {`click me to add a note with the title ${title}`}
    </button>
  );
}
