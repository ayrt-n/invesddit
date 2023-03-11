import React from 'react';

function SuccessMessage({ header, message, children }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center my-[16px] relative">
        <div className="text-inv-green-500">
          <svg className="w-[72px] mb-[4px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>check-decagram</title>
            <path fill="currentColor" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
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

export default SuccessMessage;
