import React from 'react';

import { useAppDispatch } from '../redux/store';
import { createFolder } from '../redux/slices/folder/asyncActions';

type AddFolderProps = {
  onClose: (value: boolean) => void;
};

export const AddFolder: React.FC<AddFolderProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('');

  const onAddFolder = () => {
    if (!value) return;

    const obj = {
      id: 'id',
      name: value,
    };

    dispatch(createFolder(obj));
    onClose(false);
  };

  return (
    <>
      <div className="modal__header">
        <input
          type="text"
          placeholder="Название папки"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="modal__body--add-folder">
        <button onClick={onAddFolder}>Создать</button>
      </div>
    </>
  );
};
