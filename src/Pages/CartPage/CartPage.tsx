import BannerSlider from '@/components/sections/BannerSlider/BannerSlider';
import { PaperBookSlider } from '@/components/sections/BooksSliders/PaperBookSlider';

export const CartPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Cart Page</h1>
      <BannerSlider />
      <PaperBookSlider />
    </>
  );
};
