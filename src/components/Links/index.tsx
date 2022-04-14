import { socialIcons } from "@/assets/svg";
import { LinkType } from "types";

type Props = {
  links: LinkType[];
  className?: string;
};

export const Links: React.FC<Props> = ({ links, className }) => (
  <>
    {links.map((link, i) => (
      <a
        href={link.url}
        key={i}
        className={`fill-white hover:fill-[#BEFD37] hover:opacity-100 transition ease-out delay-200 ${
          className || ""
        }`}
        target='_blank'
        rel='noopener noreferrer nofollow'
      >
        {socialIcons[link.label]}
        <span className='sr-only'>{link.label}</span>
      </a>
    ))}
  </>
);
