import { Book } from '@/types/Book';

export function getVisibleBooks(
  books: Book[],
  sort: string | null,
  perPage: string | null,
  currentPage: string | null,
): Book[] {
  let visibleBooks = [...books];

  if (sort) {
    visibleBooks = [...visibleBooks].sort((book1, book2) => {
      const price1 = book1.priceDiscount ?? book1.priceRegular;
      const price2 = book2.priceDiscount ?? book2.priceRegular;
      switch (sort) {
        case 'alphabetically':
          return book1.name.localeCompare(book2.name);

        case 'newest':
          return book1.publicationYear - book2.publicationYear;

        case 'cheapest':
          return price1 - price2;

        default:
          return 0;
      }
    });
  }

  if (perPage === 'all') {
    return visibleBooks;
  }

  const page = currentPage ? +currentPage : 1;
  const limit = perPage ? +perPage : 16;
  const start = (page - 1) * limit;
  const end = start + limit;

  return visibleBooks.slice(start, end);
}
