import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LogoImage } from "@/assets/img";
import { Links } from "@/components/Links";
import { useToggle } from "@/hooks/useToggle";
import { links } from "@/data/links";
import Image from "next/image";

export const Header: React.FC = () => {
  const [open, toggle, setOpen] = useToggle();
  const [small, setSmall] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    const handleScroll = () => setSmall(window.pageYOffset > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`opacity-100 fixed w-full top-0 left-0 right-0 transition-[background-color,backdrop-filter,height,padding] ease-in-out delay-200 z-10 
      ${open ? "h-full" : ""} 
      ${small || open ? "opacity-100 bg-black" : "bg-black/0"}`}
    >
      <div
        className={`flex items-center w-full 2xl:max-w-screen-2xl mx-auto justify-between transition-[padding] ease-in-out delay-200 
        ${small ? "px-4 xl:px-6 py-6 md:py-8" : "px-8 xl:px-8 py-8 md:py-16"}`}
      >
        <div>
          <Link href='/'>
            <a className='flex h-12 md:h-20 xl:h-24'>
              <Image
                src={LogoImage}
                alt='evil putin logo'
                objectFit='contain'
                objectPosition='left'
                priority
              />
            </a>
          </Link>
        </div>

        <div
          className={`block md:hidden ${open ? "open" : ""}`}
          id='toggler'
          onClick={toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav
          className={`flex flex-col space-y-8 text-center font-bold text-2xl leading-6 md:leading-8 fixed px-12 md:px-0 w-full md:w-auto top-36 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:space-y-0 md:flex md:flex-row md:text-lg md:opacity-100 md:space-x-4 lg:space-x-9 md:pointer-events-auto md:absolute transition ease-out delay-200 z-10 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
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
          <Link href='/#faq'>
            <a className='uppercase hover:text-[#BEFD37] whitespace-nowrap transition ease-in-out delay-200'>
              FAQ
            </a>
          </Link>
        </nav>

        <div
          className={`flex items-center space-x-10 sm:space-x-4 lg:space-x-10 fixed bottom-8 left-1/2 -translate-x-1/2 md:relative md:bottom-0 md:left-auto md:-translate-x-0 md:opacity-100 md:pointer-events-auto transition ease-out delay-200 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Links links={links} className="w-10 h-10" />
        </div>
      </div>
    </header>
  );
};
