import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';

import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

export const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { allBooks, isLoading, fetchAllBooks, clearBooks } =
    useFetchBooksStore();
  const { t } = useTranslation();

  const categoriesMap: Record<string, string> = {
    programming: t('categories.programming'),
    psychology: t('categories.psychology'),
    fantasy: t('categories.fantasy'),
    drama: t('categories.drama'),
    detective: t('categories.detective'),
  };

  const isValidSlug =
    !categorySlug || Object.keys(categoriesMap).includes(categorySlug);

  const slugToDisplayName = (slug: string): string => {
    return categoriesMap[slug] ?? slug;
  };

  const title = categorySlug ? slugToDisplayName(categorySlug) : 'catalog';

  const filteredBooks =
    categorySlug ?
      allBooks.filter((book) =>
        book.category
          ?.map((cat) => cat.toLowerCase().replace(/\s+/g, '-'))
          .includes(categorySlug),
      )
    : allBooks;

  useEffect(() => {
    if (!isValidSlug) return;
    clearBooks();
    fetchAllBooks();
  }, [categorySlug, clearBooks, fetchAllBooks, isValidSlug]);

  if (!isValidSlug) {
    return <NotFoundPage />;
  }

  return (
    <CatalogTemplate
      books={filteredBooks}
      isLoading={isLoading}
      title={title}
    />
  );
};
