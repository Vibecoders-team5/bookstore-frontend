import { useThemeStore } from '@/store/useThemeStore';
import clsx from 'clsx';
import { Moon, Settings, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BookmarkToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();

  const langMap = {
    en: 'EN',
    uk: 'UA',
  };

  const languageToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
    e.stopPropagation();
  };

  return (
    <div
      className={clsx(
        'fixed flex right-3 sm:right-7 lg:right-10 z-49 items-center justify-center transition-all duration-500 ease-in-out cursor-pointer',
        { '-top-13 lg:-top-9': !isOpen },
        { 'top-8 sm:top-12 lg:top-16 animate-drop-in': isOpen },
      )}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div
        className={`flex flex-col items-center justify-start w-8 h-40 sm:w-10 sm:h-50 text-white bg-[#665d4b] shadow-lg`}
        style={{
          clipPath:
            'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 50% 90%, 25% 100%, 0 85%)',
        }}
      >
        <button
          aria-label="Toggle theme"
          className="mt-5 text-xl hover:scale-110 transition cursor-pointer"
          title={t('ui.theme')}
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
          onClick={(e) => languageToggle(e)}
          className="mt-3 text-md font-bold hover:scale-110 transition cursor-pointer"
          title={t('ui.language')}
        >
          {langMap[i18n.language as 'en' | 'uk']}
        </button>

        <button
          className="mt-7 sm:mt-13 text-sm transition-transform duration-700 ease-in-out cursor-pointer hover:rotate-360"
          title={t('ui.settings')}
        >
          <Settings />
        </button>
      </div>
    </div>
  );
};
