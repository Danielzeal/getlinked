"use client";

import Link from "next/link";
import Container from "./Container";
import MenuIcon from "./MenuIcon";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionLink = motion(Link);

const AnimateNavLink = ({
  delay,
  text,
  href,
}: {
  delay: number;
  text: string;
  href: string;
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
    >
      {text}
    </motion.a>
  );
};

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    console.log("clicked");

    setMenu((prev) => !prev);
  };

  return (
    <>
      <header className='h-[90px] w-full fixed top-0 z-50 bg-primary'>
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
            className='bg-white w-[90%] h-[400px] relative text-black p-6 flex items-center rounded-md shadow-2xl'
          >
            <div
              className='absolute right-6 top-6 text-2xl'
              onClick={handleMenu}
            >
              X
            </div>
            <nav className='flex flex-col gap-3 text-lg font-bold'>
              <AnimateNavLink text='Timeline' delay={1} href='#timeline' />
              <AnimateNavLink text='Overview' delay={1.2} href='#overview' />
              <AnimateNavLink text='FAQs' delay={1.4} href='#faqs' />
              <AnimateNavLink text='Contact' delay={1.6} href='/contact' />
            </nav>
          </motion.div>
        </div>
        <Container>
          <div className='flex justify-between items-center h-full'>
            <h1 className='lg:text-4xl md:text-2xl font-bold font-display group hover:text-secondary transition-colors duration-200 ease-linear'>
              <Link href={"/"}>
                get
                <span className='text-secondary group-hover:text-white transition-colors duration-200 ease-linear'>
                  linked
                </span>
              </Link>
            </h1>
            <div className='md:flex lg:gap-24 md:gap-12 items-center justify-center h-full hidden'>
              <nav className='flex lg:gap-10 items-center gap-6 justify-center h-full'>
                <a href='#timeline'>Timeline</a>
                <a href='#overview'>Overview</a>
                <a href='#faqs'>FAQs</a>
                <Link href={"/contact"}>Contact</Link>
              </nav>
              <Link
                href={"/register"}
                className='w-[172px] h-[53px] flex items-center justify-center bg-button-gradient rounded hover:bg-none'
              >
                Register
              </Link>
            </div>
            <MenuIcon onClick={handleMenu} />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
