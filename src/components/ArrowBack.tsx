import React from 'react';
import { Link } from 'react-router-dom';

type ArrowBackProps = {
  path: string | number;
};

export const ArrowBack: React.FC<ArrowBackProps> = ({ path }) => {
  return (
    // @ts-ignore
    <Link to={path} className="arrow-back">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <title />
        <g data-name="Layer 2" id="Layer_2">
          <path d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z" />
        </g>
      </svg>
    </Link>
  );
};