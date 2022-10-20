import React from "react";
import tw from "tailwind-styled-components";
import { GithubIC, InstagramIC, Linkedin } from "../icons";

const SocialMediaContainer = tw.div`
    hidden
    md:fixed 
    md:block
    left-4
    bottom-24
    text-blue-font
    before:absolute
    before:w-extratiny
    before:h-20
    before:bg-extralight-gray
    before:left-1/2
    before:-translate-x-1/2
    before:-bottom-24
`;

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <ul className="flex flex-col items-center gap-3">
        <li>
          <a
            href="https://github.com/Tomas141199"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIC />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tomas-hernandez-garcia-6714541a1/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/tomas14.hg/?hl=es-la"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIC />
          </a>
        </li>
      </ul>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
