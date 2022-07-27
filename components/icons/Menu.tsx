import { FC } from "react";

interface Props {
  props?: any;
}

const Menu: FC<Props> = (props) => {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M10 18h10"
      />
    </svg>
  );
};

export default Menu;
