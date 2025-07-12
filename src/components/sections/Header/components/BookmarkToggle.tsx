import { Languages, Sun } from 'lucide-react';
import { useState } from 'react';

export const BookmarkToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed top-16 left-10 z-50 flex items-center justify-center cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div
        className={`flex flex-col items-center justify-start text-white transition-all duration-500 ease-in-out bg-gradient-to-b bg-[#93785c] shadow-lg`}
        style={{
          width: '40px',
          height: isOpen ? '150px' : '56px',
          clipPath:
            'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 50% 90%, 25% 100%, 0 85%)',
        }}
      >
        {/* Кнопки з’являються тільки коли закладка розгорнута */}
        {isOpen && (
          <>
            <button
              onClick={(e) => e.stopPropagation()}
              className="mt-4 text-xl hover:scale-110 transition"
              title="Тема"
            >
              <Sun />
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              className="mt-2 text-sm hover:scale-110 transition"
              title="Мова"
            >
              <Languages />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
