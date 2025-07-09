import { Book } from '@/types/Book';

type Props = {
  book: Book;
};

export const BookCharacteristics = ({ book }: Props) => {
  return (
    <section className="mt-16 w-full max-w-[640px]">
      <h2 className="text-[24px] font-bold leading-[31px] text-custom-textPrimary mb-4">
        Characteristics
      </h2>

      <div className="border-t border-[#E2E6E9] text-[14px] font-medium leading-[21px] text-custom-textMuted">
        <Row label="Author" value={book.author} />
        <Row label="Cover type" value={book.coverType} />
        <Row label="Number of pages" value={book.numberOfPages} />
        <Row label="Year of publication" value={book.publicationYear} />
        <Row label="Publication" value={book.publication} />
        <Row label="Format" value={book.format} />
        <Row
          label="Language"
          value={book.lang.toUpperCase() === 'UK' ? 'UA' : 'ENG'}
        />
        <Row
          label="Illustrations"
          value={book.illustrations ? 'Yes' : 'No illustrations'}
          isLast
        />
      </div>
    </section>
  );
};

type RowProps = {
  label: string;
  value: string | number;
  isLast?: boolean;
};

const Row = ({ label, value, isLast = false }: RowProps) => (
  <div
    className={`flex justify-between py-[10px] ${!isLast ? 'border-b border-[#E2E6E9]' : ''}`}
  >
    <span>{label}</span>
    <span className="text-custom-textPrimary">{value}</span>
  </div>
);
