import "./services.scss";
import { Check } from "phosphor-react";

export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Great experience</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Functional environment</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Innovative design</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Best experience for the end customer</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Identify problems and opportunities</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Responsive design</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Landing Pages</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT OF END */}
      </div>
    </section>
  );
}