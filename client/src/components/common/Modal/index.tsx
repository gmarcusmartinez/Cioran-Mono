import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  showModal: Function;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ showModal, title, children }) => {
  return ReactDOM.createPortal(
    <div className='modal' onClick={() => showModal(false)}>
      <div className='modal__body' onClick={(e) => e.stopPropagation()}>
        <div className='modal__header'>
          <h3 className='modal__title'>{title}</h3>
          <p className='modal__close' onClick={() => showModal(false)}>
            &times;
          </p>
        </div>
        <div className='modal__content'>{children}</div>
      </div>
    </div>,
    document.querySelector('#modal')!
  );
};

export default Modal;
