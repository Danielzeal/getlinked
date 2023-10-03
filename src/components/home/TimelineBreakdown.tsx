"use client";

import { motion } from "framer-motion";

type Props = {
  heading: string;
  body: string;
  num: string;
  first?: string;
  second?: string;
  time: string;
};

const Breakdown = ({ heading, body, num, first, second, time }: Props) => {
  return (
    <motion.div
      className='flex md:flex-row flex-col md:gap-[200px] items-center justify-center relative pl-14 md:pl-0'
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className='text-xs sm:text-sm md:text-2xl left-0 w-full h-full absolute flex md:items-center md:justify-center items-end '>
        <div className='md:w-12 md:h-12 w-8 h-8 rounded-full bg-button-gradient flex items-center justify-center border-primary md:border-4 border-2'>
          {num}
        </div>
      </div>
      <div className={`md:w-1/2 w-full flex flex-col md:gap-4 gap-1 ${first}`}>
        <h2 className='text-tertiary md:text-2xl font-bold text-xs sm:text-sm'>
          {heading}
        </h2>
        <p className='md:text-base text-xs sm:text-sm'>{body}</p>
      </div>
      <p
        className={`md:w-1/2 w-full font-bold text-tertiary md:text-2xl text-xs sm:text-sm ${second}`}
      >
        {time}
      </p>
    </motion.div>
  );
};

const TimelineBreakdown = () => {
  return (
    <>
      <Breakdown
        heading='Hackathon Announcement'
        body='The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register'
        num='1'
        time='November 18, 2023'
        first='md:text-end'
      />
      <Breakdown
        heading='Teams Registration begins'
        body='Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register'
        num='2'
        time='November 18, 2023'
        first='md:order-last'
        second='md:text-end'
      />
      <Breakdown
        heading='Teams Registration ends'
        body='Interested Participants are no longer Allowed to register'
        num='3'
        time='November 18, 2023'
        first='md:text-end'
      />
      <Breakdown
        heading='Announcement of the accepted teams
        and ideas'
        body='All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced'
        num='4'
        time='November 18, 2023'
        first='md:order-last'
        second='md:text-end'
      />
      <Breakdown
        heading='Getlinked Hackathon 1.0 Offically Begins'
        body='Accepted teams can now proceed to build their ground breaking skill driven solutions'
        num='5'
        time='November 18, 2023'
        first='md:text-end'
      />
      <Breakdown
        heading='Demo Day'
        body='Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day'
        num='6'
        time='November 18, 2023'
        first='md:order-last'
        second='md:text-end'
      />
    </>
  );
};

export default TimelineBreakdown;
