import React from 'react';

const variants = {
  primary: 'bg-primary-500 hover:bg-primary-400 active:bg-primary-300 text-white',
  inverted: 'border-[1px] text-primary-500 border-primary-500 hover:bg-blue-50 active:bg-blue-100'
}

function PillButton({ as, children, variant, additionalClasses, ...props }) {
  const Component = as || 'button';
  const buttonStyles = variant ? variants[variant] : variants['primary'];

  // Set default classes and add any additional classes specified as prop
  let className = `${buttonStyles} font-bold py-[4px] px-[16px] rounded-full w-full cursor-pointer inline-block text-center`
  if (additionalClasses) {
    className = className + ' ' + additionalClasses
  }

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

export default PillButton;
