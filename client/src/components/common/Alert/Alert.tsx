import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { IAlert } from '../../../store/actions';

interface IProps {
  a: any;
  setAnimate: Function;
  animate: boolean;
}
const Alert: React.FC<IProps> = ({ setAnimate, a, animate }) => {
  React.useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  });
  return (
    <div className={`alert ${a.type} ${animate ? 'animate' : ''}`}>
      {a.message}
    </div>
  );
};

interface AlertBoxProps {
  alerts?: IAlert[];
}
const AlertBox: React.FC<AlertBoxProps> = ({ alerts }) => {
  const [animate, setAnimate] = React.useState(false);

  const list = alerts
    ? alerts.map((a: IAlert) => (
        <Alert a={a} setAnimate={setAnimate} animate={animate} key={a.id} />
      ))
    : null;

  return ReactDOM.createPortal(
    <div className='alert-container'>{list}</div>,
    document.querySelector('#alert')!
  );
};

const mapStateToProps = (state: any) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps, {})(AlertBox);
