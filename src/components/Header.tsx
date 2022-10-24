import React from 'react';

import { ArrowBack } from './';

type HeaderProps = {
  title: string;
  length: number;
};

export const Header: React.FC<HeaderProps> = ({ title, length }) => {
  return (
    <div className="header">
      <div className="header__title" style={{ marginLeft: title !== 'Все папки' ? '-35px' : '' }}>
        {title !== 'Все папки' && <ArrowBack path="/folders" />}
        {title}
      </div>
      <div className="header__subtitle">всего: {length}</div>
    </div>
  );
};
