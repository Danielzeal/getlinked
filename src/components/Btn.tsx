"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const Btn = ({ text, className, onClick }: Props) => {
  return (
    <motion.button
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      onClick={onClick}
      className={`capitalize md:w-[172px] md:h-[53px] w-[125px] h-[46px] bg-button-gradient rounded hover:bg-none hover:border hover:border-tertiary transition-color duration-200 ease ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Btn;
