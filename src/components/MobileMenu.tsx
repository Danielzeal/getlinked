"use client";

import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Btn from "./Btn";
import { useRouter } from "next/navigation";

const AnimateNavLink = ({
  delay,
  text,
  href,
  onClick,
}: {
  delay: number;
  text: string;
  href: string;
  onClick: () => void;
}) => {
  return (
    <motion.a
      initial={{ x: 50, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { delay: delay },
      }}
      href={href}
      onClick={onClick}
    >
      {text}
    </motion.a>
  );
};

type Props = {
  menu: boolean;
  handleMenu: () => void;
};

const MobileMenu = ({ menu, handleMenu }: Props) => {
  const router = useRouter();
  return (
    <div
      className={`absolute top-0 w-full h-screen bg-overlay bottom-0 z-[50] flex flex-col items-end p-6 ${
        menu ? "left-0" : "left-[100vw]"
      } transition-all duration-200 ease-in-out`}
    >
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { delay: 0.5 },
        }}
        className='w-[90%] bg-secondary h-[400px] relative text-black p-6 flex gap-6 justify-center rounded-md shadow-2xl flex-col'
      >
        <div
          className='absolute right-6 top-6 text-white text-3xl'
          onClick={handleMenu}
        >
          <AiOutlineCloseCircle />
        </div>
        <nav className='flex flex-col gap-4 text-lg font-bold uppercase text-white'>
          <AnimateNavLink
            text='Timeline'
            delay={1}
            href='#timeline'
            onClick={handleMenu}
          />
          <AnimateNavLink
            text='Overview'
            delay={1.2}
            href='#overview'
            onClick={handleMenu}
          />
          <AnimateNavLink
            text='FAQs'
            delay={1.4}
            href='#faqs'
            onClick={handleMenu}
          />
          <AnimateNavLink
            text='Contact'
            delay={1.6}
            href='/contact'
            onClick={handleMenu}
          />
        </nav>
        <Btn
          text='REGISTER'
          className='!text-white w-full'
          onClick={() => {
            router.push("/register");
            handleMenu();
          }}
        />
      </motion.div>
    </div>
  );
};

export default MobileMenu;
