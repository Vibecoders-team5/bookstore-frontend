import { BookList } from '@/components/sections/BookList/BookList';
import { BackButton } from '@/components/ui/Buttons/BackButton';
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
        <BookList books={favourites} />
      </div>
    </div>
  );
};
