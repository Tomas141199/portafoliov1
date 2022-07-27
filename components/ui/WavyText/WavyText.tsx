import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { list, item, spanVariants } from "./WavyText.variants";
import { Eye } from "../Eye";

interface Props {
  content: string;
  className?: string;
}

const WavyText: FC<Props> = ({ content, className }) => {
  return (
    <div>
      <motion.h1
        className="relative"
        variants={list}
        initial="hidden"
        animate="visible"
        key={uuidv4()}
      >
        {content.split("").map((letter) => (
          <motion.span key={uuidv4()} variants={item}>
            <motion.span
              variants={spanVariants}
              initial="visible"
              whileHover="hover"
              className={className}
            >
              {letter === " " ? (
                <span className="m-1" />
              ) : letter === "o" ? (
                <Eye />
              ) : (
                letter
              )}
            </motion.span>
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default WavyText;
