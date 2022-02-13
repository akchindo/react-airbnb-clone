import React from "react";
import navLogo from "../Images/airbnb-logo.png";
import "../../styles/styles.css";


function Navbar() {
  return (
    <nav>
      <img className="navImg" src={navLogo} alt='' />
    </nav>
  );
}

export default Navbar;
