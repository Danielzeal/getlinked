import Image from "next/image";
import Container from "../Container";
import Heading from "./Heading";

type Props = {
  amount: string;
  place: string;
  position: string;
};

const Prize = ({ amount, place, position }: Props) => {
  return (
    <div className='text-center h-1/2'>
      <h2 className='lg:text-4xl sm:text-2xl text-xs font-bold'>{position}</h2>
      <p className='lg:text-2xl text-xs sm:text-base font-semibold'>{place}</p>
      <p className='xl:text-[32px] sm:text-2xl text-sm font-bold text-tertiary'>
        {"#"}
        {amount}
      </p>
    </div>
  );
};

const Trophy = () => {
  return (
    <section className='w-full bg-[#100b20] py-8 overflow-hidden'>
      <Container>
        <div className='flex text-center md:text-start md:items-end items-center justify-center md:justify-end mb-4'>
          <div>
            <Heading text='Prizes and' colorText='Rewards' />
            <p>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
        </div>
        <div className='w-full min-h-[500px] h-[500px] flex flex-col md:flex-row items-center justify-center gap-8'>
          <div className='relative md:h-full h-1/2 md:w-1/2 w-full'>
            <Image
              src={"/img/trophy.png"}
              alt=''
              fill
              className='object-contain'
            />
          </div>

          <div className='flex justify-center w-full md:w-1/2 h-1/2 lg:gap-4 gap-2 items-center md:pt-24 pt-12'>
            <div className='w-full md:h-[300px] sm:h-[200px] h-full border border-tertiary bg-tertiary-opacity rounded-lg'>
              <div className='relative w-full h-1/2 xl:scale-[1.3] -top-14'>
                <Image
                  src={"/img/silver.png"}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>
              <Prize amount='300,000' place='Runner' position='2nd' />
            </div>
            <div className='w-full h-full border border-[#903AFF] bg-primary-opacity rounded-lg md:h-[300px] sm:h-[200px] scale-y-105'>
              <div className='relative w-full h-1/2 -top-14 md:scale-150 scale-125 mb-1'>
                <Image
                  src={"/img/gold.png"}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>
              <Prize amount='400,000' place='Runner' position='1st' />
            </div>
            <div className='w-full h-full border border-tertiary bg-tertiary-opacity rounded-lg flex flex-col md:h-[300px] sm:h-[200px]'>
              <div className='relative w-full h-1/2 xl:scale-[1.3] -top-14'>
                <Image
                  src={"/img/bronze.png"}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>
              <Prize amount='150,000' place='Runner' position='3rd' />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trophy;
