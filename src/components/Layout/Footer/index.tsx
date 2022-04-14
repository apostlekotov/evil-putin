import { Links } from "@/components/Links";
import { links } from "@/data/links";

export const Footer: React.FC = () => (
  <footer className='flex justify-between bg-black'>
    <span className='text-white text-sm opacity-60'>
      MANW 2022. All right reserve
    </span>

    <div className='flex items-center space-x-6 transition ease-out delay-200'>
      <Links links={links} className='opacity-60' />
    </div>
  </footer>
);
