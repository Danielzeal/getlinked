"use client";

import { questions } from "@/constant/data";
import Heading from "./Heading";
import { useState } from "react";
import { motion } from "framer-motion";

const FAQs = () => {
  const [selectId, setSelectedId] = useState<number | null>(null);

  return (
    <div className='text-sm lg:w-2/5 w-full text-center lg:text-start'>
      <Heading text='Frequently Ask' colorText='Questions' xDirection={-100} />
      <p className='mb-8'>
        We got answers to the questions that you might want to ask about
        getlinked Hackathon 1.0
      </p>
      <div className='flex flex-col gap-6 text-start'>
        {questions.map((q) => (
          <motion.div
            key={q.id}
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className='flex items-center justify-between mb-2'>
              <h2 className=''>{q.question}</h2>
              {selectId !== q.id ? (
                <span
                  className='text-3xl text-tertiary cursor-pointer'
                  onClick={() => setSelectedId(q.id)}
                >
                  +
                </span>
              ) : (
                <span
                  className='text-3xl text-tertiary cursor-pointer'
                  onClick={() => setSelectedId(null)}
                >
                  -
                </span>
              )}
            </div>
            <p
              className={`text-xs ${
                selectId === q.id
                  ? "opacity-100 w-full h-full mb-4 leading-5"
                  : "w-0 h-0 opacity-0"
              } transition-all duration-300 ease-in-out`}
            >
              {q.reply}
            </p>
            <hr className='border border-tertiary' />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
