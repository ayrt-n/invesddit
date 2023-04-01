import React from 'react';

function ErrorMessage({ styles, containerStyles, children }) {
  return (
    <div className="text-[12px] leading-[16px] text-[red] pt-[4px] pl-[16px]" style={containerStyles}>
      <span className="nowrap overflow-hidden text-ellipsis normal-case" style={styles}>
        {children}
      </span>
    </div>
  );
}

export default ErrorMessage;
