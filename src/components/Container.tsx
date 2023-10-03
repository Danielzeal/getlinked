import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className='max-w-7xl mx-auto h-full px-10 2xl:px-0 relative'>
      {children}
    </div>
  );
};

export default Container;
