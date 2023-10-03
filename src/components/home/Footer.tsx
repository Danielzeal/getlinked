import Link from "next/link";
import Container from "../Container";
import Star from "../Star";
import { PiPhone } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className='md:p-8 py-6 bg-[#100b20]'>
      <Container>
        <Star className='left-[200px] top-10 text-3xl animate-star text-tertiary z-20' />
        <Star className='bottom-[100px] right-[50px] text-4xl text-white animate-star z-20' />
        <Star className='w-full flex items-center justify-center h-full text-2xl animate-star-left z-20' />
        <Star className='bottom-[100px] left-12 animate-star text-2xl z-20' />
        <Star className='right-[300px] top-16 text-3xl animate-star-left z-20 text-tertiary' />
        <div className='flex md:flex-row flex-col gap-6 text-xs'>
          <div className='md:w-2/4 w-full flex flex-col md:justify-between gap-6'>
            <div>
              <h1 className='font-bold lg:text-3xl sm:text-2xl text-xl mb-4'>
                <Link href={"/"}>
                  get<span className='text-tertiary'>linked</span>
                </Link>
              </h1>
              <p>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <div className='flex gap-3'>
              <p>Terms of use</p>
              <div className='h-4 w-[2px] bg-tertiary' />
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className='md:w-1/4 w-full flex gap-3 flex-col'>
            <h2 className='text-sm font-semibold text-tertiary'>
              Useful Links
            </h2>
            <div className='flex flex-col gap-3'>
              <a href={""}>Overview</a>
              <a href={""}>Timeline</a>
              <a href={""}>FAQs</a>
              <Link href={"/register"}>Register</Link>
            </div>
            <div>
              <span className='text-tertiary'>Follow us</span>
            </div>
          </div>
          <div className='md:w-1/4 w-full flex gap-3 flex-col'>
            <h2 className='text-sm font-semibold text-tertiary'>Contact us</h2>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-4 items-center'>
                <PiPhone />
                <span>+234 6707653444</span>
              </div>
              <div className='flex gap-4'>
                <PiPhone />

                <address className='capitalize'>
                  27, alara street yaba 100012 lagos state
                </address>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <p className='text-center text-xs mt-8'>
          All right reserved. &copy; getlinked Ltd.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
