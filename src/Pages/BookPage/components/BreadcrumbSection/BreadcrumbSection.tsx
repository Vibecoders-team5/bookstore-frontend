import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { House } from 'lucide-react';

type Props = {
  type: string;
  category: string;
  bookName: string;
};

export const BreadcrumbSection = ({ type, category, bookName }: Props) => {
  return (
    <Breadcrumb className="flex items-center gap-1 sm:gap-2 font-bold uppercase text-[12px] sm:text-[14px]">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/home"
            className="flex items-center text-[#313237] transition-transform hover:-translate-y-1"
          >
            <House className="w-4 h-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="w-4 h-4 text-[#C5C9CC]" />

        <BreadcrumbItem className="hidden sm:flex">
          <BreadcrumbLink
            href={`/type=${type}`}
            className="text-[#313237] hover:underline"
          >
            {type}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="w-4 h-4 text-[#C5C9CC] hidden sm:block" />

        <BreadcrumbItem className="hidden sm:flex">
          <BreadcrumbLink href={`/type=${type}`}>{category}</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="w-4 h-4 text-[#C5C9CC] hidden sm:block" />

        <BreadcrumbItem className="flex sm:hidden">
          <BreadcrumbLink
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-[#313237] hover:underline"
          >
            …
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="w-4 h-4 text-[#C5C9CC] flex sm:hidden" />

        <BreadcrumbItem>
          <BreadcrumbPage className="text-[#89939A] font-bold whitespace-nowrap overflow-hidden truncate max-w-[120px] sm:max-w-[200px] md:max-w-[300px] xl:max-w-none xl:whitespace-normal xl:overflow-visible">
            {bookName}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
