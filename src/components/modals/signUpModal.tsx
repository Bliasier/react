import React from 'react';
import { placeholderNames } from './consts';
import InputForm from './inputForm';

export default function SignUpModal() {
  return (
    <div className="sign-up-modal">
      <p className="modal-title">Sign Up</p>
      <InputForm placeholderName={placeholderNames} isLogin={false} />
    </div>
  );
}
