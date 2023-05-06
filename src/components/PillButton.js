import React from 'react';
import classNames from 'classnames';

const variants = {
  primary: 'bg-primary-500 hover:bg-primary-400 active:bg-primary-300 text-white',
  inverted: 'border-[1px] text-primary-500 border-primary-500 hover:bg-blue-50 active:bg-blue-100',
  danger: 'bg-primary-500 hover:bg-red-500 active:bg-red-300 text-white',
}

function PillButton({ as, children, variant, className, ...props }) {
  const Component = as || 'button';
  
  const defaultClasses = "min-h-[32px] flex items-center justify-center font-noto text-[14px] leading-[17px] font-bold py-[4px] px-[16px] rounded-full w-full cursor-pointer inline-block text-center disabled:cursor-not-allowed disabled:grayscale disabled:text-gray-300 whitespace-nowrap"
  const buttonVariantClasses = variant ? variants[variant] : variants['primary'];
  const mergedClasses = classNames(defaultClasses, buttonVariantClasses, className)

  return (
    <Component className={mergedClasses} {...props}>
      {children}
    </Component>
  );
}

export default PillButton;
