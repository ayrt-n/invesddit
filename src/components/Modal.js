import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

if (!document.querySelector('#modal-root')) {
  const modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal-root')
  document.body.appendChild(modalRoot)
}

function Modal({ isOpen, content, closeModal }) {
  // Disable keyboard interactions with all non-modal elements on mount
  useEffect(() => {
    const rootDiv = document.getElementById('root');
    if (rootDiv) rootDiv.ariaHidden = "true"

    return(() => {
      const rootDiv = document.getElementById('root');
      if (rootDiv) rootDiv.ariaHidden = "false"
    })
  }, [])

  // Add listener to close modal if esc key presssed
  useEffect(() => {
    const escapeKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', escapeKey);

    return (() => {
      document.removeEventListener('keydown', escapeKey);
    });
  }, [isOpen, closeModal])

  // Prevent screen from scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return (() => {
      document.body.style.overflow = 'unset';
    });
  }, [isOpen])

  if (isOpen) return ReactDOM.createPortal(
    <div role="dialog" aria-modal="true" className="fixed top-0 left-0 h-screen w-full z-[50] overflow-y-auto" style={{ background: "rgba(0,0,0,0.4)" }}>
      <div className="bg-canvas-light rounded-[12px] overflow-y-auto overflow-x-hidden max-h-[90%] max-w-[400px] w-[90%] fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] scrollbar-hide">
        {content}
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
