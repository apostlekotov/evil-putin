import Image from "next/image";
import { Countdown } from "@/components/Countdown";
import { HeroImage } from "@/assets/img";

export const Hero: React.FC = () => (
  <section className='h-screen sm:h-[90vh] max-h-[60rem] relative'>
    <h1 className='sr-only'>Evil Putin™️</h1>

    <Image
      src={HeroImage}
      alt='hero'
      className='-z-20'
      objectFit='cover'
      layout='fill'
      quality={100}
      priority
    />

    <Countdown />
  </section>
);
