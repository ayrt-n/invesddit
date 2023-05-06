import React from 'react';
import PillButton from './PillButton';

function BackToTopWidget() {
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="mt-[45px] flex justify-center">
      <PillButton className="text-[14px] leading-[17px] max-w-[115px] min-h-[32px]" onClick={scrollToTop}>
        Back to Top
      </PillButton>
    </div>
  );
}

export default BackToTopWidget;
