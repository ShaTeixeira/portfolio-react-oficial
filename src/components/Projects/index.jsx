import "./projects.scss";

import Blog from "../../assets/image/projects/Blog.png";
import CryptoNFT from "../../assets/image/projects/CryptoNFT.png";
import GE21GT from "../../assets/image/projects/GE21GT.png";
import eGames from "../../assets/image/projects/eGames.png";
/* 
import feedgetProject from "../../assets/image/projects/feedget.jpeg";
import newsletterProject from "../../assets/image/projects/newsletter.png";
import walletProject from "../../assets/image/projects/wallet.png"; 
import feedgetProject from "../../assets/image/projects/feedget.jpeg";
import newsletterProject from "../../assets/image/projects/newsletter.png";
import walletProject from "../../assets/image/projects/wallet.png"; 
*/

const portfolio = [
  {
    id: 1,
    image: eGames,
    title: "eGames Figma",
    github: "https://crypto-nft-dev.vercel.app/",
    demo: "https://crypto-nft-dev.vercel.app/",
  },
  {
    id: 2,
    image: CryptoNFT,
    title: "Crypto Figma",
    github: "https://crypto-nft-dev.vercel.app/",
    demo: "https://www.figma.com/proto/TqZS0ZCuA0Fn2rs9fIZLrs/Crypto%C2%AE---UI-Kit-V1.5-(Community)?page-id=101%3A433&type=design&node-id=105-440&viewport=409%2C165%2C0.21&t=4uxCQV55tpI5dKvo-1&scaling=scale-down&starting-point-node-id=105%3A440&mode=design",
  },
  {
    id: 3,
    image: Blog,
    title: "Blog",
    github: "https://github.com/ShaTeixeira/challenge-01-blog",
    demo: "https://challenge-01-blog-l26r.vercel.app/",
  },
  {
    id: 4,
    image: Blog,
    title: "Blog",
    github: "https://github.com/ShaTeixeira/challenge-01-blog",
    demo: "https://challenge-01-blog-l26r.vercel.app/",
  },
  {
    id: 5,
    image: CryptoNFT,
    title: "Crypto",
    demo: "https://crypto-nft-dev.vercel.app/",
  },
  {
    id: 6,
    image: GE21GT,
    title: "GE21 Geotecnologias",
    demo: "https://ge21gt-website-dev.vercel.app/",
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