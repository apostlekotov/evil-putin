import Image from "next/image";
import { NukeLink } from "@/components/NukeLink";
import { Matr1Image, Matr2Image, Matr3Image } from "@/assets/img";

export const Metaverse: React.FC = () => (
  <section className='flex flex-col-reverse relative lg:flex-row items-center lg:items-end py-20 overflow-hidden'>
    <div className='absolute w-[12rem] md:w-[24vw] 2xl:w-auto 2xl:scale-[.80] rotate-[30deg] md:rotate-[-30deg] right-0 2xl:right-[3vw] top-0 lg:-top-1/4 opacity-[0.35] -z-10'>
      <Image
        src={Matr3Image}
        objectFit='contain'
        alt='matr third'
        placeholder='blur'
      />
    </div>
    <div className='absolute w-[16rem] sm:w-[22rem] lg:w-[34vw] 2xl:w-auto scale-x-[-1] lg:scale-x-100 scale-100 2xl:scale-90 -left-[10%] md:left-0 lg:left-[40%] rotate-[-16deg] lg:rotate-[16deg] bottom-1/4 lg:bottom-auto lg:-top-1/4 -z-10'>
      <Image
        src={Matr2Image}
        objectFit='contain'
        alt='matr second'
        placeholder='blur'
      />
    </div>
    <div className='pr-24 pl-4 pt-12 lg:px-4 -mb-2 lg:pr-0 lg:ml-20 max-w-md lg:max-w-xl relative scale-x-[-1] lg:scale-x-100'>
      <Image
        src={Matr1Image}
        objectFit='contain'
        alt='matr first'
        placeholder='blur'
      />
    </div>

    <div className='flex flex-col px-8 max-w-xl mx-auto'>
      <h3 className='uppercase text-4xl md:text-7xl text-center md:text-left font-medium mb-8 md:mb-16'>
        Metaverse
      </h3>

      <p className='text-base md:text-lg mb-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut diam
        dictum morbi. Sit justo erat sit sit enim elit. Egestas fringilla
        dignissim congue ridiculus aenean sem sodales semper. Mattis risus,
        nunc, cursus lectus est et. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam ut diam dictum morbi. Sit justo erat sit sit
        enim elit.
      </p>
      <p className='text-base md:text-lg mb-6'>
        Egestas fringilla dignissim congue ridiculus aenean sem sodales semper.
        Mattis risus, nunc, cursus lectus est et..
      </p>

      <NukeLink className='flex self-start -ml-10' href='/'>
        More Info
      </NukeLink>
    </div>
  </section>
);
