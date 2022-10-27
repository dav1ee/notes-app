import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import { RootState, useAppDispatch } from '../redux/store';
import { fetchNotes, createNote } from '../redux/slices/note/asyncActions';

import { Header, NoteItem, Search, Preloader, CircleButton } from '../components';

const NotesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const { notes, status } = useSelector((state: RootState) => state.note);
  const { notesValue } = useSelector((state: RootState) => state.search);

  const reversedNotes = [...notes].reverse();

  const onCreateNote = () => {
    const obj = {
      id: 'id',
      folderId: pathname.split('/')[2],
      title: '',
      text: '',
    };

    dispatch(createNote(obj));
  };

  React.useEffect(() => {
    dispatch(fetchNotes({ pathname, notesValue }));
  }, [dispatch, pathname, notesValue]);

  return (
    <>
      <Search placeholder="поиск по заметкам" />
      <Header title="Все заметки" length={notes.length} />

      {status === 'loading' ? (
        <Preloader />
      ) : (
        <div className="notes-list">
          {reversedNotes.map((item) => (
            <Link to={`${pathname}/${item.id}`} key={item.id} className="note-item">
              <NoteItem title={item.title} />
            </Link>
          ))}
        </div>
      )}

      <CircleButton onClick={onCreateNote} />
    </>
  );
};

export default NotesPage;
