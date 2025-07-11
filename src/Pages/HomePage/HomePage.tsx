import BannerSlider from '@/components/sections/BannerSlider/BannerSlider';
import { PaperBookSlider } from '@/components/sections/BooksSliders/PaperBookSlider';
import { CategoriesGrid } from '@/components/sections/CategoriesGrid/CategoriesGrid';
import { ScrollSection } from './ScrollSection';

export const HomePage = () => {
  return (
    <>
      <ScrollSection />
      <section className="relative z-[2]">
        <BannerSlider />
        <PaperBookSlider title="New Books" />
        <CategoriesGrid />
        <PaperBookSlider title="You might like" />
      </section>
    </>
  );
};
