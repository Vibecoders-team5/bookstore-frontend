import { Button } from '@/components/ui/button';

export const FavouritesPage = () => {
  return (
    <>
      <h1>FAVOURITES PAGE</h1>
      <Button variant="outline">Outline</Button>
      <Button variant="default">Default</Button>
      <Button variant="destructive" className="bg-red-500 text-white">
        Destructive
      </Button>
    </>
  );
};
