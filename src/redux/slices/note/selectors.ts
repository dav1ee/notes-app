import { RootState } from '../../store';

export const getNoteSelector = (id: string) => (state: RootState) => {
  return state.note.notes.filter((obj) => obj.id === id);
};
