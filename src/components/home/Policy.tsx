import Image from "next/image";
import Btn from "../Btn";
import Container from "../Container";
import Heading from "./Heading";
import Star from "../Star";
import { AiFillCheckCircle } from "react-icons/ai";

const Policy = () => {
  return (
    <section className='min-h-screen py-10 md:py-0 md:pt-10'>
      <Container>
        <div className='flex flex-col gap-8 md:flex-row relative'>
          <Star className='left-[340px] top-28 text-3xl animate-star text-tertiary -z-[1]' />
          <Star className='right-[200px] top-0 -z-[1] text-3xl animate-star text-tertiary' />
          <Star className='left-[200px] top-10 text-3xl animate-star text-tertiary -z-[1]' />
          <Star className='bottom-[100px] right-[50px] text-4xl text-white animate-star -z-[1]' />
          <Star className='w-full flex items-center justify-center h-full text-2xl animate-star-left -z-[1]' />
          <Star className='bottom-[100px] left-12 animate-star text-2xl -z-[1]' />
          <Star className='right-[300px] top-16 text-3xl animate-star-left  text-tertiary -z-[1]' />
          <div className='absolute md:w-[200px] w-10 h-10 md:h-[200px] bg-purple-600 rounded-full left-[70px] blur-[100px] -z-[1] text-white opacity-70' />
          <div className='absolute w-[300px] h-[300px] bg-purple-600 rounded-full right-[70px] bottom-32 blur-[100px] -z-[1] opacity-30' />
          <div className='md:w-1/2 w-full text-xs md:text-md'>
            <div className='text-center'>
              <Heading text='Privacy Policy and' colorText='Terms' />
              <p className='opacity-80'>Last updated on September 12, 2023</p>
              <p className='my-10'>
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </div>
            <div className='py-8 px-4 border border-tertiary'>
              <p className='text-center'>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <div className='my-6 flex flex-col gap-3 text-xs'>
                <h3 className='text-tertiary font-bold'>
                  Licensing Policy <br />{" "}
                </h3>
                <p>Here are terms of our Standard License:</p>
              </div>
              <ul className='mb-6 flex flex-col gap-4'>
                <li className='flex gap-4'>
                  <AiFillCheckCircle className='text-green-500' />
                  <span>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </span>
                </li>
                <li className='flex gap-4'>
                  <AiFillCheckCircle className='text-green-500' />
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </li>
              </ul>
              <Btn text='Read More' className='selt-center' />
            </div>
          </div>
          <div className='md:w-1/2 w-full md:h-[850px] h-[600px] relative'>
            <div className='relative h-[300px] md:h-[500px] w-full'>
              <Image
                src={"/img/privacy.png"}
                alt=''
                fill
                className='object-contain -top-[100px]'
              />
            </div>
            <div className='relative h-[400px] md:h-[600px] w-full -top-28 md:-top-[300px]'>
              <Image
                src={"/img/lock.png"}
                alt=''
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Policy;
