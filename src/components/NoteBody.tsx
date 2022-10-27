import React from 'react';
import debounce from 'lodash.debounce';

import { useAppDispatch } from '../redux/store';
import { updateNote } from '../redux/slices/note/asyncActions';
import { NoteType } from '../redux/slices/note/types';

export const NoteBody: React.FC<NoteType> = ({ id, folderId, title, text }) => {
  const dispatch = useAppDispatch();

  const [titleValue, setTitleValue] = React.useState(title);
  const [textValue, setTextValue] = React.useState(text);

  const updateTitleValue = React.useCallback(
    debounce((str: string) => {
      const obj = {
        id,
        folderId,
        title: str,
        text,
      };

      dispatch(updateNote(obj));
    }, 500),
    [],
  );

  const updateTextValue = React.useCallback(
    debounce((str: string) => {
      const obj = {
        id,
        folderId,
        title,
        text: str,
      };

      dispatch(updateNote(obj));
    }, 500),
    [],
  );

  const onTitleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleValue(e.target.value);
    updateTitleValue(e.target.value);
  };

  const onTextValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
    updateTextValue(e.target.value);
  };

  return (
    <div className="full-note__item">
      <div className="full-note__item-title">
        <textarea value={titleValue} onChange={onTitleValueChange} placeholder="Заголовок" />
      </div>
      <div className="full-note__item-text">
        <textarea value={textValue} onChange={onTextValueChange} placeholder="Текст" />
      </div>
    </div>
  );
};
