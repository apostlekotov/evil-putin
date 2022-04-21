import { Question } from "types";

export const QuestionItem: React.FC<Question & { order: number }> = ({
  order,
  question,
  answer,
}) => (
  <div>
    <div className='w-full lg:max-w-none 2xl:max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-56 p-8 pl-[16vw] sm:pl-40 lg:pl-8'>
      <div className='flex space-x-4 lg:space-x-6 z-0'>
        <span>{("0" + order).slice(-2)}</span>
        <span className='font-medium text-base md:text-2xl xl:text-[2rem] lg:leading-9 uppercase'>
          {question}
        </span>
      </div>

      <p className='text-sm lg:text-lg z-0'>{answer}</p>
    </div>
  </div>
);
