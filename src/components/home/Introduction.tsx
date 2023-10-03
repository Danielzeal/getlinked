"use client";

import Image from "next/image";
import Container from "../Container";
import Heading from "./Heading";
import Star from "../Star";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className='md:h-[500px] h-screen flex flex-col justify-between relative'>
      <Container>
        <Star className='bottom-[100px] right-[50px] text-4xl animate-star z-10 text-tertiary' />
        <Star className='w-full flex items-center justify-center h-full text-2xl animate-star-left z-10' />
        <Star className='top-12 right-12 animate-star-top text-2xl z-10 text-tertiary' />
        <Star className='top-24 left-12 animate-star-down text-2xl z-10 text-white' />
        <div className='flex flex-col gap-4 md:flex-row h-full items-center justify-center py-4 md:py-8'>
          <motion.div
            className='md:w-3/5 w-full relative h-[50%] md:h-full'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              fill
              src={"/img/idea.png"}
              alt=''
              className='object-contain'
            />
          </motion.div>
          <div className='md:w-2/5 w-full relative text-center md:text-start'>
            <Heading
              text='Introduction to getlinked'
              colorText='tech Hackathon 1.0'
            />
            <motion.p
              className='md:text-sm text-xs  text-justify'
              initial={{ x: 100, opacity: 0 }}
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
              that&apos;s what we&apos;re all about!
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
