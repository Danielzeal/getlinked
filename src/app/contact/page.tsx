import ContactForm from "@/components/contact/ContactForm";
import Container from "@/components/Container";
import FormContainer from "@/components/FormContainer";
import ContactAddress from "@/components/contact/ContactAddress";
import Star from "@/components/Star";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GetLinked - Contact",
};

const ContactPage = () => {
  return (
    <section className='w-full min-h-screen overflow-hidden pt-[110px]'>
      <Container>
        <div className='w-[100px] absolute h-[400px] rounded-full opacity-50 bg-tertiary blur-[80px] -z-[1]' />
        <div className='w-[200px] h-[400px] blur-[80px] right-8 bottom-0 absolute  opacity-50 rounded-full bg-tertiary -z-[1]' />
        <Star className='left-[200px] text-3xl animate-star-left text-tertiary' />
        <Star className='bottom-[300px] right-10 text-xl text-white animate-star' />
        <Star className='w-full flex items-center justify-center h-full text-base animate-star' />
        <Star className='bottom-[100px] left-12 text-lg animate-star' />
        <Star className='right-[300px] top-[200px] text-3xl animate-star-left' />
        <div className='flex flex-col sm:flex-row gap-2 lg:px-10 md:px-6 items-center justify-center w-full pb-4'>
          <ContactAddress />
          <div className='sm:w-3/5 w-full order-1 sm:order-2'>
            <FormContainer>
              <ContactForm />
            </FormContainer>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;
