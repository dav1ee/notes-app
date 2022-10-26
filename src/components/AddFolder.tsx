import React from 'react';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../redux/store';
import { createFolder } from '../redux/slices/folder/asyncActions';

type AddFolderProps = {
  onClose: (value: boolean) => void;
};

export const AddFolder: React.FC<AddFolderProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('');
  const { folders } = useSelector((state: RootState) => state.folder);

  const onAddFolder = () => {
    if (!value) return;

    const obj = {
      id: (Number(folders[0].id) + 1).toString(),
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
          placeholder="Введите название"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="modal__body--add-folder">
        <button onClick={onAddFolder}>Создать папку</button>
      </div>
    </>
  );
};
