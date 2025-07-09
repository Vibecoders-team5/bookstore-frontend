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
    <div>
      <Breadcrumb className="flex items-center text-[12px] leading-[11px] sm:text-[14px] font-bold gap-1 sm:gap-2 uppercase">
        <BreadcrumbList>
          <BreadcrumbItem className="hover:underline flex items-center gap-1 text-[#313237]">
            <BreadcrumbLink href="/home">
              <House className="w-4 h-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="w-4 h-4 text-[#C5C9CC]" />
          <BreadcrumbItem className="hover:underline text-[#313237]">
            <BreadcrumbLink href={`/type=${type}`}>{type}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="w-4 h-4 text-[#C5C9CC]" />
          <BreadcrumbItem className="hover:underline text-[#313237]">
            <BreadcrumbLink href={`/type=${type}?category=${category}`}>
              {category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="w-4 h-4 text-[#C5C9CC]" />
          <BreadcrumbItem className="text-[#89939A]">
            <BreadcrumbPage className="truncate max-w-[250px] sm:max-w-[400px]">
              {bookName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
