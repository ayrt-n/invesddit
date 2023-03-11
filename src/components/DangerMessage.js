import React from 'react';

function DangerMessage({ header, message, children }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center my-[16px] relative">
        <div className="text-red-500">
          <svg className="w-[72px] mb-[4px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>alert-circle-outline</title>
            <path fill="currentColor" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
          </svg>
        </div>
        <div className="text-[24px] font-medium">
          {header}
        </div>
      </div>
      <div className="text-[18px] text-center mb-[16px]">
        {message}
      </div>
      {children}
    </div>
  );
}

export default DangerMessage;
