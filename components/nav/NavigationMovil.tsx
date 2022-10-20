import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import { links } from "../../mocks";
import { GithubIC, InstagramIC, Linkedin } from "../icons";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

interface NavigationMovil {
  isOpen: boolean;
}

const NavigationMovil: FC<NavigationMovil> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={sideVariants}
          className="mt-16 flex flex-col justify-center items-center gap-3"
        >
          {links.map(({ name, to, id }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
            >
              <Link
                activeClass="active"
                className="cursor-pointer"
                smooth
                spy
                to={to}
              >
                {name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            key={9441233}
            whileHover={{ scale: 1.1 }}
            variants={itemVariants}
          >
            <a
              href="https://github.com/Tomas141199"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIC />
            </a>
          </motion.div>
          <motion.div
            key={995433}
            whileHover={{ scale: 1.1 }}
            variants={itemVariants}
          >
            <a
              href="https://www.linkedin.com/in/tomas-hernandez-garcia-6714541a1/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </motion.div>
          <motion.div
            key={992312}
            whileHover={{ scale: 1.1 }}
            variants={itemVariants}
          >
            <a
              href="https://www.instagram.com/tomas14.hg/?hl=es-la"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIC />
            </a>
          </motion.div>
          <motion.div
            key={99333}
            whileHover={{ scale: 1.1 }}
            variants={itemVariants}
          >
            <a
              href="https://res.cloudinary.com/my-account-145/image/upload/v1664906404/Tomas_Hernandez_Garcia_gk1ctp.pdf"
              target="_blank"
              rel="noreferrer"
              className=" mt-4 text-tiny px-3 py-2 border-2  border-primary-green rounded text-primary-green active:border-primary-aqua active:text-primary-aqua"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMovil;
