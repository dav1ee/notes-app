import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchNotes } from './asyncActions';
import { NoteSliceState, NoteType, Status } from './types';

const initialState: NoteSliceState = {
  notes: [],
  status: Status.LOADING,
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export default noteSlice.reducer;
