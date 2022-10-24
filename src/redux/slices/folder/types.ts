export type FolderSliceState = {
  folders: FolderType[];
  status: Status;
};

export type FolderType = {
  id: string;
  name: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SearchParams = {
  foldersValue: string;
};
