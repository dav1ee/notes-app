import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchFolders, createFolder } from './asyncActions';
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
    // Fetch
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

    // Create
    builder.addCase(createFolder.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(createFolder.fulfilled, (state, action: PayloadAction<FolderType>) => {
      state.folders.push(action.payload);
      state.status = Status.SUCCESS;
    });

    builder.addCase(createFolder.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export default folderSlice.reducer;
