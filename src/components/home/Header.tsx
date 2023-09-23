import Link from "next/link";
import Container from "../Container";
import MenuIcon from "../MenuIcon";

const Header = () => {
  return (
    <header className='md:h-[100px] h-[80px] w-full'>
      <Container>
        <div className='flex justify-between items-center h-full'>
          <h1 className='lg:text-4xl md:text-2xl font-bold font-display group hover:text-secondary transition-colors duration-200 ease-linear'>
            get
            <span className='text-secondary group-hover:text-white transition-colors duration-200 ease-linear'>
              linked
            </span>
          </h1>
          <div className='md:flex lg:gap-24 md:gap-12 items-center justify-center h-full hidden'>
            <nav className='flex lg:gap-10 items-center gap-6 justify-center h-full'>
              <a href='#'>Timeline</a>
              <a href='#'>Overview</a>
              <a href='#'>FAQs</a>
              <Link href={"/contact"}>Contact</Link>
            </nav>
            <Link
              href={"/register"}
              className='w-[172px] h-[53px] flex items-center justify-center bg-button-gradient rounded'
            >
              Register
            </Link>
          </div>
          <MenuIcon />
        </div>
      </Container>
    </header>
  );
};

export default Header;
