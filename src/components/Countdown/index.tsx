import { CircleIcon } from "@/assets/svg";
import { useCountdown } from "@/hooks/useCountdown";

export const Countdown: React.FC = () => {
  const { remaining } = useCountdown(process.env.DAY_X || "April 1 2022");

  return (
    <div className='flex justify-center flex-wrap sm:flex-nowrap absolute bottom-16 w-full gap-y-6 gap-x-16 md:gap-0 md:space-x-20'>
      <div className='flex flex-col justify-center text-center text-black relative w-24 h-24 md:w-40 md:h-40 py-3 md:py-6'>
        <span className='countdown-text text-4xl md:text-7xl md:mb-1'>
          {remaining.days}
        </span>
        <span className='text-sm md:text-lg uppercase'>Days</span>

        <CircleIcon className='absolute inset-0 w-full h-full -z-10' />
      </div>
      <div className='flex flex-col justify-center text-center text-black relative w-24 h-24 md:w-40 md:h-40 py-3 md:py-6'>
        <span className='countdown-text text-4xl md:text-7xl md:mb-1'>
          {remaining.hours}
        </span>
        <span className='text-sm md:text-lg uppercase'>Hours</span>

        <CircleIcon className='absolute inset-0 w-full h-full -z-10' />
      </div>
      <div className='flex flex-col justify-center text-center text-black relative w-24 h-24 md:w-40 md:h-40 py-3 md:py-6'>
        <span className='countdown-text text-4xl md:text-7xl md:mb-1'>
          {remaining.minutes}
        </span>
        <span className='text-sm md:text-lg uppercase'>Minutes</span>

        <CircleIcon className='absolute inset-0 w-full h-full -z-10' />
      </div>
      <div className='flex flex-col justify-center text-center text-black relative w-24 h-24 md:w-40 md:h-40 py-3 md:py-6'>
        <span className='countdown-text text-4xl md:text-7xl md:mb-1'>
          {remaining.seconds}
        </span>
        <span className='text-sm md:text-lg uppercase'>Seconds</span>

        <CircleIcon className='absolute inset-0 w-full h-full -z-10' />
      </div>
    </div>
  );
};
