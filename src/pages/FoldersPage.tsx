import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState, useAppDispatch } from '../redux/store';
import { fetchFolders } from '../redux/slices/folder/asyncActions';
import { setOpen } from '../redux/slices/modal';

import {
  Header,
  FolderItem,
  Search,
  Preloader,
  CircleButton,
  Modal,
  AddFolder,
} from '../components';

const FoldersPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { folders, status } = useSelector((state: RootState) => state.folder);
  const { foldersValue } = useSelector((state: RootState) => state.search);
  const { isOpen } = useSelector((state: RootState) => state.modal);

  const reversedFolders = [...folders].reverse();

  const onSetModal = (value: boolean) => dispatch(setOpen(value));

  React.useEffect(() => {
    dispatch(fetchFolders({ foldersValue }));
    onSetModal(false);
  }, [dispatch, foldersValue]);

  return (
    <>
      <Search placeholder="поиск по папкам" />
      <Header title="Все папки" length={folders.length} />

      {status === 'loading' ? (
        <Preloader />
      ) : (
        <div className="folders-list">
          {reversedFolders.map((item) => (
            <Link to={`${item.id}/notes`} key={item.id} className="folder-item">
              <FolderItem {...item} />
            </Link>
          ))}
        </div>
      )}

      <CircleButton onClick={onSetModal} />

      {isOpen && (
        <Modal onClose={onSetModal}>
          <AddFolder onClose={onSetModal} />
        </Modal>
      )}
    </>
  );
};

export default FoldersPage;
