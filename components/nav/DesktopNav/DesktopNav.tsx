import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LinksContainer } from "./DesktopNav.styled";
import { links } from "../../../mocks";
import { itemVariants, sideVariants } from "./DesktopNav.framer";
import { Link } from "react-scroll";

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
              <Link activeClass="active" smooth spy to={to}
                className="cursor-pointer hover:underline hover:decoration-primary-aqua select-none"
              >
                {name}
              </Link>
            </motion.li>
          ))}
          <motion.li
            key={141199}
            whileHover={{ scale: 1.1 }}
            variants={itemVariants}
          >
            <a
              href="https://res.cloudinary.com/my-account-145/image/upload/v1664906404/Tomas_Hernandez_Garcia_gk1ctp.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-tiny px-2 py-1 border-2  border-primary-green rounded text-primary-green active:border-primary-aqua active:text-primary-aqua"
            >
              Resume
            </a>
          </motion.li>
        </LinksContainer>
      </motion.nav>
    </AnimatePresence>
  );
};

export default DesktopNav;
