import Image from "next/image";
import Btn from "../Btn";
import { Dispatch, SetStateAction } from "react";

type Props = {
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
};

const Overlay = ({ success, setSuccess }: Props) => {
  return (
    <div
      className={`w-full  z-50  top-0 bottom-0 absolute transition-all duration-700 ease-linear ${
        !success ? "-left-[100vw] opacity-0" : "left-0 opacity-100"
      } bg-overlay h-full flex items-center justify-center`}
    >
      <div className='md:p-10 p-6 border border-tertiary w-[650px] overflow-hidden relative flex flex-col md:gap-6 gap-4'>
        <div className='flex items-center justify-center'>
          <div className='relative w-[300px] md:h-[300px] h-[200px]'>
            <Image
              src={"/img/successmark.png"}
              alt='done registering'
              fill
              className='object-contain animate-ok'
            />
          </div>
          <div className='relative w-[300px] md:h-[300px] h-[200px]'>
            <Image
              src={"/img/successful.png"}
              alt='congratulation'
              fill
              className='object-contain animate-pulse left-10'
            />
          </div>
        </div>
        <div className='text-center'>
          <h1 className='font-semibold text-3xl'>
            Congratulations you have successfully Registered!
          </h1>
          <p>Yes it was easy and we did it!</p>
          <p>check your mail box for the next step</p>
        </div>
        <Btn
          text='Back'
          className='w-full'
          onClick={() => setSuccess((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default Overlay;
