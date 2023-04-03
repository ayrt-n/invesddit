import React, { useContext } from 'react';
import ModalContext from '../contexts/modal/ModalContext';
import ConfirmationModal from './ConfirmationModal';

function ConfirmationButton({ onClick, modalHeader, modalMessage, modalActionText, children, ...props }) {
  const { openModal, closeModal } = useContext(ModalContext);

  const handleClick = (e) => { 
    openModal(
      <ConfirmationModal
        header={modalHeader}
        message={modalMessage}
        actionText={modalActionText}
        callback={onClick}
        closeModal={closeModal}
      />
    );

    e.preventDefault();
  }
  
  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  )
}

export default ConfirmationButton;
