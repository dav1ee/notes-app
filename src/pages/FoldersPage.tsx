import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState, useAppDispatch } from '../redux/store';
import { fetchFolders } from '../redux/slices/folder/asyncActions';

import { Header, FolderItem, Search, Preloader, CircleButton } from '../components';

const FoldersPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { folders, status } = useSelector((state: RootState) => state.folder);
  const { foldersValue } = useSelector((state: RootState) => state.search);

  React.useEffect(() => {
    dispatch(fetchFolders({ foldersValue }));
  }, [dispatch, foldersValue]);

  return (
    <>
      <Search placeholder="поиск по папкам" />
      <Header title="Все папки" length={folders.length} />

      {status === 'loading' ? (
        <Preloader />
      ) : (
        <div className="folders-list">
          {folders.map((item) => (
            <Link to={`${item.id}/notes`} key={item.id} className="folder-item">
              <FolderItem {...item} />
            </Link>
          ))}
        </div>
      )}

      <CircleButton />
    </>
  );
};

export default FoldersPage;
