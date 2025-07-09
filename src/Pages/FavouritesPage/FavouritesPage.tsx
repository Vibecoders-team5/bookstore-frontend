import { BookList } from '@/components/sections/BookList/BookList';
import { BackButton } from '@/components/ui/Buttons/BackButton';
import { HeartButton } from '@/components/ui/Buttons/HeartButton';
import { useBookStore } from '@/store/useBookStore';
import { useNavigate } from 'react-router-dom';

export const FavouritesPage = () => {
  const favourites = useBookStore((state) => state.favourites);
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center pt-10">
      <div className="w-full max-w-284 min-w-0">
        <BackButton onClick={() => navigate(-1)} />

        <div className="mb-10 pt-4">
          <h1 className="h1">Favourites</h1>
          <p>{`${favourites.length} items`}</p>
        </div>
        {favourites.length ?
          <BookList books={favourites} />
        : <h3 className="h3">
            <span className="inline-flex items-center gap-1">
              Nothing in favourites yet 😢. Cammon push that{' '}
              <HeartButton onClick={() => navigate(-1)} /> button.
            </span>
          </h3>
        }
      </div>
    </div>
  );
};
