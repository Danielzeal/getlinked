"use client";

import { useRef } from "react";
import Container from "../Container";
import TimelineBreakdown from "./TimelineBreakdown";
import { useScroll, motion } from "framer-motion";

const Timeline = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section
      className='min-h-screen py-[110px] w-full overflow-hidden'
      id='timeline'
    >
      <Container>
        <div className='text-center md:mb-20 mb-6 flex items-center justify-center gap-4 flex-col'>
          <h1>Timeline</h1>
          <p className='w-[320px]'>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className='flex flex-col gap-8 relative'>
          <div
            className='absolute w-full h-full md:left-0 left-4 md:flex items-center justify-center md:-top-12'
            ref={ref}
          >
            <motion.div
              className='absolute h-full w-1 bg-tertiary origin-top'
              style={{ scaleY: scrollYProgress }}
            />
          </div>
          <TimelineBreakdown />
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
