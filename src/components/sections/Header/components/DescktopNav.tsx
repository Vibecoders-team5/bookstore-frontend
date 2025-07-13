import { cn } from '@/lib/utils';
import { NavList } from './NavList';

export const DesktopNav = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative flex items-center justify-center h-full uppercase text-white transition-colors duration-200 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-full after:origin-center after:transition-transform after:duration-300 after:bg-white',
      {
        'after:scale-x-100': isActive,
        'after:scale-x-0 hover:after:scale-x-100': !isActive,
      },
    );

  return (
    <nav className="hidden sm:flex items-center h-full">
      <NavList navLinkClass={navLinkClass} layout="horizontal" />
    </nav>
  );
};
