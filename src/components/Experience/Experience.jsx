import React from "react";
import "./experience.scss";
import { CircleWavyCheck } from "phosphor-react";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>TailwindCSS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>Sass / Scss</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className-="experience__details">
              <CircleWavyCheck
                className="experience__details-icon"
                size={24}
                weight="regular"
              />
              <div>
                <h4>C#</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
