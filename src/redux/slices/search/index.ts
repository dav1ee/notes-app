import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  foldersValue: '',
  notesValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setFoldersValue: (state, action: PayloadAction<string>) => {
      state.foldersValue = action.payload;
    },

    setNotesValue: (state, action: PayloadAction<string>) => {
      state.notesValue = action.payload;
    },
  },
});

export const { setFoldersValue, setNotesValue } = searchSlice.actions;

export default searchSlice.reducer;
