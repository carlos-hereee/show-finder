import React from "react";
import Socials from "../components/Socials";
import ch04937 from "../assets/ch04937.svg";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <img src={ch04937} alt="ch04937 logo" />
      <p>© 2020 - Show Finder</p>
    </div>
    <div>
      <Socials />
    </div>
  </footer>
);
export default Footer;
