import { BookList } from '@/components/sections/BookList/BookList';
import { BackButton } from '@/components/ui/Buttons/BackButton';
import { useBookStore } from '@/store/useBookStore';
import { useNavigate } from 'react-router-dom';
import { EmptyFavourites } from './components/EmptyFavourites';

export const FavouritesPage = () => {
  const favourites = useBookStore((state) => state.favourites);
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center py-25">
      <div className="w-full max-w-284 min-w-0">
        <BackButton onClick={() => navigate(-1)} />

        <div className="mb-10 pt-4">
          <h1 className="h1">Favourites</h1>
          <p>{`${favourites.length} items`}</p>
        </div>
        {favourites.length ?
          <BookList books={favourites} />
        : <EmptyFavourites />}
      </div>
    </div>
  );
};
