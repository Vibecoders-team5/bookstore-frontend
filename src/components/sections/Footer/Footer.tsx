import { Button } from '@/components/ui/button';
import { ChevronUpIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between w-full px-8 xl:px-36 py-8 gap-8 bg-[#493929] dark:bg-[#35291d] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <Link
        to="/"
        className="flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg"
      >
        <img
          src="/books/img/nice-books-logo.png"
          alt="nice-books logo"
          className="h-8"
        />
      </Link>

      <nav className="flex flex-col sm:flex-row justify-around items-start sm:items-center w-full max-w-[368px] h-8 gap-4 xl:gap-6 dark:text-white/80">
        <a
          className="uppercase text-white/80 hover:text-white"
          href="https://github.com/Vibecoders-team5/bookstore-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <Link
          to="/contacts"
          className="uppercase text-white/80 hover:text-white"
        >
          {t('contacts')}
        </Link>
        <Link to="/rights" className="uppercase text-white/80 hover:text-white">
          {t('rights')}
        </Link>
      </nav>

      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        variant="backToTop"
        className="self-center text-white/80  hover:text-white"
      >
        <span>{t('backToTop')}</span>
        <ChevronUpIcon size={16} />
      </Button>
    </footer>
  );
};
