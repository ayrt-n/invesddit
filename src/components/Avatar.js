import React from 'react';

function Avatar({ classNames, src, alt }) {
  return (
    <img className={`rounded-full object-cover align-middle overflow-hidden ${classNames}`} src={src} alt={alt} />
  );
}

export default Avatar;
