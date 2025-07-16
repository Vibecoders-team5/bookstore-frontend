import { Book } from '@/types/Book';

export function getVisibleBooks(
  books: Book[],
  sort: string | null,
  order: string | null,
  perPage: string | null,
  currentPage: string | null,
): Book[] {
  let visibleBooks = [...books];

  if (sort) {
    visibleBooks = [...visibleBooks].sort((book1, book2) => {
      const price1 = book1.priceDiscount ?? book1.priceRegular;
      const price2 = book2.priceDiscount ?? book2.priceRegular;
      let compare = 0;

      switch (sort) {
        case 'alphabetically':
          compare = book1.name.localeCompare(book2.name);
          break;
        case 'newest':
          compare = book2.publicationYear - book1.publicationYear;
          break;
        case 'cheapest':
          compare = price1 - price2;
          break;
        default:
          compare = 0;
      }

      const isAsc = order === 'asc' || !order;
      return isAsc ? compare : -compare;
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
