import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Book } from '@/types/Book';
// import { useState } from 'react'
// import { BookLoader } from '@/components/ui/BookLoader/BookLoader'

type Props = {
  book: Book;
};

export const LanguageSelector = ({ book }: Props) => {
  const navigate = useNavigate();
  //   const [isLoading, setIsLoading] = useState(false)
  const currentLang = book.lang;

  const handleChange = (langCode: string) => {
    if (langCode === currentLang) return;

    //  setIsLoading(true)
    const newSlug = `${book.namespaceId}-${langCode}-${book.type}`;

    navigate(`/${book.type}/${newSlug}`);
  };

  const getLabel = (code: string) =>
    code.toUpperCase() === 'UK' ? 'UA' : 'ENG';

  return (
    // <>
    //    {isLoading && (
    //      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
    //        <BookLoader />
    //      </div>
    //    )}
    <div className="flex gap-2">
      {book.langAvailable.map((langCode) => {
        const isSelected = langCode === currentLang;
        const label = getLabel(langCode);

        return (
          <Button
            key={langCode}
            variant={isSelected ? 'selected' : 'default'}
            size="sm"
            onClick={() => handleChange(langCode)}
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
