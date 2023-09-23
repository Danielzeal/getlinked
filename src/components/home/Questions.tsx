import Image from "next/image";
import Container from "../Container";
import Heading from "./Heading";
import Star from "../Star";

const Questions = () => {
  return (
    <section className='min-h-screen border-y border-opacity-20 relative'>
      <Star className='left-[300px] top-10 text-3xl animate-star text-tertiary' />
      <Star className='bottom-[80px] right-[50px] text-4xl text-white animate-star z-20' />
      <Star className='bottom-[300] w-full flex items-center justify-center h-full text-2xl animate-star-left' />
      <Star className='bottom-[100px] left-12 animate-star z-20 text-2xl' />
      <Star className='right-[200px] top-16 text-3xl animate-star-left z-20 text-tertiary' />
      <Container>
        <div className='py-16 flex lg:flex-row flex-col'>
          <div className='text-sm lg:w-2/5 w-full text-center lg:text-start'>
            <Heading text='Frequently Ask' colorText='Questions' />
            <p className='mb-12'>
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
            <div className='flex flex-col gap-6 text-start'>
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <p className=''>
                    Can I work on a project I started before the hackathon?
                  </p>
                  <span className='text-2xl text-tertiary'>+</span>
                </div>
                <hr className='border border-tertiary' />
              </div>
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <p className=''>
                    Can I work on a project I started before the hackathon?
                  </p>
                  <span className='text-2xl text-tertiary'>+</span>
                </div>
                <hr className='border border-tertiary' />
              </div>
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <p className=''>
                    Can I work on a project I started before the hackathon?
                  </p>
                  <span className='text-2xl text-tertiary'>+</span>
                </div>
                <hr className='border border-tertiary' />
              </div>
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <p className=''>
                    Can I work on a project I started before the hackathon?
                  </p>
                  <span className='text-2xl text-tertiary'>+</span>
                </div>
                <hr className='border border-tertiary' />
              </div>
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <p className=''>
                    Can I work on a project I started before the hackathon?
                  </p>
                  <span className='text-2xl text-tertiary'>+</span>
                </div>
                <hr className='border border-tertiary' />
              </div>
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <p className=''>
                    Can I work on a project I started before the hackathon?
                  </p>
                  <span className='text-2xl text-tertiary'>+</span>
                </div>
                <hr className='border border-tertiary' />
              </div>
            </div>
          </div>
          <div className='lg:w-3/5 w-full sm:h-[500px] h-[327px] lg:h-[700px] mt-8'>
            <div className='flex gap-10 items-center justify-center'>
              <p className='text-7xl text-stroke leading-none'>?</p>
              <p className='text-[150px] text-stroke leading-none'>?</p>
              <p className='text-7xl text-stroke leading-none'>?</p>
            </div>
            <div className='relative w-full h-[80%] pt-10'>
              <Image
                src={"/img/question.png"}
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

export default Questions;
