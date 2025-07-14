import cn from 'classnames';
import { Settings, Sun } from 'lucide-react';
import { useState } from 'react';

export const BookmarkToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

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
        className={`flex flex-col items-center justify-start w-10 h-50 text-white bg-[#93785c] shadow-lg`}
        style={{
          clipPath:
            'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 50% 90%, 25% 100%, 0 85%)',
        }}
      >
        <>
          <button
            onClick={(e) => e.stopPropagation()}
            className="mt-5 text-xl hover:scale-110 transition cursor-pointer"
            title="Theme"
          >
            <Sun />
          </button>
          <button
            onClick={(e) => {
              setLanguage((prev) => (prev === 'EN' ? 'UA' : 'EN'));
              e.stopPropagation();
            }}
            className="mt-3 text-md font-bold hover:scale-110 transition cursor-pointer"
            title="Languages"
          >
            {language}
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
