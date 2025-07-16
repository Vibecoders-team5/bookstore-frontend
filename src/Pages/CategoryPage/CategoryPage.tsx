import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';

import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { allBooks, isLoading, fetchAllBooks, clearBooks } =
    useFetchBooksStore();
  const { t } = useTranslation();

  const slugToDisplayName = (slug: string): string => {
    const map: Record<string, string> = {
      programming: t('programming'),
      psychology: t('psyhology'),
      fantasy: t('fantasy'),
      drama: t('drama'),
      detective: t('detective'),
    };
    return map[slug] ?? slug;
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
    clearBooks();
    fetchAllBooks();
  }, [categorySlug, clearBooks, fetchAllBooks]);

  return (
    <CatalogTemplate
      books={filteredBooks}
      isLoading={isLoading}
      title={title}
    />
  );
};
