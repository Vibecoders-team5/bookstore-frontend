import { Book } from '@/types/Book';

type Props = {
  book: Book;
};

export const BookAbout = ({ book }: Props) => {
  return (
    <section className="w-full max-w-[640px]">
      <h2 className="text-[24px] font-bold leading-[31px] text-custom-textPrimary mb-4">
        About
      </h2>

      <div className="border-t border-custom-border pt-4 flex flex-col gap-4 text-[14px] leading-[21px] text-custom-textPrimary">
        {book.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};
