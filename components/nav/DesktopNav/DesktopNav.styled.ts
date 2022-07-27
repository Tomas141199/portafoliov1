import tw from "tailwind-styled-components";
import { Link } from "react-scroll";

export const LinksContainer = tw.ul`
    hidden
    md:flex
    justify-between
    items-center
    gap-4
    text-sm
    capitalize
`;

export const LinkSection = tw(Link)`
  cursor-pointer
  hover:underline
  hover:decoration-primary-aqua
  select-none
`;