import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ isOpen, content, closeModal }) {
  // Disable keyboard interactions with all non-modal elements on mount
  useEffect(() => {
    const rootDiv = document.getElementById('root');
    rootDiv.ariaHidden = "true"

    return(() => {
      const rootDiv = document.getElementById('root');
      rootDiv.ariaHidden = "false"
    })
  }, [])

  useEffect(() => {
    // Add listener to close modal if esc key pressed
    const escapeKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', escapeKey);

    // Prevent screen from scrolling while modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return (() => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', escapeKey);
    });
  }, [isOpen, closeModal])

  if (isOpen) return ReactDOM.createPortal(
    <div role="dialog" aria-modal="true" className="fixed top-0 left-0 h-screen w-full z-[50]" style={{ background: "rgba(0,0,0,0.4)" }}>
      <div className="max-h-[90%] max-w-[400px] w-[90%] fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] overflow-hidden">
        {content}
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
