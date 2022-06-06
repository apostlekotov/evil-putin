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
      </div>
    </div>

    <hr className='border-t-black py-1' />

    <div className='w-full h-full 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 2xl:px-0 pt-8 pb-20 md:pb-40'>
      <span className='uppercase text-6xl font-medium block md:hidden mt-4'>
        Roadmap
      </span>

      {/* <p className='text-sm lg:text-xl max-w-md md:max-w-3xl mt-8 md:mt-0'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At faucibus
        nibh faucibus aenean montes, id. Nunc nunc a vitae sollicitudin. Eu eget
        tellus quam eget. Velit magnis amet tellus senectus venenatis, tortor
        ipsum, in.
      </p> */}

      <div className='flex flex-col lg:flex-row justify-start gap-y-12 gap-x-16 mt-16'>
        <div className='grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-6 lg:gap-y-12 lg:gap-x-16 mb-auto'>
          <div className='flex flex-col space-y-3 lg:space-y-6'>
            <span className='uppercase text-2xl md:text-3xl font-medium'>
              Birth
            </span>
            <ul className='text-sm lg:text-xl space-y-1 max-w-md'>
              <li className='flex gap-1'>
                <span>01.</span> Team expansion
              </li>
              <li className='flex gap-1'>
                <span>02.</span> Material Building
              </li>
              <li className='flex gap-1'>
                <span>03.</span> EvilPutin NFT Creation
              </li>
              <li className='flex gap-1'>
                <span>04.</span> Website creation
              </li>
              <li className='flex gap-1'>
                <span>05.</span> Marketing strategy development
              </li>
              <li className='flex gap-1'>
                <span>06.</span> Partnership plan development
              </li>
            </ul>
          </div>
          <div className='flex flex-col space-y-3 lg:space-y-6'>
            <span className='uppercase text-2xl md:text-3xl font-medium'>
              Childhood
            </span>
            <ul className='text-sm lg:text-xl space-y-1 max-w-md'>
              <li className='flex gap-1'>
                <span>01.</span> Social media establishment
              </li>
              <li className='flex gap-1'>
                <span>02.</span> Marketing efforts
              </li>
              <li className='flex gap-1'>
                <span>03.</span> Establishing partners
              </li>
              <li className='flex gap-1'>
                <span>04.</span> Website launch
              </li>
              <li className='flex gap-1'>
                <span>05.</span> EvilPutin NFT Mint
              </li>
              <li className='flex gap-1'>
                <span>06.</span> Donation to Ukraine
              </li>
            </ul>
          </div>
          <div className='flex flex-col space-y-3 lg:space-y-6'>
            <span className='uppercase text-2xl md:text-3xl font-medium'>
              Years in the KGB
            </span>
            <ul className='text-sm lg:text-xl space-y-1 max-w-md'>
              <li className='flex gap-1'>
                <span>01.</span> 1st Serum Airdrop
              </li>
              <li className='flex gap-1'>
                <span>02.</span> Comic Development begins
              </li>
              <li className='flex gap-1'>
                <span>03.</span> Partnership Expansion
              </li>
              <li className='flex gap-1'>
                <span>04.</span> 2nd Serum Drop
              </li>
              <li className='flex gap-1'>
                <span>05.</span> Metaverse Parcel Purchase for the community
              </li>
              <li className='flex gap-1'>
                <span>06.</span> Website V2.0
              </li>
            </ul>
          </div>
          <div className='flex flex-col space-y-3 lg:space-y-6'>
            <span className='uppercase text-2xl md:text-3xl font-medium'>
              Becoming President
            </span>
            <ul className='text-sm lg:text-xl space-y-1 max-w-md'>
              <li className='flex gap-1'>
                <span>01.</span> 3rd Serum Drop
              </li>
              <li className='flex gap-1'>
                <span>02.</span> Comic launch
              </li>
              <li className='flex gap-1'>
                <span>03.</span> Community Live Events
              </li>
              <li className='flex gap-1'>
                <span>04.</span> 4th and Last Serum Drop
              </li>
              <li className='flex gap-1'>
                <span>05.</span> Start of game development
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col space-y-3 lg:space-y-6'>
          <span className='uppercase text-2xl md:text-3xl font-medium'>
            Dictatorship &amp; <br /> Inevitable Demise
          </span>
          <ul className='text-sm lg:text-xl space-y-1 max-w-md'>
            <li className='flex gap-1'>
              <span>01.</span> Team expansion
            </li>
            <li className='flex gap-1'>
              <span>02.</span> PrettyZelensky NFT Drop
            </li>
            <li className='flex gap-1'>
              <span>03.</span> Game Beta Launch
            </li>
            <li className='flex gap-1'>
              <span>04.</span> Public events
            </li>
            <li className='flex gap-1'>
              <span>05.</span> NFT integration in the comics
            </li>
            <br />
            <li className='flex gap-1'>
              <span>01.</span> Game release
            </li>
            <li className='flex gap-1'>
              <span>02.</span> Unique in-game event announcement
            </li>
            <li className='flex gap-1'>
              <span>03.</span> Live event visits
            </li>
            <li className='flex gap-1'>
              <span>04.</span> Brand building
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
