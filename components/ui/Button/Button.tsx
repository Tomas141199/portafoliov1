import { motion } from "framer-motion";
import styles from "../../../styles/Button.module.css";

const Button = () => {
  return (
    <motion.button
      className={`${styles.button} ${styles.btn}`}
      initial={{ opacity: 0, top: 50, left: -20 }}
      animate={{ opacity: 1, top: 0, left: 0 }}
      transition={{ duration: 2.3 }}
    >
      Contact me!
    </motion.button>
  );
};

export default Button;
