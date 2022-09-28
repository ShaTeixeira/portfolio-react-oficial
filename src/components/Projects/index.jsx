import coffeeProject from "../../assets/image/projects/coffee.jpeg";
import calcImcProject from "../../assets/image/projects/calcimc.png";
import devMemoryProject from "../../assets/image/projects/devmemory.jpeg";
import feedgetProject from "../../assets/image/projects/feedget.jpeg";
import newsletterProject from "../../assets/image/projects/newsletter.png";
import walletProject from "../../assets/image/projects/wallet.png";

import "./projects.scss";

const portfolio = [
  {
    id: 1,
    image: coffeeProject,
    title: "Coffee",
    github: "https://github.com/ShaTeixeira/rocketcoffee-discover-challenge",
    demo: "https://shateixeira.github.io/rocketcoffee-discover-challenge/",
  },
  {
    id: 2,
    image: calcImcProject,
    title: "Calculator IMC",
    github: "https://github.com/ShaTeixeira/calc-imc",
    demo: "https://calc-imc-two.vercel.app/",
  },
  {
    id: 3,
    image: devMemoryProject,
    title: "Memory Game",
    github: "https://github.com/ShaTeixeira/memoria-react",
    demo: "https://memoria-reactjs-st.vercel.app/",
  },
  {
    id: 4,
    image: feedgetProject,
    title: "Feedget",
    github: "https://github.com/ShaTeixeira/nlw-return-feedget",
    demo: "https://nlw-return-feedget-st.vercel.app/",
  },
  {
    id: 5,
    image: newsletterProject,
    title: "newsletter",
    demo: "https://www.behance.net/gallery/150330443/NEWSLETTER",
  },
  {
    id: 6,
    image: walletProject,
    title: "wallet",
    demo: "https://www.behance.net/gallery/150190965/Wallet-StBank",
  },
];

export const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {portfolio.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}