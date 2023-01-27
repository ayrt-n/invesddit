import React from 'react';
import PillButton from './PillButton';

function BackToTopWidget() {
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="mt-[16px] flex justify-center">
      <PillButton additionalClasses="w-[115px] text-[14px] leading-[17px]" onClick={scrollToTop}>
        Back to Top
      </PillButton>
    </div>
  );
}

export default BackToTopWidget;
