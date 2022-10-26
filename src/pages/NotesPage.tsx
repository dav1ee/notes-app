import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import { RootState, useAppDispatch } from '../redux/store';
import { fetchNotes } from '../redux/slices/note/asyncActions';

import { Header, NoteItem, Search, Preloader, CircleButton } from '../components';

const NotesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const { notes, status } = useSelector((state: RootState) => state.note);
  const { notesValue } = useSelector((state: RootState) => state.search);

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
          {notes.map((item) => (
            <Link to={`${pathname}/${item.id}`} key={item.id} className="note-item">
              <NoteItem title={item.title} />
            </Link>
          ))}
        </div>
      )}

      {/* <CircleButton /> */}
    </>
  );
};

export default NotesPage;
