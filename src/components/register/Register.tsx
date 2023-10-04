"use client";

import Container from "../Container";
import FormContainer from "../FormContainer";
import Star from "../Star";
import Overlay from "./Overlay";
import RegisterForm from "./RegisterForm";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Register = () => {
  const [success, setSuccess] = useState(false);
  return (
    <>
      <div className='w-[300px] absolute h-[600px] rounded-full opacity-50 bg-tertiary blur-[80px] -z-[1]' />
      <div className='w-[400px] -z-[1] h-[200px] blur-[80px] right-8 bottom-0 absolute  opacity-50 rounded-full bg-tertiary' />
      <Star className='left-[400px] top-10 text-3xl animate-star text-tertiary' />
      <Star className='bottom-[100px] right-[200px] text-xl text-white animate-star' />
      <Star className='w-full flex items-center justify-center h-full text-base animate-star-left' />
      <Star className='bottom-[100px] left-12 text-lg animate-star' />
      <Star className='right-[300px] top-[200px] text-3xl animate-star-left' />
      <Overlay success={success} setSuccess={setSuccess} />
      <Container>
        <div className='flex flex-col md:flex-row items-center justify-center md:gap-10 w-full min-h-[calc(100vh-100px)]  md:min-h-[calc(100vh-80px)] md:py-8 py-4'>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='md:w-2/5 w-full relative md:h-[600px] h-[300px] sm:h-[500px]'
          >
            <Image
              className='object-contain animate-img'
              src={"/img/3d-graphic.png"}
              alt='graphic design image'
              fill
            />
          </motion.div>
          <div className='md:w-3/5 w-full'>
            <FormContainer>
              <RegisterForm setSuccess={setSuccess} />
            </FormContainer>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
