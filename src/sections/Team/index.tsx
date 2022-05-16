import Image from "next/image";
import { TeamImage } from "@/assets/img";

export const Team: React.FC = () => (
  <section id='team' className='flex flex-col gap-8 lg:flex-row items-center min-h-[90vh]'>
    <div className='flex flex-col px-8 -mt-36 pt-36 max-w-xl mx-auto'>
      <h2 className='uppercase text-7xl font-medium mb-8 md:mb-16'>Team</h2>

      <p className='text-lg mb-4'>
        EvilPutin was created by a young team of project developers, marketing
        experts, and crypto enthusiasts who have been working in the crypto
        space for at least four years on average.
      </p>
      <p className='text-lg mb-6'>
        Most of the team is based in Ukraine and all of the team was living in
        Ukraine before the war started. Making the current issue of a maniacal
        dictator more painful and close to the heart.
      </p>
    </div>

    <div className='flex relative lg:self-end max-w-lg lg:max-w-3xl items-end justify-center w-full h-[80vh] lg:scale-110 origin-bottom-right'>
      <Image src={TeamImage} objectFit='contain' layout="fill" objectPosition="bottom" alt='team' placeholder='blur' quality={100} />
    </div>
  </section>
);
