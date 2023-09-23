import { ReactNode } from "react";

const FormContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full h-full xl:p-16 rounded-xl md:bg-form-blur md:shadow-form-shadow md:backdrop-blur-form-filter sm:p-6'>
      {children}
    </div>
  );
};

export default FormContainer;
