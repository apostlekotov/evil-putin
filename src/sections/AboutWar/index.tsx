import Image from "next/image";
import { NukesBGImage, UkraineMapImage } from "@/assets/img";

export const AboutWar: React.FC = () => (
  <section className='flex items-center min-h-[110vh] relative overflow-hidden'>
    <div className='absolute scale-[2.5] md:scale-105 left-0 right-0 top-1/2 -translate-y-1/2 opacity-70 -z-10'>
      <Image
        src={UkraineMapImage}
        objectFit='cover'
        alt='huilo'
        placeholder='blur'
      />
    </div>

    <div className='absolute inset-0 origin-top md:origin-center translate-x-[80%] md:translate-x-1/4 translate-y-[5vh] md:translate-y-0 scale-[2.5] md:scale-125 rotate-[28deg] md:rotate-[30deg] -z-10'>
      <Image
        src={NukesBGImage}
        objectFit='contain'
        alt='huilo'
        placeholder='blur'
      />
    </div>

    <div className='flex flex-col w-full 2xl:max-w-screen-2xl mx-auto my-16 md:my-0 px-8'>
      <h2 className='uppercase text-4xl md:text-7xl font-medium mb-8 md:mb-16'>
        War in Ukraine
      </h2>

      <p className='text-sm max-w-2xl md:text-lg mb-4'>
        The Russian leader&apos;s initial aim was to overrun Ukraine and depose
        its government in just 3 days. Launching the invasion on 24 February he
        told the Russian people his goal was to &quot;demilitarise and de-Nazify
        Ukraine&quot;, to protect people subjected to what he called eight years
        of bullying and genocide by Ukraine&apos;s government.
      </p>
      <p className='text-sm max-w-2xl md:text-lg mb-8'>
        However, the expectations of the Russians that they would be met here
        with smiles and flowers did not come true and their plans to capture the
        capital Kiev failed.{" "}
        <strong>
          And now they only see us smiling when they run away in panic from our
          strong and invincible army.
        </strong>
      </p>
      <p className='text-sm max-w-2xl md:text-lg mb-6'>
        We really want to stop the massacre of civilians in Ukraine who lived
        their happy lives and destruction of our beautiful cities. You have an
        opportunity to help Ukrainian people in the struggle for their land and
        support all the victims of this monstrous war.
      </p>
    </div>
  </section>
);
