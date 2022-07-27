import { FC, useState } from "react";
import { DesktopNav, DrawerMovil, MenuToggle } from "../../nav";
import { Logo } from "../../ui";
import { HeaderContainer } from "./Header.styled";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <HeaderContainer>
        <Logo />
        <DesktopNav />
      </HeaderContainer>
      <DrawerMovil isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <MenuToggle isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;
