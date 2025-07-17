import { Book } from '@/types/Book';

export function getRecommendedBooks(
  books: Book[],
  currentBook?: Book,
  maxCount = 10,
): Book[] {
  if (!books.length) return [];

  let recommended: Book[] = [];

  if (currentBook) {
    recommended = books.filter(
      (book) =>
        book.id !== currentBook.id &&
        book.author === currentBook.author &&
        book.category?.some((cat) => currentBook.category?.includes(cat)),
    );
  }

  const shuffledRecommended = [...recommended].sort(() => Math.random() - 0.5);

  if (shuffledRecommended.length >= maxCount) {
    return shuffledRecommended.slice(0, maxCount);
  }

  const additional = books
    .filter(
      (book) =>
        book.id !== currentBook?.id && !shuffledRecommended.includes(book),
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, maxCount - shuffledRecommended.length);

  return [...shuffledRecommended, ...additional].slice(0, maxCount);
}
