import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "./Logo";

const Header = (props) => {
  return (
    <Link to="/">
      <div className="app__header">
        <Logo />
        <h1>PHONE CATALOG</h1>
      </div>
    </Link>
  );
};

export default Header;
