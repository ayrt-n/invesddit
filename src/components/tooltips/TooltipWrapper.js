import React from 'react';

function TooltipWrapper({ children }) {
  return (
    <div className="absolute top-full bg-canvas-light rounded-[4px] shadow-[0_1px_3px_0px_rgba(0,0,0,0.2)] max-w-[380px] min-w-[240px] z-50 cursor-auto">
      {children}
    </div>
  );
}

export default TooltipWrapper;
