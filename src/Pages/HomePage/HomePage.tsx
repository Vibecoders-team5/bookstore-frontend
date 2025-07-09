import BannerSlider from '@/components/sections/BannerSlider/BannerSlider';
import { PaperBookSlider } from '@/components/sections/BooksSliders/PaperBookSlider';
import { CategoriesGrid } from '@/components/sections/CategoriesGrid/CategoriesGrid';

export const HomePage = () => (
  // можливо тут додати якісь класи
  <div>
    <BannerSlider />
    <PaperBookSlider title="New Books" />
    <CategoriesGrid />
    <PaperBookSlider title="You might like" />
  </div>
);
