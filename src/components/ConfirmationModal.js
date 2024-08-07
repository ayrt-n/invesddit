import React from 'react';
import PillButton from './PillButton';

function ConfirmationModal({ header, message, actionText, callback, closeModal }) {
  const handleConfirm = () => {
    callback();
    closeModal();
  }

  return (
    <>
      <header className="border-b-[1px] border-nav-border p-[16px]">
        <div className="flex">
          <div className="flex-[1_1_100%] w-full">
            <h1 className="text-[16px] font-semibold leading-[20px]">
              {header}
            </h1>
          </div>
          <div className="flex-[0_0]">
            <button onClick={closeModal} aria-label="close modal" className="text-feed-text">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]">
                <polygon fill="currentColor" points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="p-[16px]">
        <p className="text-[14px] leading-[21px] prewrap my-[10px]">
          {message}
        </p>
      </div>
      <footer className="flex justify-end p-[16px] bg-nav-border">
        <PillButton onClick={closeModal} variant="inverted" className="w-auto">
          Cancel
        </PillButton>
        <PillButton onClick={handleConfirm} variant="danger" className="w-auto ml-[8px]">
          {actionText}
        </PillButton>
      </footer>
    </>
  );
}

export default ConfirmationModal;
