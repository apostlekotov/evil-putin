import Image from "next/image";
import { RescueHuilo } from "@/assets/img";
import { QuestionItem } from "@/components/Question";
import { questions } from "@/data/questions";

export const FAQ: React.FC = () => (
  <section className='flex flex-col mx-auto py-20 xs:py-0 my-20 relative overflow-x-clip'>
    <div className='flex justify-center w-[42rem] sm:w-[56rem] sm:max-w-none lg:w-full lg:max-w-6xl absolute top-0 left-0 lg:left-1/2 -translate-x-[45%] sm:-translate-x-[40%] lg:-translate-x-1/2 -translate-y-[5.5rem] -z-0'>
      <Image src={RescueHuilo} alt='rescue huilo' />
    </div>

    <h4 className='w-full 2xl:max-w-screen-2xl mx-auto text-6xl lg:text-7xl text-right lg:text-left font-medium mb-4 sm:mb-8 lg:mb-16 px-8'>
      Q&amp;A
    </h4>

    <div className='divide-y'>
      {questions.map((question, i) => (
        <QuestionItem key={i} order={i + 1} {...question} />
      ))}
      <div></div>
    </div>
  </section>
);
