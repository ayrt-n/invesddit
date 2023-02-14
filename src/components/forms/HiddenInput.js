import React from 'react';

function HiddenInput({ community, ...props }) {
  return (
    <input {...props} type="hidden" />
  );
}

export default HiddenInput;
