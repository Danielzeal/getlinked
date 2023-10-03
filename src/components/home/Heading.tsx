"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  colorText: string;
};

const Heading = ({ text, colorText }: Props) => {
  return (
    <motion.h1
      className='md:text-3xl font-bold text-xl mb-6'
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {text} <br /> <span className='text-tertiary'>{colorText}</span>
    </motion.h1>
  );
};

export default Heading;
