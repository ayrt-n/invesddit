import React, { useState } from 'react';

function HoverableTooltip({ tooltipComponent, children }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const [delayHandler, setDelayHandler] = useState(null)

  // Event handler for showing tooltip on hover with a 500ms delay
  const handleMouseEnter = () => {
    // Avoid resetting delay handler if already set
    if (delayHandler) { return }

    setDelayHandler(setTimeout(() => {
      setTooltipOpen(true)
    }, 500));
  };

  // Event handler for removing the tooltip after hovering
  // If tooltip has not been set (as a result of delay) clear the timeout
  const handleMouseLeave = (callback) => {
    clearTimeout(delayHandler);
    setDelayHandler(null);
    setTooltipOpen(false);
  }

  return (
    <div className="relative" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {tooltipOpen && tooltipComponent}
    </div>
  );
}

export default HoverableTooltip;
