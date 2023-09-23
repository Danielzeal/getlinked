import Image from "next/image";

const ContactAddress = () => {
  return (
    <div className='sm:w-2/5 w-full order-2 sm:order-1'>
      <div className='flex flex-col gap-4'>
        <div className='hidden sm:flex flex-col gap-4'>
          <h1 className='text-[32px] font-semibold text-tertiary'>
            Get in touch
          </h1>
          <p>
            Contact <br />
            Information
          </p>
          <address className='capitalize'>
            27, alara street <br />
            yaba 100012 <br />
            lagos state
          </address>
          <p className='capitalize'>
            call us: <a href='tel:07067981819'>07067981819</a>
          </p>
        </div>
        <p className='mt-6 hidden sm:block'>
          we are open from Monday-Friday <br /> 08:00am - 05:00pm
        </p>
      </div>
      <div className='flex gap-4 items-center mt-8 justify-center sm:justify-start'>
        <Image src={"/img/insta.png"} alt='instagram' width={20} height={20} />
        <Image src={"/img/twit.png"} alt='twitter' width={19} height={17} />
        <Image
          src={"/img/facebook.png"}
          alt='facebook'
          height={20}
          width={10}
        />
        <Image src={"/img/linkin.png"} alt='linkin' height={24} width={24} />
      </div>
    </div>
  );
};

export default ContactAddress;
