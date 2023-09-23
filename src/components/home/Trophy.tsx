import Image from "next/image";
import Container from "../Container";
import Heading from "./Heading";

const Trophy = () => {
  return (
    <section className='w-full h-screen bg-[#100b20] relative'>
      <Container>
        <div className='w-full h-full flex items-center justify-between'>
          <div className='relative h-[450px] w-1/2'>
            <Image
              src={"/img/trophy.png"}
              alt=''
              fill
              className='object-contain'
            />
          </div>
          <div className='w-1/2'>
            <div className='text-center md:text-start md:w-[400px] mb-[200px]'>
              <Heading text='Prizes and' colorText='Rewards' />
              <p>
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <div className='flex justify-between w-full'>
              <div className='w-[200px] h-[300px] border border-tertiary bg-tertiary-opacity rounded-lg gap-10 flex flex-col items-center justify-center relative'>
                <Image
                  src={"/img/silver.png"}
                  alt=''
                  width={180}
                  height={180}
                  className='absolute -top-[100px]'
                />
                <div className='text-center pt-[100px]'>
                  <h2 className='text-4xl font-bold'>2nd</h2>
                  <p className='text-2xl font-semibold'>Runner</p>
                  <p className='text-[32px] font-bold text-tertiary'>
                    N300,000
                  </p>
                </div>
              </div>
              <div className='w-[200px] h-[300px] border border-[#903AFF] bg-primary-opacity rounded-lg gap-10 flex flex-col items-center justify-center relative scale-y-105'>
                <Image
                  src={"/img/gold.png"}
                  alt=''
                  width={300}
                  height={350}
                  className='absolute -top-[100px]'
                />
                <div className='text-center pt-[110px]'>
                  <h2 className='text-4xl font-bold'>1st</h2>
                  <p className='text-2xl font-semibold'>Runner</p>
                  <p className='text-[32px] font-bold text-[#903AFF]'>
                    N400,000
                  </p>
                </div>
              </div>
              <div className='w-[200px] h-[300px] border border-tertiary bg-tertiary-opacity rounded-lg gap-10 flex flex-col items-center justify-center relative'>
                <Image
                  src={"/img/bronze.png"}
                  alt=''
                  width={180}
                  height={180}
                  className='absolute -top-[100px]'
                />
                <div className='text-center pt-[100px]'>
                  <h2 className='text-4xl font-bold'>3rd</h2>
                  <p className='text-2xl font-semibold'>Runner</p>
                  <p className='text-[32px] font-bold text-tertiary'>
                    N150,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trophy;
