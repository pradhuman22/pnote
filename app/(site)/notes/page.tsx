import { getNotesMetadata } from '@/lib/notes';
import React from 'react';
import NoteList from './_components/note-list';

const NotesListPage = async () => {
  const notes = await getNotesMetadata();
  return <NoteList notes={notes} />;
};

export const dynamic = 'force-dynamic';

export default NotesListPage;
