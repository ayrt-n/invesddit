import React from 'react';

const variants = {
  primary: 'bg-primary-500 hover:bg-primary-400 active:bg-primary-300 text-white',
  inverted: 'border-[1px] text-primary-500 border-primary-500 hover:bg-blue-50 active:bg-blue-100',
  danger: 'bg-primary-500 hover:bg-red-500 active:bg-red-300 text-white',
}

function PillButton({ as, children, variant, additionalClasses, ...props }) {
  const Component = as || 'button';
  const buttonStyles = variant ? variants[variant] : variants['primary'];

  // Set default classes and add any additional classes specified as prop
  let className = `${buttonStyles} min-h-[32px] flex items-center justify-center font-noto text-[14px] leading-[17px] font-bold py-[4px] px-[16px] rounded-full w-full cursor-pointer inline-block text-center disabled:cursor-not-allowed disabled:grayscale disabled:text-gray-300 whitespace-nowrap ${additionalClasses}`

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

export default PillButton;
