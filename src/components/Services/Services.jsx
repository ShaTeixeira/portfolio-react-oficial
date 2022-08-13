import React from "react";
import "./services.scss";
import { Check } from "phosphor-react";

function Services() {
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
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
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
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT OF END */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <Check className="service__list-icon" size={18} weight="bold" />
              <p>Lorem ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>
        {/* Content Creation OF END */}
      </div>
    </section>
  );
}

export default Services;
