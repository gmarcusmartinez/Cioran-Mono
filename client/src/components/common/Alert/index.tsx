import React from 'react';
import { IAlert } from 'interfaces';

interface IProps {
  alert: IAlert;
  setAnimate: Function;
  animate: boolean;
}

const Alert: React.FC<IProps> = ({ alert, animate, setAnimate }) => {
  React.useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  });
  return (
    <div className={`alert ${alert.type} ${animate ? 'animate' : ''}`}>
      {alert.message}
    </div>
  );
};

export default Alert;
