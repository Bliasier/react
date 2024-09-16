import React from 'react';

export default function ModalButton({ onClick, buttonName }) {
  return (
    <button className="modal-button" onClick={onClick} type="submit">
      <p>{buttonName}</p>
    </button>
  );
}
