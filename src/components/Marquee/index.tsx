import FastMarquee from "react-fast-marquee";

export const Marquee: React.FC = ({ children }) => (
  <FastMarquee
    gradient={false}
    speed={50}
    className='bg-[#BEFD37] before:hidden after:hidden overflow-hidden text-black font-medium text-2xl md:text-5xl space-x-4 p-3 uppercase'
  >
    {children} {children} {children} {children} {children} {children}
  </FastMarquee>
);
