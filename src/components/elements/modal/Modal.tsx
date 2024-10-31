'use client';

import { ReactNode } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('.App');

interface ModalProps {
  isOpen: boolean;
  width?: string;
  height?: string;
  children?: ReactNode;
  closeModal: () => void;
}

export default function Modal({
  isOpen,
  width,
  height,
  closeModal,
  children,
}: ModalProps) {
  return (
    <div className="App">
      <ReactModal
        isOpen={isOpen}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.50)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            padding: '0',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '0.5rem',
            width: width ?? '300px',
            height: height ?? '300px',
            position: 'relative',
          },
        }}
        onRequestClose={() => closeModal()}
      >
        {children}
      </ReactModal>
    </div>
  );
}
