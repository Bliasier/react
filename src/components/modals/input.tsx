import React from 'react';

export default function Input(props) {
  const { value, onChange, placeholder, className, name } = props;
  return (
    <>
      <input
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
