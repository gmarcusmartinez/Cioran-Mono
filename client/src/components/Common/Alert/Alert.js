import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => {
    return (
      <div className={`alert-${alert.alertType}`} key={alert.id}>
        {alert.msg}
      </div>
    );
  });
Alert.propTypes = {};

const mapStateToProps = state => ({
  alerts: state.alert
});

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};
export default connect(mapStateToProps, {})(Alert);
