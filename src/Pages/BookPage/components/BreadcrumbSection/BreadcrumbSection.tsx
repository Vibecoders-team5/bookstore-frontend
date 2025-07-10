import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { House } from 'lucide-react';

type Props = {
  type: string;
  category: string;
  bookName: string;
};

export const BreadcrumbSection = ({ type, category, bookName }: Props) => {
  return (
    <Breadcrumb className="flex items-center gap-1 sm:gap-2 text-[12px] sm:text-[14px]">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            asChild
            className="flex items-center text-[#313237] transition-transform hover:-translate-y-1"
          >
            <Link to="/">
              <House className="w-5 h-5" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="w-3 h-3 text-[#C5C9CC]" />

        <BreadcrumbItem className="hidden sm:flex">
          <BreadcrumbLink
            asChild
            className="text-[#3a3c40] hover:underline hover:text-[#3a3c40] first-letter:uppercase"
          >
            <Link to={`/${type}`}>{type}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="w-3 h-3 text-[#C5C9CC] hidden sm:block" />

        <BreadcrumbItem className="hidden sm:flex">
          <BreadcrumbLink
            asChild
            className="text-[#3a3c40] hover:underline hover:text-[#3a3c40] first-letter:uppercase"
          >
            <Link to={`/${type}`}>{category}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="w-3 h-3 text-[#C5C9CC] hidden sm:block" />

        <BreadcrumbItem className="flex sm:hidden">
          <BreadcrumbLink asChild className="text-[#3a3c40] hover:underline">
            <Link to={`/${type}`}>...</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="w-4 h-4 text-[#C5C9CC] flex sm:hidden" />

        <BreadcrumbItem>
          <BreadcrumbPage className="text-[#89939A] text-[12px] sm:text-[14px] font-medium">
            {bookName}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
