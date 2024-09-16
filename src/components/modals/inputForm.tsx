import React, { useState } from 'react';
import Input from './input';
import ModalButton from './modalButton';

function userRegistration(name, password) {
  localStorage.setItem(name, password);
}

const credentials = {
  email: 'email',
  password: 'password',
};

export default function InputForm(props) {
  const [userInput, setUserInput] = useState(credentials);

  const { placeholderName, isLogin } = props;
  const { userName, password, email } = placeholderName;

  const handleClick = (event) => {
    event.preventDefault();
    console.log('UserName:', userInput.email);
    console.log('Password:', userInput.password);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleClick}>
      <Input
        name={'email'}
        className={'modal-input'}
        onChange={handleChange}
        placeholder={email}
      />
      <Input
        name={'password'}
        className={'modal-input'}
        onChange={handleChange}
        placeholder={password}
      />
      <ModalButton
        onClick={handleClick}
        buttonName={isLogin ? 'LOGIN' : 'SUGN UP'}
      />
    </form>
  );
}
