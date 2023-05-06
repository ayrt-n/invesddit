import React from 'react';
import classNames from 'classnames';

function SkeletonLoader({ className }) {
  const defaultClasses = "animate-pulse bg-slate-100";
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <div className={mergedClasses} />
  );
}

export default SkeletonLoader;
