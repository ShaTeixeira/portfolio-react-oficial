import React from "react";
import womanWithDog from "../../assets/image/icons/woman-with-dog.svg";
import { Medal, Users, FolderStar } from "phosphor-react";
import "./about.scss";

const About = () => {
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
              <small>2+ Years Studying</small>
            </article>
            <article className="about__card">
              <Users size={26} className="about__icon" />
              <h5>Clients</h5>
              <small>2+ National</small>
            </article>
            <article className="about__card">
              <FolderStar size={26} className="about__icon" />
              <h5>Projects</h5>
              <small>35+ Completed</small>
            </article>
          </div>

          <p>
            Hello. I'm 20 years old. I live in Espirito Santo - Serra. Graduated
            in Technical Informatics for Internet by the Federal Institute of
            Espirito Santo - (IFES CAMPUS, SERRA). Currently, I'm studying
            Bachelor of Technology in Internet Systems by the Federal Institute
            of Espírito Santo. Looking for my first professional experience in a
            technology company. I started studying how Dev Front-End in early
            2020. I've usually been dedicating myself approximately 8 hours per
            day of study.
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
