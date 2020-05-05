import React from 'react';
import ReactDOM from 'react-dom';
interface ModalProps {
  closeModal: Function;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='modal__content'>
        <div className='modal__title'>
          Create Project
          <p className='popup__close' onClick={() => closeModal(false)}>
            &times;
          </p>
        </div>
      </div>
    </div>,
    document.querySelector('#portal')!
  );
};

export default Modal;
