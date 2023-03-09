import { useMemo } from 'react';
import { useModal } from '../../hooks/useModal';
import Modal from '../../components/Modal';
import ModalContext from './ModalContext';

function ModalProvider({ children }) {
  const { isOpen, modalContent, openModal, closeModal } = useModal();

  const providerValues = useMemo(() => ({
    isOpen,
    modalContent,
    openModal,
    closeModal,
  }), [isOpen, modalContent, openModal, closeModal]);

  return (
    <ModalContext.Provider value={providerValues}>
      <Modal isOpen={isOpen} content={modalContent} closeModal={closeModal} />
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
