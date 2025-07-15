import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { useTranslation } from 'react-i18next';

export const useCategories = () => {
  const { paperBooks, kindleBooks, audioBooks } = useFetchBooksStore();
  const { t } = useTranslation();

  return [
    {
      video: '/books/img/categories/paper.mp4',
      link: '#/paperback',
      title: t('paperBooks'),
      subtitle: `${paperBooks.length} ${t('items')}`,
    },
    {
      video: '/books/img/categories/audio.mp4',
      link: '#/audiobook',
      title: t('audioBooks'),
      subtitle: `${audioBooks.length} ${t('items')}`,
    },
    {
      video: '/books/img/categories/kindlebook.mp4',
      link: '#/kindle',
      title: t('kindleBooks'),
      subtitle: `${kindleBooks.length} ${t('items')}`,
    },
  ];
};
