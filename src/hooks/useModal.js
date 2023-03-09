import { useState } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content = false) => {
    // Toggle modal open/closed
    setIsOpen(true);

    // Set content if provided
    if (content) {
      setModalContent(content);
    }
  };

  const closeModal = () => {
    setModalContent(null);
    setIsOpen(false);
  };

  return { isOpen, modalContent, openModal, closeModal };
};
