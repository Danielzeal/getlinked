import Image from "next/image";
import Container from "../Container";
import Star from "../Star";
import FAQs from "./FAQs";

const Questions = () => {
  return (
    <section
      className='min-h-screen border-y border-border-color py-[110px] overflow-hidden'
      id='faqs'
    >
      <Container>
        <Star className='bottom-[100px] right-[50px] text-4xl animate-star -z-[1] text-tertiary' />
        <Star className='w-full flex items-center justify-center h-full text-2xl animate-star-left -z-[1]' />
        <Star className='bottom-[100px] left-12 animate-star-top text-2xl -z-[1] text-tertiary' />
        <Star className='right-[300px] top-16 text-3xl animate-star-down -z-[1]' />
        <div className='flex md:flex-row flex-col md:h-screen'>
          <FAQs />
          <div className='lg:w-3/5 w-full md:h-full mt-4 relative'>
            <div className='flex gap-10 items-center justify-center md:h-[10%] leading-none'>
              <p className='text-7xl text-stroke leading-none'>?</p>
              <p className='text-[150px] text-stroke leading-none'>?</p>
              <p className='text-7xl text-stroke leading-none'>?</p>
            </div>
            <div className='relative w-full lg:h-[90%] md:h-[60%] h-[350px] animate-img'>
              <Image
                src={"/img/question.png"}
                alt='frequently ask questions'
                fill
                sizes='(min-width: 1540px) 768px, (min-width: 1360px) 720px, (min-width: 1040px) calc(48vw + 77px), (min-width: 780px) calc(50vw - 40px), calc(100vw - 80px)'
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
