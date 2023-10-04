"use client";

import Btn from "../Btn";

const ContactForm = () => {
  return (
    <form className='flex flex-col gap-6'>
      <div className='text-xl text-tertiary font-semibold'>
        <h1 className='font-lora font-medium'>Questions or need assistance?</h1>
        <p>Let us know about it!</p>
        <p className='text-white text-xs mt-6 sm:hidden'>
          Email us below to any question related to our event
        </p>
      </div>
      <input
        type='text'
        name='name'
        placeholder='First Name'
        className='h-12 rounded px-4 bg-transparent border border-white'
      />
      <input
        type='text'
        name='name'
        placeholder='Mail'
        className='h-12 rounded px-4 bg-transparent border border-white'
      />
      <textarea
        name=''
        placeholder='Message'
        className='h-[120px] px-4 py-1 rounded bg-transparent border border-white'
      ></textarea>
      <Btn text='submit' className='self-center' />
    </form>
  );
};

export default ContactForm;
