import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/stocks" activeStyle={activeStyle}>
        Stocks
      </NavLink>
    </nav>
  );
};

export default Header;
