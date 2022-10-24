export type NoteSliceState = {
  notes: NoteType[];
  status: Status;
};

export type NoteType = {
  id: string;
  folderId: string;
  title: string;
  text: string;
  date: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SearchParams = {
  pathname: string;
  notesValue: string;
};
