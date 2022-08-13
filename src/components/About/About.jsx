import React from "react";
import womanWithDog from "../../assets/image/icons/woman-with-dog.svg";
import { Medal, Users, FolderStar } from "phosphor-react";
import "./about.scss";

const About = () => {
  return (
    <section id="about" /* className="" */>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={womanWithDog} alt="woman with dog" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <Medal size={26} className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <Users size={26} className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <FolderStar size={26} className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Olá. Tenho 20 anos. Moro no Espirito Santo - Serra. Formada em
            Tecnico em Informática p/ Internet pelo Instituto Federal do
            Espirito Santo - IFES - CAMPUS, SERRA. Atualmente, estou cursando
            Bacharelado em Sistemas de Informação pela Universidade FAESA. Estou
            procurando minha primeira experiência profissional em uma empresa de
            tecnologia. Comecei a estudar como Dev Front-End no inicio de 2020.
            Normalmente tenho me dedicando cerca de 8hrs por dia aos estudos.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
