import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";
import { useToggle } from "@/hooks/useToggle";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { LogoImage } from "@/assets/img";
import { Links } from "@/components/Links";
import { links } from "@/data/links";

const navLinkAnimation: Variants = {
  hidden: {
    x: -32,
    opacity: 0,
  },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.15, ease: "easeInOut" },
  }),
};

export const Header: React.FC = () => {
  const [open, toggle, setOpen] = useToggle();
  const [small, setSmall] = useState(false);

  const windowWidth = useWindowWidth()!;
  const initialNavbar = useMemo(
    () => (windowWidth < 767 ? "hidden" : "visible"),
    [windowWidth]
  );

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
      ${open ? "h-full" : small ? "h-[96px] lg:h-[144px] xl:h-[160px]" : "h-0"} 
      ${small || open ? "opacity-100 bg-black" : ""}`}
    >
      <div
        className={`flex items-center relative w-full 2xl:max-w-screen-2xl mx-auto justify-between transition-[padding] ease-in-out delay-200 
        ${
          small && !open
            ? "px-4 xl:px-6 py-6 md:py-8"
            : "px-8 xl:px-8 py-8 md:py-16"
        }`}
      >
        <div>
          <Link href='/'>
            <a className='flex w-[88px] h-12 lg:w-[146px] lg:h-20 xl:w-[175px] xl:h-24'>
              <Image
                src={LogoImage}
                alt='evil putin logo'
                objectFit='contain'
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
          <span />
          <span />
          <span />
        </div>

        <motion.nav
          animate={open ? "visible" : initialNavbar}
          className={`flex flex-col space-y-10 md:text-center font-bold text-4xl leading-9 md:leading-8 fixed px-8 md:px-0 w-full md:w-auto top-36 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:space-y-0 md:flex md:flex-row md:text-lg md:opacity-100 md:space-x-4 lg:space-x-9 md:pointer-events-auto md:absolute transition ease-out delay-200 z-10 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Link href='/#metahero' passHref>
            <motion.a
              custom={1}
              variants={navLinkAnimation}
              className='uppercase md:hover:text-primary focus:text-primary active:text-primary whitespace-nowrap transition ease-in-out delay-200'
            >
              Metahero
            </motion.a>
          </Link>
          <Link href='/#' passHref>
            <motion.a
              custom={2}
              variants={navLinkAnimation}
              className='uppercase md:hover:text-primary focus:text-primary active:text-primary whitespace-nowrap transition ease-in-out delay-200'
            >
              Collection
            </motion.a>
          </Link>
          <Link href='/#roadmap' passHref>
            <motion.a
              custom={3}
              variants={navLinkAnimation}
              className='uppercase md:hover:text-primary focus:text-primary active:text-primary whitespace-nowrap transition ease-in-out delay-200'
            >
              Roadmap
            </motion.a>
          </Link>
          <Link href='/#about' passHref>
            <motion.a
              custom={4}
              variants={navLinkAnimation}
              className='uppercase md:hover:text-primary focus:text-primary active:text-primary whitespace-nowrap transition ease-in-out delay-200'
            >
              About
            </motion.a>
          </Link>
          <Link href='/#faq' passHref>
            <motion.a
              custom={5}
              variants={navLinkAnimation}
              className='uppercase md:hover:text-primary focus:text-primary active:text-primary whitespace-nowrap transition ease-in-out delay-200'
            >
              FAQ
            </motion.a>
          </Link>
        </motion.nav>

        <div className='hidden md:flex items-center space-x-4 lg:space-x-10 relative bottom-0 left-auto -translate-x-0 transition ease-out delay-200'>
          <Links links={links} className='w-6 h-6 lg:w-10 lg:h-10' />
        </div>
      </div>
    </header>
  );
};
