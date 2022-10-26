import React from 'react';

type ModalProps = {
  onClose: (value: boolean) => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="modal">
      <div onClick={() => onClose(false)} className="modal__close">
        <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200" viewBox="0 0 200 200">
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
      </div>
      {children}
    </div>
  );
};
