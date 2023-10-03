"use client";

import Image from "next/image";
import Btn from "../Btn";
import Container from "../Container";
import Heading from "./Heading";
import Star from "../Star";
import { criterias } from "@/constant/data";
import { motion } from "framer-motion";

const Criteria = () => {
  return (
    <section className='min-h-screen py-[110px]' id='#overview'>
      <Container>
        <Star className='left-[200px] top-10 text-3xl animate-star-top z-10 text-tertiary' />
        <Star className='bottom-[100px] right-[50px] text-4xl animate-star z-10 text-tertiary' />
        <Star className='w-full flex items-center justify-center h-full text-2xl animate-star-left z-10' />
        <Star className='bottom-[100px] left-12 animate-star-top text-2xl z-10 text-tertiary' />
        <Star className='right-[300px] top-16 text-3xl animate-star-down z-10' />
        <div className='absolute md:w-[300px] w-10 h-10 md:h-[300px] bg-purple-600 bottom-10 rounded-full left-[40px] blur-[100px] text-white opacity-80' />
        <div className='absolute w-[200px] h-[200px] md:w-[300px] md:h-[400px] bg-purple-600 rounded-full right-0 -bottom-[300px] blur-[100px] text-white opacity-70' />
        <div className='flex lg:flex-row flex-col lg:gap-10 gap-4  h-full items-center justify-center'>
          <div className='lg:w-1/2 w-full sm:h-[500px] h-[275px] relative'>
            <div className='w-full h-full  relative'>
              <Image
                fill
                src={"/img/criteria.png"}
                alt=''
                className='object-contain'
              />
            </div>
            <div className='hidden lg:block absolute xl:w-24 w-16 h-16 xl:top-0 top-8 left-[68px] xl:h-24 bg-button-gradient rounded-full -z-[1]' />
          </div>
          <div className='lg:w-1/2 w-full lg:text-start text-center text-xs md:text-sm'>
            <Heading text='Judging Criteria' colorText='Key Attributes' />
            <ul className='flex flex-col leading-6 gap-4 mb-12'>
              {criterias.map((c) => (
                <motion.li
                  key={c.id}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className='text-tertiary'>{c.header}:</span> {c.body}
                </motion.li>
              ))}
            </ul>
            <Btn text='Read More' />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Criteria;
