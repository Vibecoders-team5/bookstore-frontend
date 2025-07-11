import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type Option = {
  label: string;
  value: string;
};

type DropdownSelectProps = {
  options: Option[];
  placeholder?: string;
  defaultValue?: string;
  label?: string;
  className?: string;
  onChange?: (value: string) => void;
};

export function DropdownSelect({
  options,
  placeholder,
  defaultValue,
  label,
  className,
  onChange,
}: DropdownSelectProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && <label className="small-text text-[#89939A]">{label}</label>}

      <Select defaultValue={defaultValue} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
