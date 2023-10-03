"use client";

import Image from "next/image";
import Container from "../Container";
import Heading from "./Heading";
import Star from "../Star";

import { motion } from "framer-motion";

const GuideLine = () => {
  return (
    <section className='md:h-[500px] h-screen flex flex-col justify-between border-y border-border-color'>
      <Container>
        <Star className='left-[200px] top-10 text-3xl animate-star-top z-10 text-tertiary' />
        <Star className='bottom-[100px] right-[50px] text-4xl animate-star z-10 text-tertiary' />
        <Star className='w-full flex items-center justify-center h-full text-2xl animate-star-left z-10' />
        <Star className='bottom-[100px] left-12 animate-star-top text-2xl z-10 text-tertiary' />
        <Star className='right-[300px] top-16 text-3xl animate-star-down z-10' />
        <div className='absolute md:w-[300px] top-16 md:h-[300px] w-[200px] h-[200px] bg-purple-600 rounded-full left-[70px] blur-[100px] text-white opacity-80' />
        <div className='absolute md:w-[300px] w-10 h-10 md:h-[300px] bg-purple-600 rounded-full -bottom-20 right-[40px] blur-[100px] text-white opacity-80' />
        <div className='flex flex-col gap-4 md:flex-row h-full items-center justify-center py-4 md:py-8'>
          <div className='md:w-2/5 w-full relative text-center md:text-start order-2 md:order-1'>
            <Heading text='Rules and' colorText='Guildlines' />
            <motion.p
              className='md:text-sm text-xs text-justify'
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about.
            </motion.p>
          </div>
          <motion.div
            className='md:w-3/5 w-full relative h-[40%] md:h-full order-1 md:order-2'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              fill
              src={"/img/guidelines.png"}
              alt=''
              className='object-contain'
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default GuideLine;
