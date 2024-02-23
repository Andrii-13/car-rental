// import { ModalWindow } from 'components/Modal/Modal';
import UniversalModal from 'components/Modal/Modal';
import React, { useState } from 'react';

export default function Favorites() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <UniversalModal isOpen={isOpen} onClose={closeModal}>
          <button closeModal={closeModal}>
            Lorem ipsum dolor 
          </button >
        </UniversalModal>
      </div>
      <button onClick={openModal}>Open Modal</button>
      Favorites
    </div>
  );
}
