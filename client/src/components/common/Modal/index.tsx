import React from 'react';
import ReactDOM from 'react-dom';
interface ModalProps {
  showModal: Function;
  title: string;
  titleFontSize?: string;
  headerMargin?: string;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  title,
  children,
  titleFontSize,
  headerMargin,
}) => {
  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='modal__body'>
        <div
          className='modal__header'
          style={{
            margin: `${headerMargin ? headerMargin : '2rem 2rem 2rem 4rem'}`,
          }}
        >
          <h3
            className='modal__title'
            style={{ fontSize: `${titleFontSize ? titleFontSize : '2.1rem'}` }}
          >
            {title}
          </h3>
          <p className='modal__close' onClick={() => showModal(false)}>
            &times;
          </p>
        </div>
        <div className='modal__content'>{children}</div>
      </div>
    </div>,
    document.querySelector('#portal')!
  );
};

export default Modal;
