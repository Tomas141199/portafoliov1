import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import { links } from "../../mocks";

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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMovil;
