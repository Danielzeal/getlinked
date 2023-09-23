import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className='max-w-7xl mx-auto h-full lg:px-10 2xl:px-0 px-8'>
      {children}
    </div>
  );
};

export default Container;
