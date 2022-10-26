import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { NoteType, SearchParamsFetch, SearchParamsDelete } from './types';

export const fetchNotes = createAsyncThunk<NoteType[], SearchParamsFetch>(
  'notes/fetchNotes',
  async (params, { rejectWithValue }) => {
    const { pathname, notesValue } = params;

    try {
      const { data } = await axios.get<NoteType[]>(
        `https://634ab78e5df95285141729e5.mockapi.io${pathname}?title=${notesValue}`,
      );

      return data;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  },
);

export const deleteNote = createAsyncThunk<NoteType[], SearchParamsDelete>(
  'notes/deleteNote',
  async (params, { rejectWithValue }) => {
    const { folderId, noteId } = params;

    try {
      const { data } = await axios.delete(
        `https://634ab78e5df95285141729e5.mockapi.io/folders/${folderId}/notes/${noteId}`,
      );

      return data;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  },
);
