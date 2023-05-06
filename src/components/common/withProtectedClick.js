import React, { useContext } from 'react';
import ModalContext from '../../contexts/modal/ModalContext';
import AuthenticationModal from '../AuthenticationModal';
import AuthContext from '../../contexts/authentication/AuthContext';

// Higher order component used for dealing with clickable elements that require auth
// If not logged in, component will open signup/login modal instead of original click purpose
export default function withProtectedClick(WrappedComponent) {
  return ({ callToAction, ...props }) => {
    const { openModal, closeModal } = useContext(ModalContext);
    const auth = useContext(AuthContext);
    
    // If logged in, call regular onClick handler, otherwise open signup/login modal
    const handleAction = (event) => {
      if (auth.isAuthenticated) {
        if (props.onClick) return props.onClick(event);
      } else {
        event.preventDefault();
        openModal(<AuthenticationModal callToAction={callToAction} closeModal={closeModal} />)
      }

      event.stopPropagation();
    };

    return (
      <WrappedComponent {...props} onClick={handleAction} />
    );
  }
}
