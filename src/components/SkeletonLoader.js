import React from 'react';

function SkeletonLoader({ classNames }) {
  return (
    <div className={`animate-pulse bg-slate-100 ${classNames}`} />
  );
}

export default SkeletonLoader;
