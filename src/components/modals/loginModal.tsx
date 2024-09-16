import React from 'react';
import { placeholderNames } from './consts';
import InputForm from './inputForm';

export default function LoginModal() {
  return (
    <div className="login-modal">
      <p className="modal-title">Login form</p>
      <InputForm placeholderName={placeholderNames} isLogin={true} />
    </div>
  );
}
