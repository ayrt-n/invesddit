import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ isOpen, content, closeModal }) {
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
    <div className="fixed top-0 left-0 h-screen w-full z-[50]" style={{ background: "rgba(0,0,0,0.4)" }}>
      <div className="max-h-[90%] max-w-[400px] w-[90%] bg-canvas-light rounded-[12px] overflow-y-auto overflow-x-hidden fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] shadow-modal">
        <div className="flex flex-row-reverse h-[50px] justify-start items-start">
          <button onClick={closeModal} aria-label="close modal" className="mt-[16px] mr-[16px] text-feed-text">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]">
              <polygon fill="currentColor" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"></polygon>
            </svg>
          </button>
        </div>
        {content}
        <div className="h-[50px]" />
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
