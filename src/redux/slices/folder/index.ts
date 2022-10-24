import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchFolders } from './asyncActions';
import { FolderSliceState, FolderType, Status } from './types';

const initialState: FolderSliceState = {
  folders: [],
  status: Status.LOADING,
};

const folderSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFolders.pending, (state) => {
      state.folders = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchFolders.fulfilled, (state, action: PayloadAction<FolderType[]>) => {
      state.folders = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchFolders.rejected, (state) => {
      state.folders = [];
      state.status = Status.ERROR;
    });
  },
});

export default folderSlice.reducer;
