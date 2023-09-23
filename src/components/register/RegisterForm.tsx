import Image from "next/image";
import Btn from "../Btn";
import { Dispatch, FormEvent, SetStateAction } from "react";

type Props = {
  setSuccess: Dispatch<SetStateAction<boolean>>;
};

const RegisterForm = ({ setSuccess }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='text-tertiary text-[32px] font-semibold hidden md:block'>
        Register
      </h1>
      <div className='flex items-end md:gap-2 mb-6 md:mt-10 mt-4'>
        <p className='sm:text-sm text-xs'>Be part of the movement!</p>
        <div className='border-tertiary w-[150px] border-dashed border mb-1 relative'>
          <Image
            width={26}
            height={26}
            src={"/img/img01.png"}
            alt=''
            className='absolute -top-7 left-12 w-[23px] h-[23px] md:w-[26px] md:h-[26px]'
          />
          <Image
            width={30}
            height={30}
            src={"/img/img00.png"}
            alt=''
            className='absolute -top-8 left-[70px] w-[27px] h-[27px] md:w-[30px] md:h-[30px]'
          />
        </div>
      </div>
      <h2 className='uppercase md:text-2xl text-xl'>Create your account</h2>
      <div className='md:grid md:grid-cols-2 text-sm md:gap-6 gap-4 md:mt-6 md:mb-4 my-3 flex flex-col'>
        <label htmlFor='name' className='flex flex-col gap-2 w-full'>
          Team&apos;s Name <br />
          <input
            className='w-full h-10 md:h-12 rounded px-4 bg-transparent border border-white'
            type='text'
            id='name'
            placeholder='Enter the name of your group'
          />
        </label>
        <label htmlFor='phone' className='flex flex-col gap-2'>
          Phone <br />
          <input
            className='w-full h-10 md:h-12 rounded px-4 bg-transparent border border-white'
            type='tel'
            id='phone'
            placeholder='Enter your phone number'
          />
        </label>
        <label htmlFor='email' className='flex flex-col gap-2'>
          Email <br />
          <input
            className='w-full h-10 md:h-12 rounded px-4 bg-transparent border border-white'
            type='email'
            id='email'
            placeholder='Enter your email address'
          />
        </label>
        <label htmlFor='topic' className='flex flex-col gap-2'>
          Project Topic <br />
          <input
            className='w-full h-10 md:h-12 rounded px-4 bg-transparent border border-white'
            type='text'
            id='topic'
            placeholder='What is your group project topic'
          />
        </label>
        <div className='flex col-span-2 md:gap-6 gap-4'>
          <label
            htmlFor='category'
            className='md:w-1/2 w-4/6 flex flex-col gap-2'
          >
            Category <br />
            <select
              className='w-full h-10 md:h-12 rounded px-4 bg-transparent border border-white'
              id='category'
            >
              <option value=''>Select your category</option>
            </select>
          </label>
          <label htmlFor='size' className='md:w-1/2 flex flex-col gap-2 w-2/6'>
            Group Size <br />
            <select
              className='w-full h-10 md:h-12 rounded px-4 bg-transparent border border-white'
              id='size'
            >
              <option value=''>Select</option>
            </select>
          </label>
        </div>
      </div>
      <p className='text-tertiary-secondary md:text-xs text-[10px]'>
        Please review your registration details before submitting
      </p>
      <div className='flex items-center gap-4 md:text-xs text-[10px] md:my-4 my-2'>
        <input
          type='checkbox'
          name=''
          id=''
          className='border-2 w-4 h-4 rounded checked:bg-tertiary appearance-none accent-inherit'
        />
        I agreed with the event terms and conditions and privacy policy
      </div>
      <div className='md:hidden flex items-center justify-center'>
        <Btn className='' text='Submit' />
      </div>
      <Btn text='Register Now' className='hidden md:block w-full' />
    </form>
  );
};

export default RegisterForm;
