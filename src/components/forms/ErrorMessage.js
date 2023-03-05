import React from 'react';

function ErrorMessage({ children }) {
  return (
    <div className="text-[12px] leading-[16px] text-[red] pt-[4px]">
      <span className="nowrap overflow-hidden text-ellipsis">
        {children}
      </span>
    </div>
  );
}

export default ErrorMessage;
