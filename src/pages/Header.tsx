import React from "react";
import ch04937 from "../assets/ch04937.svg";
import Socials from "../components/Socials";

const Header: React.FC = () => (
  <header className="header">
    <div className="header__logo">
      <img src={ch04937} alt="ch04937 logo" />
      <h1 className="header__title">Show Finder</h1>
    </div>
    <div>
      <Socials />
    </div>
  </header>
);

export default Header;
