import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';

export const FavouritesPage = () => {
  return (
    <>
      <h1>FAVOURITES PAGE</h1>
      <Button variant={'outline'}>Outline</Button>
      <Button variant={'default'}>Default</Button>
      <Button variant={'destructive'}>Destructive</Button>
      <Toggle variant={'outline'}>123</Toggle>
    </>
  );
};
