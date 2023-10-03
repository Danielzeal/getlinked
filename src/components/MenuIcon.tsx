"use client";

import { motion } from "framer-motion";

const SpanDiv = ({ className }: { className: string }) => {
  return (
    <span className={`block bg-white h-[2px] rounded-md ${className}`}></span>
  );
};

type Prop = {
  onClick: () => void;
};
const MenuIcon = ({ onClick }: Prop) => {
  return (
    <motion.div
      className='w-[20px] h-[14px] flex flex-col justify-between md:hidden group'
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
    >
      <SpanDiv className='w-[50%]'></SpanDiv>
      <SpanDiv className='w-full'></SpanDiv>
      <SpanDiv className='w-[50%] block self-end'></SpanDiv>
    </motion.div>
  );
};

export default MenuIcon;
