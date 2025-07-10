import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// import { Book } from '@/types/Book';
// import { getPaperBooks } from '@/services/booksAPI';
// import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { useBookStore } from '@/store/useBookStore';
// import { BookLoader } from '@/components/ui/BookLoader/BookLoader';

export const LanguageSelector = () => {
  const navigate = useNavigate();
  const { currentBook: book, bookVariants } = useBookStore();
  const [selected, setSelected] = useState(book?.lang || '');
  //   const [isLoading, setIsLoading] = useState(false);

  if (!book) return null;

  const handleChange = (langCode: string) => {
    if (langCode === selected) return;
    setSelected(langCode);
    const match = bookVariants.find((b) => b.lang === langCode);

    if (match) {
      navigate(`/${match.type}/${match.slug}`);
    }
  };

  //   const getLabel = (code: string) => (code.toUpperCase() === 'UK' ? 'UA' : 'ENG');

  return (
    // <>
    //    {isLoading && (
    //      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
    //        <BookLoader />
    //      </div>
    //    )}

    <div className="flex gap-2">
      {book.langAvailable.map((lang) => {
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
    //  </>
  );
};
