import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import folderReducer from './slices/folder';
import noteReducer from './slices/note';
import searchReducer from './slices/search';

export const store = configureStore({
  reducer: {
    folder: folderReducer,
    note: noteReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
