import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { Book } from '@/types/Book';
import { getPaperBooks } from '@/services/booksAPI';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';

type Props = {
  book: Book;
};

export const LanguageSelector = ({ book }: Props) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(book.lang);
  const [isLoading, setIsLoading] = useState(false);
  //   const currentLang = book.lang;

  const handleChange = async (langCode: string) => {
    //  if (langCode === currentLang) return;
    if (selected === langCode) return;

    setIsLoading(true);
    setSelected(langCode);

    //  const newSlug = `${book.namespaceId}-${langCode}-${book.type}`;
    //  navigate(`/${book.type}/${newSlug}`);
    try {
      const books = await getPaperBooks();
      const matchedBook = books.find(
        (b) => b.namespaceId === book.namespaceId && b.lang === langCode,
      );

      if (matchedBook) {
        navigate(`/${matchedBook.type}/${matchedBook.slug}`);
      }
    } catch (error) {
      console.error('Error switching language:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getLabel = (code: string) =>
    code.toUpperCase() === 'UK' ? 'UA' : 'ENG';

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
          <BookLoader />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {book.langAvailable.map((langCode) => {
            //   const isSelected = langCode === currentLang;
            const label = getLabel(langCode);

            return (
              <Button
                key={langCode}
                variant={selected === langCode ? 'selected' : 'default'}
                size="sm"
                onClick={() => handleChange(langCode)}
                disabled={isLoading}
                className={cn(
                  'w-[45px] h-[35px] px-0 py-0 text-[14px] leading-6',
                  selected !== langCode && 'text-custom-textPrimary',
                )}
              >
                {label}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};
