import React, { useContext } from 'react';
import ModalContext from '../contexts/modal/ModalContext';
import ConfirmationModel from './ConfirmationModal';

function ConfirmationButton({ onClick, modalHeader, modalMessage, modalActionText, children, ...props }) {
  const { openModal, closeModal } = useContext(ModalContext);

  const handleClick = (e) => { 
    openModal(
      <ConfirmationModel
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
