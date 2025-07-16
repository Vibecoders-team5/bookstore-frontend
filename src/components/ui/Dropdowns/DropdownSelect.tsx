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
  value?: string;
  label?: string;
  className?: string;
  onChange?: (value: string) => void;
};

export function DropdownSelect({
  options,
  placeholder,
  value,
  label,
  className,
  onChange,
}: DropdownSelectProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && (
        <label className="small-text text-custom-secondary dark:text-white">
          {label}
        </label>
      )}

      <Select value={value} onValueChange={onChange}>
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
