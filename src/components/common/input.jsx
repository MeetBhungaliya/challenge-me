import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input as InputComponent } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";

const Input = ({
  name,
  placeholder,
  textarea = false,
  label,
  className,
  prefix,
  ...other
}) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => (
        <div className="space-y-1.5">
          {label && (
            <Label htmlFor={name} className="text-text-1 text-base font-normal">
              {label}
            </Label>
          )}
          <FormItem className="space-y-0 relative">
            <FormControl>
              {textarea ? (
                <Textarea
                  {...field}
                  {...other}
                  autoComplete="off"
                  id={name}
                  required
                  placeholder={placeholder}
                  className={cn(
                    "py-3 sm:py-3.5 px-4 sm:px-6 border bg-bg-2 rounded-lg sm:rounded-xl !text-sm sm:!text-base placeholder:text-text-4 placeholder:text-base sm:placeholder:text-lg",
                    errors?.[name]?.message
                      ? "text-red-400 border-red-400"
                      : "text-text-1 border-bg-2",
                    prefix ? "pl-[46px] sm:pl-[55px]" : "",
                    className
                  )}
                />
              ) : (
                <InputComponent
                  {...field}
                  {...other}
                  autoComplete="off"
                  id={name}
                  required
                  placeholder={placeholder}
                  className={cn(
                    "py-3 sm:py-3.5 px-4 sm:px-6 border bg-bg-2 rounded-2xl sm:rounded-3xl !text-base sm:!text-lg placeholder:text-text-4 placeholder:text-base sm:placeholder:text-lg",
                    errors?.[name]?.message
                      ? "text-red-400 border-red-400"
                      : "text-text-1 border-bg-2",
                    prefix ? "pl-[46px] sm:pl-[55px]" : "",
                    className
                  )}
                />
              )}
            </FormControl>
            {prefix && (
              <div
                className={cn(
                  "absolute flex items-center",
                  textarea
                    ? "top-3.5 sm:top-4 left-4 sm:left-5"
                    : "top-1/2 -translate-y-1/2 left-4 sm:left-5"
                )}
              >
                {prefix}
              </div>
            )}
          </FormItem>
          <FormMessage className="pl-3 text-xs text-red-400" />
        </div>
      )}
    ></FormField>
  );
};

export default Input;
