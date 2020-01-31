import React from "react";
import Button from "../Common/Button/Button";
const Header = () => {
  return (
    <header data-test="app-header">
      <h1 data-test="app-title"> Cioran </h1>
      <div data-test="auth-btns" className="auth-btns">
        <Button text="Login" theme="light" />
        <Button text="Signup" theme="primary" />
      </div>
    </header>
  );
};

export default Header;
