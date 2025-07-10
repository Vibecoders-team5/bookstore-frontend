import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// import { Book } from '@/types/Book';
// import { getPaperBooks } from '@/services/booksAPI';
// import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { useBookStore } from '@/store/useBookStore';

export const LanguageSelector = () => {
  const navigate = useNavigate();
  const { currentBook: book, bookVariants } = useBookStore();
  const [selected, setSelected] = useState(book?.lang || '');

  if (!book) return null;

  const handleChange = (langCode: string) => {
    if (langCode === selected) return;
    setSelected(langCode);

    const match = bookVariants.find((b) => b.lang === langCode);
    if (match) {
      navigate(`/${match.type}/${match.slug}`);
    }
  };

  return (
    <div className="flex gap-2">
      {book.langAvailable.map((lang) => {
        const label = lang.toUpperCase() === 'UK' ? 'UA' : 'ENG';
        return (
          <Button
            key={lang}
            variant={selected === lang ? 'selected' : 'default'}
            size="sm"
            onClick={() => handleChange(lang)}
            className={cn(
              'w-[45px] h-[35px] px-0 py-0 text-[14px] leading-6',
              selected !== lang && 'text-custom-textPrimary',
            )}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
};
