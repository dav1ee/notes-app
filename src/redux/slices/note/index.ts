import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchNotes, deleteNote } from './asyncActions';
import { NoteSliceState, NoteType, Status } from './types';

const initialState: NoteSliceState = {
  notes: [],
  status: Status.LOADING,
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    deleteNoteAC: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((obj) => obj.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    // Fetch
    builder.addCase(fetchNotes.pending, (state) => {
      state.notes = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchNotes.fulfilled, (state, action: PayloadAction<NoteType[]>) => {
      state.notes = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchNotes.rejected, (state) => {
      state.notes = [];
      state.status = Status.ERROR;
    });

    // Delete
    builder.addCase(deleteNote.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(deleteNote.fulfilled, (state) => {
      state.status = Status.SUCCESS;
    });

    builder.addCase(deleteNote.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export const { deleteNoteAC } = noteSlice.actions;

export default noteSlice.reducer;
