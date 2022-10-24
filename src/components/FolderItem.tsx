import React from 'react';

type FolderItemProps = {
  id: string;
  name: string;
};

export const FolderItem: React.FC<FolderItemProps> = ({ name }) => {
  return (
    <>
      <div className="dot"></div>
      <div className="folder-item__name">{name}</div>
    </>
  );
};
