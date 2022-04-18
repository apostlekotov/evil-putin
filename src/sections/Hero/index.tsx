import Image from "next/image";
import { Countdown } from "@/components/Countdown";
import { HeroImage } from "@/assets/img";

export const Hero: React.FC = () => (
  <section className='h-screen sm:h-[90vh] max-h-[60rem] relative overflow-hidden'>
    <h1 className='sr-only'>Evil Putin™️</h1>

    <Image
      src={HeroImage}
      alt='hero'
      className='-z-20'
      objectFit='cover'
      layout='fill'
      sizes="(max-width: 500px) 1000px"
      quality={100}
      placeholder="blur"
      priority
    />

    <Countdown />
  </section>
);
