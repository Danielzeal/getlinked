"use client";

import Link from "next/link";
import Container from "./Container";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(false);
  };

  return (
    <>
      <header className='h-[90px] w-full fixed top-0 z-[100] bg-primary'>
        <MobileMenu handleMenu={handleMenu} menu={menu} />
        <Container>
          <div className='flex justify-between items-center h-full'>
            <h1 className='lg:text-4xl md:text-2xl font-bold font-lora group hover:text-secondary transition-colors duration-200 ease-linear'>
              <Link href={"/"}>
                get
                <span className='text-secondary group-hover:text-white transition-colors duration-200 ease-linear'>
                  linked
                </span>
              </Link>
            </h1>
            <div className='md:flex lg:gap-24 md:gap-12 items-center justify-center h-full hidden'>
              <nav className='flex lg:gap-10 items-center gap-6 justify-center h-full font-medium'>
                <a href='#timeline'>Timeline</a>
                <a href='#overview'>Overview</a>
                <a href='#faqs'>FAQs</a>
                <Link href={"/contact"}>Contact</Link>
              </nav>
              <Link
                href={"/register"}
                className='w-[172px] h-[53px] flex items-center justify-center bg-button-gradient rounded hover:bg-none hover:border hover:border-tertiary transition-color duration-200 ease'
              >
                Register
              </Link>
            </div>
            <MenuIcon onClick={() => setMenu(true)} />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
