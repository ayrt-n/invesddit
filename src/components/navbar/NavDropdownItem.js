import React from 'react';
import { Link } from 'react-router-dom';

function NavDropdownItem({ as, children, withIcon, ...props }) {
  const Component = as || Link;

  return (
    <Component {...props} className="h-[40px] w-full cursor-pointer text-[14px] font-semibold leading-[18px] px-[20px] hover:bg-dropdown-item-hover flex items-center text-ellipsis">
      {withIcon ? null : <span className="pl-[32px]" />}
      {children}
    </Component>
  );
}

export default NavDropdownItem;
