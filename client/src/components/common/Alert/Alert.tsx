import React from 'react';
import { connect } from 'react-redux';
import { IAlert } from '../../../store/actions';

interface AlertProps {
  alerts?: IAlert[];
}

const Alert: React.FC<AlertProps> = ({ alerts }) => {
  const list = alerts
    ? alerts.map((a) => (
        <div key={a.id} className='alert'>
          {a.msg}
        </div>
      ))
    : null;
  return <div>{list}</div>;
};

const mapStateToProps = (state: any) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps, {})(Alert);
