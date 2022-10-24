import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';

import {
  setFoldersValue as setFoldersValueAC,
  setNotesValue as setNotesValueAC,
} from '../redux/slices/search';

type SearchProps = {
  placeholder: string;
};

export const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const [foldersValue, setFoldersValue] = React.useState('');
  const [notesValue, setNotesValue] = React.useState('');

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const updateFoldersValue = React.useCallback(
    debounce((str) => {
      dispatch(setFoldersValueAC(str));
    }, 300),
    [],
  );

  const updateNotesValue = React.useCallback(
    debounce((str) => {
      dispatch(setNotesValueAC(str));
    }, 300),
    [],
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (pathname === '/folders') {
      setFoldersValue(e.target.value);
      updateFoldersValue(e.target.value);
    } else {
      setNotesValue(e.target.value);
      updateNotesValue(e.target.value);
    }
  };

  React.useEffect(() => {
    return () => {
      dispatch(setFoldersValueAC(''));
      dispatch(setNotesValueAC(''));
    };
  }, [dispatch]);

  return (
    <div className="search">
      <svg className="search__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={pathname === '/folders' ? foldersValue : notesValue}
        onChange={onInputChange}
      />
    </div>
  );
};
