import { FC, useState } from "react";
import { useScrollDirection } from "use-scroll-direction";
import { DesktopNav, DrawerMovil, MenuToggle } from "../../nav";
import { Logo } from "../../ui";
import { HeaderContainer } from "./Header.styled";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollDirection } = useScrollDirection({ timeToReset: 10000 });

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <HeaderContainer
        className={`${
          scrollDirection.toString() === "DOWN"
            ? "opacity-0 -translate-y-10"
            : ""
        }`}
      >
        <Logo />
        <DesktopNav />
      </HeaderContainer>
      <DrawerMovil isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <MenuToggle isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;
