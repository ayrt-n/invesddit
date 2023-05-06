import React from 'react';
import PillButton from '../PillButton';

function LoginButton({ disabled, children }) {
  return (
    <div className="mt-[16px]">
      <PillButton type="submit" disabled={disabled} className="h-[40px] leading-[18px] mt-[8px]">
        {children}
      </PillButton>
  </div>
  );
}

export default LoginButton;
