import React, { useContext } from 'react';
import { isLoggedIn } from '../../services/authService';
import ModalContext from '../../contexts/modal/ModalContext';
import OnboardModal from '../OnboardModal';

// Higher order component used for dealing with clickable elements that require auth
// If not logged in, component will open signup/login modal instead of original click purpose
export default function withProtectedClick(WrappedComponent) {
  return ({ callToAction, ...props }) => {
    const { openModal } = useContext(ModalContext);
    
    // If logged in, call regular onClick handler
    // Else, open signup/login modal
    const handleAction = (event) => {
      if (isLoggedIn()) {
        props.onClick()
      } else {
        openModal(<OnboardModal callToAction={callToAction} />)
      }

      // Prevent click from propogating higher
      // Helpful in dealing with clicking on post buttons
      event.stopPropagation();
    };

    return (
      <WrappedComponent {...props} onClick={handleAction} />
    );
  }
}
