import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <p>© 2020 - Show Finder</p>
    </div>
    <div className="footer__links">
      <a
        href="https://www.linkedin.com/in/ch04937-carlos-hernandez/"
        className="footer__link"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.github.com/ch04937" className="footer__link">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://twitter.com/ch04937" className="footer__link">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  </footer>
);
export default Footer;
