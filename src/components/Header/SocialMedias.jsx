import {
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
  BehanceLogo,
} from "phosphor-react";

export const SocialMedias = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/shayane-teixeira-cruz/"
        target="_blank"
      >
        <LinkedinLogo size={26} weight="regular" />
      </a>
      <a href="https://github.com/ShaTeixeira" target="_blank">
        <GithubLogo size={26} weight="regular" />
      </a>
      <a href="https://www.behance.net/shayaneteixeira" target="_blank">
        <BehanceLogo size={26} weight="regular" />
      </a>
{/*       <a href="https://www.instagram.com/byte__dev/" target="_blank">
        <InstagramLogo size={26} weight="regular" />
      </a> */}
    </div>
  );
}

