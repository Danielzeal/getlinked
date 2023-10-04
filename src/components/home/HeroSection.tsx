"use client";

import Image from "next/image";
import Btn from "../Btn";
import Container from "../Container";
import Star from "../Star";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className='w-full h-screen pt-[110px] overflow-hidden border-y border-border-color'>
      <Container>
        <Star className='left-[200px] top-10 text-3xl animate-star-top z-10 text-tertiary' />
        <Star className='bottom-[100px] right-[50px] text-4xl animate-star z-10 text-tertiary' />
        <Star className='w-full flex items-center justify-center h-full text-2xl animate-star-left z-10' />
        <Star className='bottom-[100px] left-12 animate-star-top text-2xl z-10 text-tertiary' />
        <Star className='right-[300px] top-16 text-3xl animate-star-down z-10' />
        <div className='absolute md:w-[200px] w-10 h-10 md:h-[200px] bg-purple-600 rounded-full left-[70px] blur-[100px] -z-10 text-white opacity-70' />
        <div className='absolute w-[300px] h-[300px] bg-purple-600 rounded-full right-[120px] top-32 blur-[100px] -z-[1] opacity-30' />
        <div className='z-50 h-[10%]'>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className='md:text-end xl:text-4xl lg:text-3xl md:text-2xl text-xs italic font-bold mb-8'
          >
            Igniting a Revolution in{" "}
            <span className='w-full h-full relative'>
              HR Innovation
              <span className='absolute w-full h-[14px] left-0 md:top-12 top-4'>
                <Image
                  src={"/img/vec.png"}
                  alt=''
                  fill
                  sizes='(min-width: 1280px) 242px, (min-width: 1040px) 202px, (min-width: 780px) 161px, 81px'
                  className='object-contain'
                />
              </span>
            </span>
          </motion.p>
        </div>
        <div className='flex lg:flex-row flex-col gap-10 md:gap-4 h-[90%]'>
          <div className='lg:w-1/2 flex md:gap-12 gap-6 flex-col text-center lg:text-start h-full items-center justify-center'>
            <div>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className='md:text-6xl text-3xl font-bold relative font-lora md:leading-[150%]'
              >
                getlinked Tech Hackathon{" "}
                <span className='text-tertiary'>1.0</span>⛓️💥
                <span className='absolute md:-top-12 md:right-[33%] right-[20%] rotate-45 -top-6'>
                  💡
                </span>
              </motion.h1>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className='mt-4 mb-8'
              >
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </motion.p>
              <Btn text='register' />
            </div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className='flex lg:self-start gap-4 items-center justify-center'
            >
              <p>
                <span className='xl:text-5xl text-4xl'>00</span>H
              </p>
              <p>
                <span className='xl:text-5xl text-4xl'>00</span>M
              </p>
              <p>
                <span className='xl:text-5xl text-4xl'>00</span>S
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
            className='lg:w-1/2 h-full w-full relative'
          >
            <Image
              src={"/img/virtual-glasses.png"}
              alt=''
              fill
              priority={true}
              sizes='(min-width: 1540px) 632px, (min-width: 1360px) 592px, (min-width: 1040px) calc(40vw + 56px), calc(100vw - 80px)'
              className='object-contain'
            />
            <Image
              src={"/img/img02.png"}
              alt=''
              fill
              sizes='(min-width: 1540px) 632px, (min-width: 1360px) 592px, (min-width: 1040px) calc(40vw + 56px), calc(100vw - 80px)'
              className='object-contain animate-pulse'
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
