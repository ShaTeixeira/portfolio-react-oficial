import womanWithDog from "../../assets/image/icons/woman-with-dog.svg";
import { Medal, Users, FolderStar } from "phosphor-react";
import "./about.scss";

export const About = () => {
  return (
    <section id="about">
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
              <small>3+ years</small>
            </article>
            <article className="about__card">
              <Users size={26} className="about__icon" />
              <h5>Clients</h5>
              <small>2+ national</small>
            </article>
            <article className="about__card">
              <FolderStar size={26} className="about__icon" />
              <h5>Projects</h5>
              <small>35+ completed</small>
            </article>
          </div>

          <p>
          Hey. I'm 21 years old and I live in Espírito Santo. Graduate
          in Computer Technology for the Internet by the Federal Institute of
          Espírito Santo - (IFES CAMPUS SERRA). I am currently studying
          Bachelor in Internet Systems by the Federal Institute
          of the Espírito Santo. I currently work as an intern in development
          FrontEnd and UI Design. Studying since 2020. I dedicate 4 hours a day 
          to studying
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
