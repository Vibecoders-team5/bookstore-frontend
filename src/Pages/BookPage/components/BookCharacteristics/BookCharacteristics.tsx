import { Book } from '@/types/Book';
import { formatListeningLength } from '../FormatListeningLength/formatListeningLength';
import { useTranslation } from 'react-i18next';

type Props = {
  book: Book;
};

export const BookCharacteristics = ({ book }: Props) => {
  const { t } = useTranslation();

  const items: [string, string | number | null][] = [
    [t('author'), book.author],
    [t('cover'), book.coverType ?? null],
    [
      t('listening'),
      book.listeningLength !== null && book.listeningLength !== undefined ?
        formatListeningLength(book.listeningLength)
      : null,
    ],
    [t('narrator'), book.narrator ?? null],
    [t('numberOfPages'), book.numberOfPages ?? null],
    [t('yearOfPublication'), book.publicationYear],
    [t('publication'), book.publication],
    [t('format'), book.format ?? null],
    [
      t('language'),
      book.lang.toUpperCase() === 'UK' ? t('languageSelector') : 'ENG',
    ],
    [
      t('illustrations'),
      book.illustrations ? t('illustrationsTrue') : t('illustrationsFalse'),
    ],
  ];

  const filteredItems = items.filter(([, value]) => value !== null);

  return (
    <section className="w-full max-w-160 mx-auto lg:mx-0">
      <h2 className="text-[24px] font-bold leading-[31px] text-custom-textPrimary dark:text-white mb-4">
        {t('characteristics')}
      </h2>

      <div className="border-t border-custom-elements">
        {filteredItems.map(([label, value], idx) => (
          <div
            key={label}
            className={`
              flex justify-between py-2.5
              ${idx > 0 ? 'border-t border-custom-elements' : ''}
            `}
          >
            <span className="text-custom-secondary dark:text-[#ad9c89] text-[14px] font-medium leading-[21px]">
              {label}
            </span>
            <span className="text-custom-text-primary dark:text-white/90 text-[14px] font-medium leading-[21px]">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
