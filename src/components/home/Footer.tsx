import Link from "next/link";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className='md:p-8 py-6 bg-[#100b20]'>
      <Container>
        <div className='flex md:flex-row flex-col gap-6 text-xs'>
          <div className='md:w-2/4 w-full'>
            <h1 className='font-bold lg:text-3xl sm:text-2xl text-xl mb-4'>
              get<span className='text-tertiary'>linked</span>
            </h1>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
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
            <div className='flex flex-col gap-3'>hello</div>
          </div>
        </div>
        <p className='text-center text-xs'>
          All right reserved. &copy; getlinked Ltd.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
