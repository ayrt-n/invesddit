import React from 'react';
import PillButton from '../PillButton';

function LoginButton() {
  return (
    <div className="mt-[16px]">
      <PillButton type="submit" additionalClasses="h-[40px] leading-[18px] mt-[8px]">Log in</PillButton>
  </div>
  );
}

export default LoginButton;
