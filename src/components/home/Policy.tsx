import Image from "next/image";
import Btn from "../Btn";
import Container from "../Container";
import Heading from "./Heading";

const Policy = () => {
  return (
    <section className='h-screen py-16'>
      <Container>
        <div className='flex gap-8'>
          <div className='w-1/2'>
            <div>
              <Heading text='Privacy Policy and' colorText='Terms' />
              <p>Last updated on September 12, 2023</p>
              <p>
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </div>
            <div>
              <p>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <h3>
                Licensing Policy <br />{" "}
                <span>Here are terms of our Standard License:</span>
              </h3>
              <ul>
                <li>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </li>
                <li>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </li>
              </ul>
              <Btn text='Read More' />
            </div>
          </div>
          <div className='w-1/2'>
            <div className='relative h-[600px] w-[520px]'>
              <Image src={"/img/privacy.png"} alt='' fill objectFit='contain' />
              <Image
                src={"/img/lock.png"}
                alt=''
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Policy;
