import React from 'react';
import ReactDOM from 'react-dom';
interface ModalProps {
  showModal: Function;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ showModal, title }) => {
  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='modal__body'>
        <div className='modal__header'>
          <h3 className='modal__title'>{title}</h3>
          <p className='modal__close' onClick={() => showModal(false)}>
            &times;
          </p>
        </div>
      </div>
    </div>,
    document.querySelector('#portal')!
  );
};

export default Modal;
