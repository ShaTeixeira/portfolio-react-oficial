import React from "react";
import "./footer.scss";
import iconByteDev from "../../assets/image/icons/iconbytedev.svg";
import {
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
  BehanceLogo,
  Copyright,
} from "phosphor-react";

function Footer() {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <img src={iconByteDev} alt="icone do meu portfolio" />
      </a>
      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/shayane-teixeira-cruz/"
          target="_blank"
        >
          <LinkedinLogo size={24} weight="regular" />
        </a>
        <a href="https://github.com/ShaTeixeira" target="_blank">
          <GithubLogo size={24} weight="regular" />
        </a>
        <a href="https://www.behance.net/shayaneteixeira" target="_blank">
          <BehanceLogo size={24} weight="regular" />
        </a>
        <a href="https://www.instagram.com/byte__dev/" target="_blank">
          <InstagramLogo size={24} weight="regular" />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          <Copyright size={16} weight="regular" />
          Shayane Teixeira. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
