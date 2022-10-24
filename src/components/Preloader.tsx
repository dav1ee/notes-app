import React from 'react';
import { ClockLoader } from 'react-spinners';

export const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <ClockLoader loading={true} className="preloader" color="#9478ce" size={100} />
    </div>
  );
};
