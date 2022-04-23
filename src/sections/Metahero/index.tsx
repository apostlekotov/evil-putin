import Image from "next/image";
import { NukeLink } from "@/components/NukeLink";
import { HandImage } from "@/assets/img";

export const Metahero: React.FC = () => (
  <section
    id='metahero'
    className='flex flex-col-reverse lg:flex-row items-center -mt-24 pt-36'
  >
    <div className='pr-4 -mb-2 mt-auto lg:h-auto overflow-hidden lg:pr-0 max-w-3xl self-start lg:max-w-3xl relative'>
      <Image
        src={HandImage}
        objectFit='contain'
        alt='huilo'
        placeholder='blur'
      />
    </div>

    <div className='flex flex-col px-8 max-w-xl mx-auto'>
      <h2 className='uppercase text-7xl font-medium mb-8 md:mb-16'>Putin</h2>

      <p className='text-lg mb-4'>
        Butcher, dictator, war criminal – that is all about Putin, whose power
        is built on lies and violence. KGB officer in past with anti-democratic
        and brutal mentality. Two decades of Putin&apos;s authoritarian rule
        have made the right of speech and freedom in the country all but
        impossible. He is responsible for so many crimes and a huge amount of
        spilled blood.
      </p>
      <p className='text-lg mb-6'>
        However, every crime has a punishment. To let the truth shine, we made
        his face the one that raises funds for the people that he is trying to
        destroy. There will be{" "}
        <strong>
          10’000 unique EvilPutin’s with different evil attributes
        </strong>{" "}
        that You can get by supporting Ukraine.
      </p>

      <NukeLink className='flex self-start -ml-10 lg:ml-0 lg:self-end' href='/'>
        More Info
      </NukeLink>
    </div>
  </section>
);
