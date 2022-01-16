import React from 'react';

export interface ModalProps {
  modal: any;
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Backdrop = () => {
  return <div style={{ position: 'fixed' }}></div>;
};

const Modal: React.FC<ModalProps> = ({
  modal,
  show = false,
  onClose,
  children,
}) => {
  return (
    <div>
      <h2>Modal</h2>
    </div>
  );
};

export default Modal;
