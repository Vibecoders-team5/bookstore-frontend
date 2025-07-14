import { Book } from '@/types/Book';
import { formatListeningLength } from '../FormatListeningLength/formatListeningLength';

type Props = {
  book: Book;
};

export const BookCharacteristics = ({ book }: Props) => {
  const items: [string, string | number | null][] = [
    ['Author', book.author],
    ['Cover type', book.coverType ?? null],
    [
      'Listening Length',
      book.listeningLength !== null && book.listeningLength !== undefined ?
        formatListeningLength(book.listeningLength)
      : null,
    ],
    ['Narrator', book.narrator ?? null],
    ['Number of pages', book.numberOfPages ?? null],
    ['Year of publication', book.publicationYear],
    ['Publication', book.publication],
    ['Format', book.format ?? null],
    ['Language', book.lang.toUpperCase() === 'UK' ? 'UA' : 'ENG'],
    ['Illustrations', book.illustrations ? 'Yes' : 'No illustrations'],
  ];

  const filteredItems = items.filter(([, value]) => value !== null);

  return (
    <section className="w-full max-w-[640px] mx-auto lg:mx-0">
      <h2 className="text-[24px] font-bold leading-[31px] text-custom-textPrimary mb-4">
        Characteristics
      </h2>

      <div className="border-t border-[#E2E6E9]">
        {filteredItems.map(([label, value], idx) => (
          <div
            key={label}
            className={`
              flex justify-between py-[10px]
              ${idx > 0 ? 'border-t border-[#E2E6E9]' : ''}
            `}
          >
            <span className="text-[#89939A] text-[14px] font-medium leading-[21px]">
              {label}
            </span>
            <span className="text-[#313237] text-[14px] font-medium leading-[21px]">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
