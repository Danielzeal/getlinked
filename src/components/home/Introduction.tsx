import Image from "next/image";
import Container from "../Container";
import Heading from "./Heading";

const Introduction = () => {
  return (
    <section className='md:h-[500px] h-screen flex flex-col justify-between relative'>
      <Container>
        <div className='flex flex-col gap-4 md:flex-row h-full items-center justify-center py-4 md:py-8'>
          <div className='md:w-3/5 w-full relative h-[50%] md:h-full'>
            <Image
              fill
              src={"/img/idea.png"}
              alt=''
              className='object-contain'
            />
          </div>
          <div className='md:w-2/5 w-full relative text-center md:text-start'>
            <Heading
              text='Introduct to getlinked'
              colorText='tech Hackathon 1.0'
            />
            <p className='md:text-sm leading-7 text-xs'>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
