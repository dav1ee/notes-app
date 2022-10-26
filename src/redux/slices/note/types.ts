export type NoteSliceState = {
  notes: NoteType[];
  status: Status;
};

export type NoteType = {
  id: string;
  folderId: string;
  title: string;
  text: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SearchParamsFetch = {
  pathname: string;
  notesValue: string;
};

export type SearchParamsDelete = {
  noteId: string;
  folderId: string;
};
