import Image from "next/image";
import Btn from "../Btn";
import Container from "../Container";
import Star from "../Star";

const HeroSection = () => {
  return (
    <section className='w-full h-[calc(100vh-100px)] overflow-hidden border-y border-opacity-10 relative'>
      <Star className='left-[200px] top-10 text-3xl animate-star text-tertiary' />
      <Star className='bottom-[100px] right-[50px] text-4xl text-white animate-star z-20' />
      <Star className='w-full flex items-center justify-center h-full text-2xl animate-star-left' />
      <Star className='bottom-[100px] left-12 animate-star z-20 text-2xl' />
      <Star className='right-[300px] top-16 text-3xl animate-star-left z-20 text-tertiary' />
      <div className='absolute md:w-[200px] w-10 h-10 md:h-[200px] bg-tertiary rounded-full left-[70px] blur-3xl z-20 text-white opacity-30' />
      <div className='absolute w-[300px] h-[300px] bg-tertiary rounded-full right-[120px] top-32 blur-3xl -z-[1] opacity-30' />
      <Container>
        <div className='h-[10%] z-50 mt-8'>
          <p className='md:text-end  xl:text-4xl lg:text-3xl md:text-2xl italic font-bold mb-6'>
            Igniting a Revolution in{" "}
            <span className='w-full h-full relative'>
              HR Innovation
              <span className='absolute w-full h-[14px] left-0 md:top-10 top-6'>
                <Image
                  src={"/img/vec.png"}
                  alt=''
                  fill
                  className='object-contain'
                />
              </span>
            </span>
          </p>
        </div>
        <div className='flex lg:flex-row flex-col gap-10 md:gap-4 items-center justify-center h-[90%]'>
          <div className='lg:w-1/2 flex md:gap-12 gap-6 flex-col text-center md:text-start'>
            <div>
              <h1 className='xl:text-[80px] md:text-6xl text-3xl font-bold leading-none'>
                getlinked Tech <br />
                Hackathon <span className='text-tertiary'>1.0</span>
              </h1>
              <p className='mt-4 mb-8'>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <Btn text='register' />
            </div>
            <div className='flex gap-4 items-center justify-center md:items-start md:justify-start'>
              <p>
                <span className='xl:text-6xl text-4xl'>00</span>H
              </p>
              <p>
                <span className='xl:text-6xl text-4xl'>00</span>H
              </p>
              <p>
                <span className='xl:text-6xl text-4xl'>00</span>H
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 h-full w-full relative'>
            <Image
              src={"/img/virtual-glasses.png"}
              alt=''
              fill
              className='object-contain'
            />
            <Image
              src={"/img/img02.png"}
              alt=''
              fill
              className='object-contain'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
