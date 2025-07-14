import { useThemeStore } from '@/store/useThemeStore';
import cn from 'classnames';
import { Moon, Settings, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BookmarkToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const languageToggle = (
    e: React.MouseEvent<HTMLButtonElement>,
    lang: 'ua' | 'en',
  ) => {
    i18n.changeLanguage(lang);
    e.stopPropagation();
  };

  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      className={cn(
        'hidden fixed right-7 lg:right-10 z-49 sm:flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer',
        { '-top-13 lg:-top-9': !isOpen },
        { 'top-12 lg:top-16 animate-drop-in': isOpen },
      )}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div
        className={`flex flex-col items-center justify-start w-10 h-50 text-white bg-[#665d4b] shadow-lg`}
        style={{
          clipPath:
            'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 50% 90%, 25% 100%, 0 85%)',
        }}
      >
        <>
          <button
            aria-label="Toggle theme"
            className="mt-5 text-xl hover:scale-110 transition cursor-pointer"
            title="Theme"
            onClick={(e) => {
              toggleTheme();
              e.stopPropagation();
            }}
          >
            {theme === 'light' ?
              <Sun />
            : <Moon />}
          </button>

          <button
            onClick={(e) =>
              languageToggle(e, i18n.language === 'en' ? 'ua' : 'en')
            }
            className="mt-3 text-md font-bold hover:scale-110 transition cursor-pointer"
            title="Languages"
          >
            {i18n.language.toUpperCase()}
          </button>

          <button
            className="mt-13 text-sm transition-transform duration-700 ease-in-out cursor-pointer hover:rotate-360"
            title="Settings"
          >
            <Settings />
          </button>
        </>
      </div>
    </div>
  );
};
