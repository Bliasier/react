import React from 'react';
import LoginModal from './loginModal';
import SignUpModal from './signUpModal';

function checkRegistration() {
  const userData = localStorage.getItem('userData');
  if (userData !== '') {
    return true;
  }
}

export function ModalHandler() {
  const isSignIn = checkRegistration();

  if (isSignIn) {
    return (
      <>
        <LoginModal />
      </>
    );
  } else
    return (
      <>
        <SignUpModal />
      </>
    );
}
