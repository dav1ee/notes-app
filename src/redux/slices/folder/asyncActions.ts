import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { FolderType, SearchParams } from './types';

export const fetchFolders = createAsyncThunk<FolderType[], SearchParams>(
  'folders/fetchFolders',
  async (params, { rejectWithValue }) => {
    const { foldersValue } = params;

    try {
      const { data } = await axios.get<FolderType[]>(
        `https://634ab78e5df95285141729e5.mockapi.io/folders?name=${foldersValue}`,
      );

      return data;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  },
);

export const createFolder = createAsyncThunk<FolderType, FolderType>(
  'folders/createFolder',
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<FolderType>(
        'https://634ab78e5df95285141729e5.mockapi.io/folders',
        obj,
      );

      return data;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  },
);
