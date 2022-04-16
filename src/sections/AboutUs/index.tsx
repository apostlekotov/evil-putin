import Image from "next/image";
import { HornyHuiloImage, SadHuiloImage } from "@/assets/img";

export const AboutUs: React.FC = () => (
  <section className='flex flex-col relative items-center min-h-screen justify-center overflow-hidden'>
    <div className='md:absolute -rotate-90 md:rotate-0 max-w-sm md:max-w-none md:w-[40rem] lg:w-[56rem] right-0 md:right-auto md:left-0 md:-translate-x-[45%] top-0 lg:top-[-10%] self-end -z-10'>
      <Image
        src={HornyHuiloImage}
        objectFit='contain'
        alt='horny huilo'
        placeholder='blur'
      />
    </div>

    <div className='flex flex-col px-8 max-w-2xl xl:max-w-3xl mx-auto -mb-20 -mt-16 md:my-auto'>
      <h2 className='uppercase text-5xl md:text-7xl text-center md:text-left font-medium mb-8 md:mb-16'>
        About Us
      </h2>

      <p className='text-base md:text-lg mb-4'>
        Make Art Not War (MANW) was created to help the people of Ukraine. We
        aim to use the power of crypto and the communities within it to raise
        funds for Ukraine. We strive for peace in Ukraine and for a life without
        fear in our country. With every MANW NFT transaction, you will directly
        support Ukraine and its people which will directly receive 60% of the
        minting fee. This will happen automatically through our contract and
        will immediately be redirected to Ukraine’s official donation wallet.
      </p>
      <p className='text-base md:text-lg mb-6'>
        By minting our project, you donate money – and in exchange receive a
        valuable NFT that you can resell.
      </p>
    </div>

    <div className='md:absolute rotate-90 md:rotate-0 max-w-sm md:max-w-none md:w-[40rem] lg:w-[56rem] left-0 md:left-auto md:right-0 md:translate-x-[45%] bottom-0 md:bottom-auto lg:top-[-10%] self-start -z-10'>
      <Image
        src={SadHuiloImage}
        objectFit='contain'
        alt='sad huilo'
        placeholder='blur'
      />
    </div>
  </section>
);
