import BannerSlider from '@/Pages/HomePage/components/BannerSlider';
import { PaperBookSlider } from '@/components/sections/BooksSliders/PaperBookSlider';
import { CategoriesGrid } from '@/Pages/HomePage/components/CategoriesGrid';
import { ScrollSection } from './components/ScrollSection';

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
