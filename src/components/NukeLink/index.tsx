import Image from "next/image";
import Link from "next/link";
import { NukeImage } from "@/assets/img";

type Props = {
  href: string;
  className?: string;
  secondary?: boolean;
};

export const NukeLink: React.FC<Props> = ({
  href,
  className,
  secondary,
  children,
}) => (
  <Link href={href}>
    <a
      className={`text-center relative h-20 w-[216px] md:w-[337px] md:h-[106px] transition-transform ease-out duration-200 hover:scale-105 active:scale-95 ${
        secondary ? "saturate-0" : ""
      } ${className ? className : ""}`}
    >
      <div className="absolute left-[52px] md:left-[69px] top-1/2 -translate-y-1/2 bg-white w-[10px] h-[10px] md:w-[18px] md:h-[18px]"></div>
      <span className='uppercase text-base md:text-lg font-bold absolute left-0 right-0 top-1/2 -translate-y-1/2 pl-[66px] pr-[34px] md:pl-[104px] md:pr-[52px] mx-auto'>
        {children}
      </span>
      <Image
        src={NukeImage}
        alt='nuke'
        className='-z-10'
        objectFit='contain'
        layout='fill'
        priority
      />
    </a>
  </Link>
);
