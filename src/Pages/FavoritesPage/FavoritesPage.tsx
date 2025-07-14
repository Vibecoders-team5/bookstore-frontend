import { BookList } from '@/components/sections/BookList/BookList';
import { BackButton } from '@/components/ui/Buttons/BackButton';
import { useBookStore } from '@/store/useBookStore';
import { useNavigate } from 'react-router-dom';
import { EmptyFavorites } from './components/EmptyFavorites';
import { useTranslation } from 'react-i18next';

export const FavoritesPage = () => {
  const favorites = useBookStore((state) => state.favorites);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 xl:px-8 py-25">
      <div className="w-full max-w-284 min-w-0">
        <BackButton onClick={() => navigate(-1)} />

        <div className="mb-8 sm:mb-10 pt-2">
          <h1 className="text-[36px] sm:text-5xl font-bold dark:text-white">
            {t('fav')}
          </h1>
          <p className="dark:text-white">{`${favorites.length} ${t('items')}`}</p>
        </div>
        {favorites.length ?
          <BookList books={favorites} />
        : <EmptyFavorites />}
      </div>
    </div>
  );
};
