import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface NavListProps {
  navLinkClass: ({ isActive }: { isActive: boolean }) => string;
  layout?: 'horizontal' | 'vertical';
}

export const NavList = ({
  navLinkClass,
  layout = 'horizontal',
}: NavListProps) => {
  const { t } = useTranslation();

  const navLinks = [
    { to: '/', label: t('navigation.home') },
    { to: '/paperback', label: t('books.paper') },
    { to: '/kindle', label: t('books.kindle') },
    { to: '/audiobook', label: t('books.audiobook') },
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
