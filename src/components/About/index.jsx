import me from "../../assets/image/perfil/me.jpeg";
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
            <img src={me} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <Medal size={26} className="about__icon" />
              <h5>Experience</h5>
              <small>5+ years</small>
            </article>
            <article className="about__card">
              <Users size={26} className="about__icon" />
              <h5>Clients</h5>
              <small>4+ national</small>
            </article>
            <article className="about__card">
              <FolderStar size={26} className="about__icon" />
              <h5>Projects</h5>
              <small>50+ completed</small>
            </article>
          </div>

          <p>
            Hey! I'm Shay, I'm 22 years old, and I'm from Espírito Santo. I
            graduated as a Computer Technician for the Internet from IFES
            (Campus Serra), and now I'm pursuing a Bachelor's degree in Internet
            Systems. I work as a FrontEnd and UI Design intern, always striving
            to learn more. Since 2020, I’ve been studying daily and dedicating 4
            hours a day to my studies (on top of my college work, of course). I
            love staying up to date with new trends and always giving my best in
            everything I do! I'm also working on a new project called Puzzle
            Studio. If you want to see more and collaborate on amazing projects
            with us, just check out our Instagram <small><a href="https://www.instagram.com/puzzle.studio88/">@puzzle.studio88!</a></small>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
