import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useBookStore } from '@/store/useBookStore';

export const LanguageSelector = () => {
  const { currentBook: book, bookVariants, setCurrentBook } = useBookStore();

  const [selected, setSelected] = useState(book?.lang || '');

  if (!book) return null;

  const handleChange = (langCode: string) => {
    if (langCode === selected) return;
    setSelected(langCode);

    const match = bookVariants.find((b) => b.lang === langCode);

    if (match) {
      setCurrentBook(match);
      window.history.replaceState(null, '', `/${match.type}/${match.slug}`);
    }
  };

  return (
    <div className="flex gap-2">
      {book.langAvailable.map((lang: string) => {
        const label = lang.toUpperCase() === 'UK' ? 'UA' : 'ENG';
        const isSelected = selected === lang;

        return (
          <Button
            key={lang}
            variant={isSelected ? 'selected' : 'default'}
            size="bookPageLangButton"
            onClick={() => handleChange(lang)}
            className={cn(
              'w-[45px] h-[35px] px-0 py-0 text-[14px] leading-6',
              !isSelected && 'text-custom-textPrimary',
            )}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
};
