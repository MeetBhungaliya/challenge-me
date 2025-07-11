import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select as ShadSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

const Select = ({
  name,
  label,
  placeholder,
  className,
  prefix,
  options,
  ...other
}) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => (
        <div className="w-full space-y-1.5">
          {label && (
            <Label htmlFor={name} className="text-text-1 text-base font-normal">
              {label}
            </Label>
          )}
          <FormItem className="relative">
            <ShadSelect
              onValueChange={field.onChange}
              value={field.value}
              {...other}
            >
              <FormControl>
                <SelectTrigger
                  id={name}
                  className={cn(
                    "w-full py-3 sm:py-3.5 px-4 sm:px-6 bg-bg-2 rounded-lg sm:rounded-xl text-left text-sm sm:text-base placeholder:text-text-4 border",
                    errors?.[name]?.message
                      ? "text-red-400 border-red-400"
                      : "text-text-1 border-bg-2",
                    prefix ? "pl-[46px] sm:pl-[55px]" : "",
                    className
                  )}
                >
                  {prefix && (
                    <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2">
                      {prefix}
                    </div>
                  )}
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent
                align="start"
                className="bg-bg-2 text-text-1 border-none"
              >
                {options.map((item) => (
                  <SelectItem key={item} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </ShadSelect>
          </FormItem>
          <FormMessage className="pl-3 text-xs text-red-400" />
        </div>
      )}
    />
  );
};

export default Select;
