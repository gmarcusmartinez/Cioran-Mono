import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { IAlert } from 'interfaces';
import Alert from '.';

interface IState {
  alerts: IAlert[] | [];
}
interface IProps {
  alerts?: IAlert[];
}
const AlertContainer: React.FC<IProps> = ({ alerts }) => {
  const [animate, setAnimate] = React.useState(false);

  let list = null;
  if (alerts) {
    const props = { setAnimate, animate };
    list = alerts.map((a: IAlert) => <Alert alert={a} key={a.id} {...props} />);
  }

  return ReactDOM.createPortal(
    <div className='alert-container'>{list}</div>,
    document.querySelector('#alert')!
  );
};

const mapStateToProps = (state: IState) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps, {})(AlertContainer);
