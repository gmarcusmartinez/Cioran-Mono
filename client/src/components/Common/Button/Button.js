import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, theme }) => {
  return (
    <button data-test="btn" className={`btn btn-${theme}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string
};
export default Button;
