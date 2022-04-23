import Image from "next/image";
import { RoadmapBGImage } from "@/assets/img";

export const Roadmap: React.FC = () => (
  <section className='bg-primary text-black overflow-clip'>
    <div className='relative h-56 md:min-h-[415px] md:h-auto overflow-x-clip'>
      <div className='absolute overflow-clip inset-0 -z-0'>
        <Image
          src={RoadmapBGImage}
          alt='roadmap huilo'
          className='scale-[1.3] origin-right md:scale-100'
          objectFit='cover'
          layout='fill'
        />
      </div>

      <div
        id='roadmap'
        className='flex items-center absolute inset-0 2xl:max-w-screen-2xl -mt-28 pt-28 md:-mt-32 md:pt-32 mx-auto px-4 md:px-8 2xl:px-0'
      >
        <h4 className='uppercase text-8xl font-medium hidden md:block'>
          Roadmap
        </h4>

        <div className='flex justify-between absolute left-0 right-0 bottom-0 translate-y-full md:translate-y-[1px] border-t md:border-b md:border-t-0 border-t-black md:border-b-black py-1 mx-4 md:mx-8 2xl:mx-0'>
          <div className='flex items-baseline md:space-x-2'>
            <div className='bg-black w-[18px] h-[18px] hidden md:block'></div>
            <span className='uppercase text-base md:text-2xl'>24.02.2022</span>
          </div>

          <div className='flex items-baseline space-x-2'>
            <div className='bg-black w-3 h-3 md:w-[18px] md:h-[18px]'></div>
            <span className='uppercase text-base md:text-2xl'>Till now</span>
          </div>
        </div>
      </div>
    </div>

    <div className='w-full h-full 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 2xl:px-0 pt-8 pb-20 md:pb-40'>
      <span className='uppercase text-6xl font-medium block md:hidden mt-4'>
        Roadmap
      </span>

      <p className='text-sm md:text-lg max-w-md md:max-w-3xl mt-8 md:mt-0'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At faucibus
        nibh faucibus aenean montes, id. Nunc nunc a vitae sollicitudin. Eu eget
        tellus quam eget. Velit magnis amet tellus senectus venenatis, tortor
        ipsum, in.
      </p>

      <div className='flex flex-col md:flex-row justify-start space-y-12 md:space-y-0 md:space-x-12 mt-16'>
        <div className='grid grid-cols-2 grid-rows-2 gap-6 md:gap-12 mb-auto'>
          <div className='flex flex-col space-y-3 md:space-y-6'>
            <span className='uppercase text-3xl md:text-4xl font-medium'>
              57
            </span>
            <p className='text-sm md:text-lg max-w-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
              faucibus nibh faucibus aenean montes, id. Nunc nunc a vitae
              sollicitudin. Eu eget tellus quam eget. Velit magnis amet tellus
              senectus venenatis, tortor ipsum, in.
            </p>
          </div>
          <div className='flex flex-col space-y-3 md:space-y-6'>
            <span className='uppercase text-3xl md:text-4xl font-medium'>
              20000+
            </span>
            <p className='text-sm md:text-lg max-w-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
              faucibus nibh faucibus aenean montes, id. Nunc nunc a vitae
              sollicitudin. Eu eget tellus quam eget. Velit magnis amet tellus
              senectus venenatis, tortor ipsum, in.
            </p>
          </div>
          <div className='flex flex-col space-y-3 md:space-y-6'>
            <span className='uppercase text-3xl md:text-4xl font-medium'>
              58
            </span>
            <p className='text-sm md:text-lg max-w-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
              faucibus nibh faucibus aenean montes, id. Nunc nunc a vitae
              sollicitudin. Eu eget tellus quam eget. Velit magnis amet tellus
              senectus venenatis, tortor ipsum, in.
            </p>
          </div>
          <div className='flex flex-col space-y-3 md:space-y-6'>
            <span className='uppercase text-3xl md:text-4xl font-medium'>
              2000+
            </span>
            <p className='text-sm md:text-lg max-w-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
              faucibus nibh faucibus aenean montes, id. Nunc nunc a vitae
              sollicitudin. Eu eget tellus quam eget. Velit magnis amet tellus
              senectus venenatis, tortor ipsum, in.
            </p>
          </div>
        </div>

        <div className='flex flex-col space-y-3 md:space-y-6'>
          <span className='uppercase text-3xl md:text-4xl font-medium'>3</span>
          <p className='text-sm md:text-lg max-w-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At faucibus
            nibh faucibus aenean montes, id. Nunc nunc a vitae sollicitudin. Eu
            eget tellus quam eget. Velit magnis amet tellus senectus venenatis,
            tortor ipsum, in.
          </p>
          <p className='text-sm md:text-lg max-w-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At faucibus
            nibh faucibus aenean montes, id. Nunc nunc a vitae sollicitudin. Eu
            eget tellus quam eget. Velit magnis amet tellus senectus venenatis,
            tortor ipsum, in.
          </p>
          <p className='text-sm md:text-lg max-w-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At faucibus
            nibh faucibus aenean montes, id. Nunc nunc a vitae sollicitudin. Eu
            eget tellus quam eget. Velit magnis amet tellus senectus venenatis,
            tortor ipsum, in.
          </p>
        </div>
      </div>
    </div>
  </section>
);
