import React from 'react';
import Modal from 'react-modal';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 50,
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '1000px',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 1000,
          minHeight: '60%',
          maxHeight: '90%',
          overflow: 'auto',
        },
      }}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-slate-600 text-white text-lg focus:outline-none w-8 border-r-3"
      >
        &times;
      </button>
      {children}
    </Modal>
  );
};

export default CustomModal;
