import React from 'react';

const variants = {
  primary: 'bg-primary-500 hover:bg-primary-400 active:bg-primary-300 text-white',
  inverted: 'border-[1px] text-primary-500 border-primary-500 hover:bg-blue-50 active:bg-blue-100'
}

function PillButton({ as, children, variant, ...props }) {
  const Component = as || 'button';
  const buttonStyles = variant ? variants[variant] : variants['primary'];

  return (
    <Component className={`${buttonStyles} font-bold py-2 px-4 rounded-full w-full cursor-pointer inline-block text-center`} {...props}>
      {children}
    </Component>
  );
}

export default PillButton;
