import Register from "@/components/register/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GetLinked - Register",
};

const RegisterPage = () => {
  return (
    <section className='relative overflow-hidden min-h-screen pt-[110px]'>
      <Register />
    </section>
  );
};

export default RegisterPage;
