import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Імпортуємо motion та AnimatePresence

// Імпортуємо зображення
import ConstitutionDay from '@/Pages/HomePage/photos/Constitution-day.png';
import Constitution from '@/Pages/HomePage/photos/Constitution.png';

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [ConstitutionDay, Constitution];

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[300px] overflow-hidden rounded-2xl bg-gray-200">
        {' '}
        {/* Додав нейтральний фон */}
        <AnimatePresence initial={false} mode="wait">
          {' '}
          {/* initial={false} для запобігання анімації при першому рендері */}
          <motion.div
            key={currentSlide} // Ключ змінюється при зміні слайда, змушуючи AnimatePresence реагувати
            initial={{ opacity: 0 }} // Початковий стан при вході
            animate={{ opacity: 1 }} // Кінцевий стан
            exit={{ opacity: 0 }} // Стан при виході
            transition={{ duration: 0.7, ease: 'easeInOut' }} // Тривалість та функція переходу
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            // Framer Motion сам керуватиме z-index та розміщенням для плавного переходу
          >
            <img
              src={images[currentSlide]} // Рендеримо тільки поточне зображення
              // alt={Slide ${currentSlide + 1}}
              className="w-full h-full object-contain rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Кнопка назад */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-all ease-out z-20"
      >
        ←
      </button>

      {/* Кнопка вперед */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-all ease-out z-20"
      >
        →
      </button>
    </div>
  );
}
