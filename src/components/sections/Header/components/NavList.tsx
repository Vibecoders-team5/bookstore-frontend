import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavListProps {
  navLinkClass: ({ isActive }: { isActive: boolean }) => string;
  layout?: 'horizontal' | 'vertical';
}

export const NavList = ({
  navLinkClass,
  layout = 'horizontal',
}: NavListProps) => {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/paperback', label: 'Paper' },
    { to: '/kindle', label: 'Kindle' },
    { to: '/audiobook', label: 'Audiobook' },
  ];

  return (
    <ul
      className={cn(
        'h-full',
        layout === 'horizontal' ?
          'flex items-center gap-8 md:gap-16'
        : 'flex flex-col items-center gap-8',
      )}
    >
      {navLinks.map(({ to, label }) => (
        <li
          key={to}
          className={cn(
            'list-none relative group',
            layout === 'horizontal' ? 'flex items-center h-full' : 'h-7 w-fit',
          )}
        >
          <NavLink to={to} className={navLinkClass}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
