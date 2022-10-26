import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, RootState } from '../redux/store';
import { deleteNoteAC } from '../redux/slices/note';
import { deleteNote } from '../redux/slices/note/asyncActions';
import { getNoteSelector } from '../redux/slices/note/selectors';
import { setOpen } from '../redux/slices/modal';

import { ArrowBack, Modal } from '../components';

const FullNote: React.FC = () => {
  const { noteId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const note = useSelector(getNoteSelector(noteId as string));
  const { isOpen } = useSelector((state: RootState) => state.modal);

  const onDeleteNote = () => {
    const params = {
      noteId: noteId as string,
      folderId: pathname.split('/')[2],
    };

    dispatch(deleteNoteAC(noteId as string));
    dispatch(deleteNote(params));
    onSetModal(false);
    navigate(-1);
  };

  const onSetModal = (value: boolean) => dispatch(setOpen(value));

  React.useEffect(() => {
    if (!note.length) {
      navigate(-1);
    }
    onSetModal(false);
  }, [note.length, navigate]);

  return (
    <div className="full-note">
      <div className="full-note__top">
        <ArrowBack path={-1} />
        <svg
          onClick={() => onSetModal(true)}
          xmlns="http://www.w3.org/2000/svg"
          id="Icons"
          viewBox="0 0 24 24">
          <path d="M13,0H11A3,3,0,0,0,8,3V4H2A1,1,0,0,0,2,6H3V20a4,4,0,0,0,4,4H17a4,4,0,0,0,4-4V6h1a1,1,0,0,0,0-2H16V3A3,3,0,0,0,13,0ZM10,3a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V4H10Zm9,17a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6H19Z" />
          <path d="M12,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z" />
          <path d="M15,18a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z" />
          <path d="M8,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,8,9Z" />
        </svg>
      </div>

      {note.map((note) => (
        <div key={note.id} className="full-note__item">
          <div className="full-note__item-title">
            <textarea defaultValue={note.title} placeholder="Заголовок" />
          </div>
          <div className="full-note__item-text">
            <textarea defaultValue={note.text} placeholder="Текст" />
          </div>
        </div>
      ))}

      {isOpen && (
        <Modal onClose={onSetModal}>
          <div className="modal__header" style={{ padding: 15 }}>
            Удалить?
          </div>
          <div className="modal__body">
            <button onClick={onDeleteNote}>Да</button>
            <button onClick={() => onSetModal(false)}>Нет</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FullNote;
