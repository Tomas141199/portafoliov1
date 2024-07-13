import { FC } from "react";
import { NavigationMovil } from "../";
import Drawer from 'react-modern-drawer'
import "react-modern-drawer/dist/index.css";

interface Props {
  isOpen: boolean;
  toggleDrawer: any;
}

const DrawerMovil: FC<Props> = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      style={{ backgroundColor: "#0b1c36", zIndex: 100 }}
      size={290}
      className="py-6 px-4 text-base-100"
      zIndex={99}
      duration={900}
    >
      <NavigationMovil isOpen={isOpen} />
    </Drawer>
  );
};

export default DrawerMovil;
