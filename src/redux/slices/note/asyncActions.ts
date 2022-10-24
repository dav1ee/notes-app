import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { NoteType, SearchParams } from './types';

export const fetchNotes = createAsyncThunk<NoteType[], SearchParams>(
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
