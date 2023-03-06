import React from 'react';

function ErrorMessage({ styles, children }) {
  return (
    <div className="text-[12px] leading-[16px] text-[red] pt-[4px] pl-[16px]">
      <span className="nowrap overflow-hidden text-ellipsis normal-case" style={styles}>
        {children}
      </span>
    </div>
  );
}

export default ErrorMessage;
