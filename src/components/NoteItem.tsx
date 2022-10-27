import React from 'react';

type NoteItemProps = {
  title: string;
};

export const NoteItem: React.FC<NoteItemProps> = ({ title }) => {
  return (
    <>
      <div className="dot"></div>
      <div className="note-item__name">{title.length === 0 ? 'Без названия' : title}</div>
    </>
  );
};
