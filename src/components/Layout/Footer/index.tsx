import { FooterBGImage, LogoImage } from "@/assets/img";
import { Links } from "@/components/Links";
import { links } from "@/data/links";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => (
  <footer className='flex flex-col-reverse items-start px-8 mt-8 md:mt-16 relative w-full 2xl:max-w-screen-2xl mx-auto justify-between overflow-x-hidden'>
    <div className='w-[170%] md:w-full md:contents scale-110 -ml-40 md:-mr-0'>
      <Image src={FooterBGImage} alt='footer' />
    </div>

    <div className='flex flex-col w-full space-y-8 md:space-y-0 mb-10 md:mb-0'>
      <div className='flex justify-between'>
        <Link href='/'>
          <a className='flex md:absolute left-8 bottom-8 md:bottom-16 h-12 md:h-20 xl:h-24'>
            <Image
              src={LogoImage}
              alt='evil putin logo'
              objectFit='contain'
              objectPosition='left'
              priority
            />
          </a>
        </Link>

        <div className='flex items-center space-x-4 lg:space-x-10 md:pr-8 md:pt-16 md:absolute top-0 right-0 md:pointer-events-auto'>
          <Links links={links} className='h-6 w-6 md:h-10 md:w-10' />
        </div>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-8 md:pl-8 md:pt-16 md:absolute top-0 left-0 font-bold text-sm md:text-lg lg:text-2xl mx-auto'>
        <div className='flex flex-col space-y-4'>
          <Link href='/#metahero'>
            <a className='uppercase hover:text-[#BEFD37] whitespace-nowrap transition ease-in-out delay-200'>
              Metahero
            </a>
          </Link>
          <Link href='/#'>
            <a className='uppercase hover:text-[#BEFD37] whitespace-nowrap transition ease-in-out delay-200'>
              Collection
            </a>
          </Link>
        </div>
        <div className='flex flex-col space-y-4 text-right md:text-left'>
          <Link href='/#roadmap'>
            <a className='uppercase hover:text-[#BEFD37] whitespace-nowrap transition ease-in-out delay-200'>
              Roadmap
            </a>
          </Link>
          <Link href='/#about'>
            <a className='uppercase hover:text-[#BEFD37] whitespace-nowrap transition ease-in-out delay-200'>
              About
            </a>
          </Link>
        </div>
        <div className='flex flex-col space-y-4 text-right md:text-left'>
          <Link href='/#'>
            <a className='uppercase hover:text-[#BEFD37] whitespace-nowrap transition ease-in-out delay-200'>
              Team
            </a>
          </Link>
          <Link href='/#faq'>
            <a className='uppercase hover:text-[#BEFD37] whitespace-nowrap transition ease-in-out delay-200'>
              FAQ
            </a>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
