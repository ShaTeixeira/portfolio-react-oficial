import "./header.scss";
import { CTA } from "./CTA";
import womanWithCoffee from "../../assets/image/icons/woman-with-coffee.svg";
import { SocialMedias } from "./SocialMedias";

export const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hey I'm</h5>
        <h1>Shayane</h1>
        <h5 className="text-light">FrontEnd Developer and UI Design</h5>
        <CTA />
        <SocialMedias />

        <div className="me">
          <img src={womanWithCoffee} alt="woman witch coffee" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}