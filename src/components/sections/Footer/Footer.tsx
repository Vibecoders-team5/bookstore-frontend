import { ChevronUpIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between w-full px-8 xl:px-36 py-8 gap-8 bg-white text-[#89939A] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
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

      <nav className="flex flex-col sm:flex-row justify-around items-start sm:items-center w-full max-w-[368px] gap-4 xl:gap-6">
        <a
          className="uppercase hover:text-[#313237]"
          href="https://github.com/Vibecoders-team5/bookstore-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <Link to="/contacts" className="uppercase hover:text-[#313237]">
          Contacts
        </Link>
        <Link to="/rights" className="uppercase hover:text-[#313237]">
          Rights
        </Link>
      </nav>

      <button
        aria-label="Back to top"
        className="flex items-center self-center gap-4 shrink-0  cursor-pointer uppercase text-[#89939A] hover:text-[#313237] transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span>Back to top</span>
        <ChevronUpIcon size={16} />
      </button>
    </footer>
  );
};
