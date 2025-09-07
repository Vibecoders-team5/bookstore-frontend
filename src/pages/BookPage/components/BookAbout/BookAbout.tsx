import { Book } from '@/types/Book';
import { useTranslation } from 'react-i18next';

type Props = {
  book: Book;
};

export const BookAbout = ({ book }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-160 mx-auto lg:mx-0">
      <h2 className="text-[24px] font-bold leading-[31px] text-custom-textPrimary dark:text-white mb-4">
        {t('books.about')}
      </h2>

      <div className="border-t border-custom-elements pt-4 flex flex-col gap-4 text-[14px] leading-[21px] text-custom-textPrimary dark:text-[#ad9c89]">
        {book.description.map((paragraph, index) => (
          <p key={index} className={index === 0 ? 'font-bold' : ''}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
