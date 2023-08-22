import { useState, useEffect } from "react";
import "./footer.css";
import { Data } from "@utils/constants";
import { SiLeetcode, SiLinkedin, SiInstagram } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { useCursor } from "@hooks/useCursor";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");
  const { setIsHovering } = useCursor();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <a
        href="#about"
        className="footer__logo"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Rohit Panchal
      </a>

      <ul
        className="permalinks"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <li>
          <a href="#about">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div
        className="footer__socials"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <a aria-label="Linkedin" href={Data.LINKEDIN}>
          <SiLinkedin />
        </a>
        <a aria-label="Twitter" href={Data.TWITTER}>
          <BsTwitter />
        </a>
        <a aria-label="Leetcode" href={Data.LEETCODE}>
          <SiLeetcode />
        </a>
        <a aria-label="Instagram" href={Data.INSTA}>
          <SiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small> All rights reserved &copy; {currentYear}</small> <br />
        <small>Created by Rohit Panchal</small>
      </div>
    </footer>
  );
};

export default Footer;
