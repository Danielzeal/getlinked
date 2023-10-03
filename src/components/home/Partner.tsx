import Image from "next/image";
import Container from "../Container";

const Partner = () => {
  return (
    <section className='py-10'>
      <Container>
        <div className='mb-16 text-center sm:text-sm text-xs px-16'>
          <h1 className='sm:text-2xl text-base font-bold'>
            Partners and Sponsors
          </h1>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className='border border-tertiary w-full p-10 grid grid-cols-3 gap-3'>
          <div className='flex flex-col gap-4'>
            <div className='w-full md:h-36 h-12 border-r-2 border-tertiary'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/boom.png"}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>
            </div>
            <div className='w-[90%] h-[2px] bg-tertiary self-start' />
            <div className='w-full md:h-36 h-12 border-r-2 border-tertiary'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/boom.png"}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='w-full md:h-36 h-12'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/boom.png"}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>
            </div>
            <div className='w-[90%] h-[2px] bg-tertiary self-center' />
            <div className='w-full md:h-36 h-12'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/boom.png"}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='w-full md:h-36 h-12 border-l-2 border-tertiary'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/boom.png"}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>
            </div>
            <div className='w-[90%] h-[2px] bg-tertiary self-end' />
            <div className='w-full border-l-2 border-tertiary md:h-36 h-12 bg-red-100'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/boom.png"}
                  alt=''
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partner;
