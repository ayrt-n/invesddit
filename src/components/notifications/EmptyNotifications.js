import React from 'react';

function EmptyNotifications() {
  return (
    <div className="p-[20px] pb-[48px] flex flex-col items-center justify-center">
      <h1 className="text-[18px] font-medium leading-[22px] mb-[8px]">
        You don't have any activity yet
      </h1>
      <p className="text-[14px] leading-[18px] align-center text-meta-text mx-[40px]">
        That's ok, maybe you just need the right inspiration. Try joining in the conversation across any topics that peak your interest!
      </p>
    </div>
  );
}

export default EmptyNotifications;
