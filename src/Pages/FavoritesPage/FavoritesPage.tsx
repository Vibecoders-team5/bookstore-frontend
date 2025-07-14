import { BookList } from '@/components/sections/BookList/BookList';
import { BackButton } from '@/components/ui/Buttons/BackButton';
import { useBookStore } from '@/store/useBookStore';
import { useNavigate } from 'react-router-dom';
import { EmptyFavorites } from './components/EmptyFavorites';

export const FavoritesPage = () => {
  const favorites = useBookStore((state) => state.favorites);
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center py-25">
      <div className="w-full max-w-284 min-w-0">
        <BackButton onClick={() => navigate(-1)} />

        <div className="mb-10 pt-4">
          <h1 className="h1">Favorites</h1>
          <p>{`${favorites.length} items`}</p>
        </div>
        {favorites.length ?
          <BookList books={favorites} />
        : <EmptyFavorites />}
      </div>
    </div>
  );
};
