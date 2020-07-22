import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Alert from '.';
import { IAlert } from 'interfaces';
import { IState } from 'interfaces/state';
import { selectAlerts } from 'store/selectors/alerts';

interface IProps {
  alerts: IAlert[];
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
  alerts: selectAlerts(state),
});

export default connect(mapStateToProps, {})(AlertContainer);
