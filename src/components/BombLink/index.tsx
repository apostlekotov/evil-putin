import { BombImage } from "@/assets/img";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  className?: string;
  secondary?: boolean;
};

export const BombLink: React.FC<Props> = ({
  href,
  className,
  secondary,
  children,
}) => (
  <Link href={href}>
    <a
      className={`text-center relative transition-transform ease-out duration-200 hover:scale-105 active:scale-95 ${
        secondary ? "saturate-0" : ""
      } ${className ? className : ""}`}
    >
      <span className='uppercase text-lg font-bold absolute left-0 right-0 top-1/2 -translate-y-1/2 pl-[104px] pr-[52px] mx-auto'>
        {children}
      </span>
      <Image src={BombImage} alt='bomb' className='-z-10' />
    </a>
  </Link>
);
