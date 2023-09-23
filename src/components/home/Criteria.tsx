import Image from "next/image";
import Btn from "../Btn";
import Container from "../Container";
import Heading from "./Heading";

const Criteria = () => {
  return (
    <section className='min-h-screen py-16 relative'>
      <div className='absolute w-[300px] h-[400px] bg-purple-600 rounded-full right-0 -bottom-24 blur-[100px] z-20 text-white opacity-70' />
      <Container>
        <div className='flex lg:flex-row flex-col lg:gap-10 gap-4  h-full items-center justify-center'>
          <div className='lg:w-1/2 w-full sm:h-[500px] h-[275px] relative'>
            <div className='w-full h-full  relative'>
              <Image
                fill
                src={"/img/criteria.png"}
                alt=''
                className='object-contain'
              />
            </div>
            <div className='hidden lg:block absolute xl:w-24 w-16 h-16 xl:top-0 top-8 left-[68px] xl:h-24 bg-button-gradient rounded-full  -z-[1]' />
          </div>
          <div className='lg:w-1/2 w-full lg:text-start text-center text-xs md:text-sm'>
            <Heading text='Judging Criteria' colorText='Key Attributes' />
            <ul className='flex flex-col leading-6 gap-4 mb-12'>
              <li>
                <span className='text-tertiary'>
                  Innovation and Creativity:
                </span>{" "}
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </li>
              <li>
                <span className='text-tertiary'>Functionality:</span> Assess how
                well the solution works. Does it perform its intended functions
                effectively and without major issues? Judges would consider the
                completeness and robustness of the solution.
              </li>
              <li>
                <span className='text-tertiary'>Impact and Relevance:</span>{" "}
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </li>
              <li>
                <span className='text-tertiary'>Technical Complexity:</span>{" "}
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </li>
              <li>
                <span className='text-tertiary'>
                  Adherence to Hackathon Rules:
                </span>{" "}
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </li>
            </ul>
            <Btn text='Read More' />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Criteria;
