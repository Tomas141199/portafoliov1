import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LinksContainer, LinkSection } from "./DesktopNav.styled";
import { links } from "../../../mocks";
import { itemVariants, sideVariants } from "./DesktopNav.framer";

const DesktopNav: FC = () => {
  return (
    <AnimatePresence>
      <motion.nav
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
      >
        <LinksContainer>
          {links.map(({ name, to, id }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
            >
              <LinkSection activeClass="active" smooth spy to={to}>
                {name}
              </LinkSection>
            </motion.li>
          ))}
        </LinksContainer>
      </motion.nav>
    </AnimatePresence>
  );
};

export default DesktopNav;
