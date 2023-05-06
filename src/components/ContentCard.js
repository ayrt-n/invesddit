import React from 'react';
import classNames from 'classnames';

function ContentCard({ className, children }) {
  const defaultClasses = "rounded-[4px] border-[1px] border-post-border bg-canvas-light overflow-hidden";
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <div className={mergedClasses}>
      {children}
    </div>
  );
}

export default ContentCard;