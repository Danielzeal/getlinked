import Image from "next/image";
import Container from "../Container";

const Partner = () => {
  return (
    <section className='py-10'>
      <Container>
        <div className='mb-16 text-center sm:text-sm text-xs px-16'>
          <h1 className='sm:text-3xl text-xl font-bold font-lora mb-2'>
            Partners and Sponsors
          </h1>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className='border border-tertiary w-full p-10 grid grid-cols-3 gap-3'>
          <div className='flex flex-col gap-4'>
            <div className='w-full md:h-36 h-12 border-r-2 border-tertiary md:px-8 md:py-4 p-2'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/liberty.png"}
                  alt='liberty logo'
                  fill
                  sizes='(min-width: 1540px) 325px, (min-width: 1340px) 299px, (min-width: 780px) calc(30.93vw - 109px), calc(33.26vw - 80px)'
                  className='object-contain'
                />
              </div>
            </div>
            <div className='w-[90%] h-[2px] bg-tertiary self-start' />
            <div className='w-full md:h-36 h-12 border-r-2 border-tertiary md:px-8 md:py-4 p-2'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/Paybox.png"}
                  alt='playbox logo'
                  fill
                  sizes='(min-width: 1540px) 325px, (min-width: 1340px) 299px, (min-width: 780px) calc(30.93vw - 109px), calc(33.26vw - 80px)'
                  className='object-contain'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='w-full md:h-36 h-12 md:px-8 md:py-4 p-2'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/libertypay.png"}
                  alt='libertypay logo'
                  fill
                  sizes='(min-width: 1540px) 327px, (min-width: 1340px) 301px, (min-width: 780px) calc(30.93vw - 107px), calc(33.26vw - 78px)'
                  className='object-contain'
                />
              </div>
            </div>
            <div className='w-[90%] h-[2px] bg-tertiary self-center' />
            <div className='w-full md:h-36 h-12 md:px-8 md:py-4 p-2'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/wisper.png"}
                  alt='wisper logo'
                  fill
                  sizes='(min-width: 1540px) 327px, (min-width: 1340px) 301px, (min-width: 780px) calc(30.93vw - 107px), calc(33.26vw - 78px)'
                  className='object-contain'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='w-full md:h-36 h-12 border-l-2 border-tertiary md:px-8 md:py-4 p-2'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/winwise.png"}
                  alt='winrise logo'
                  sizes='(min-width: 1540px) 325px, (min-width: 1340px) 299px, (min-width: 780px) calc(30.93vw - 109px), calc(33.26vw - 80px)'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
            <div className='w-[90%] h-[2px] bg-tertiary self-end' />
            <div className='w-full border-l-2 border-tertiary md:h-36 h-12 md:px-8 md:py-4 p-2'>
              <div className='w-full h-full relative'>
                <Image
                  src={"/img/visual.png"}
                  alt='visual plus logo'
                  fill
                  sizes='(min-width: 1540px) 325px, (min-width: 1340px) 299px, (min-width: 780px) calc(30.93vw - 109px), calc(33.26vw - 80px)'
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
