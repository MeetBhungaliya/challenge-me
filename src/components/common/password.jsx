import { EyeoffIcon, EyeonIcon } from "@/assets/icons/auth";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";

const Password = ({
  name,
  placeholder = "",
  label = "",
  className = "",
  prefix,
  ...other
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { control } = useFormContext();
  const inputRef = useRef();

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
              <Input
                {...field}
                {...other}
                ref={inputRef}
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                id={name}
                required
                placeholder={placeholder}
                className={cn(
                  "px-6 py-3 sm:py-3.5 pr-[54px] bg-bg-2 rounded-2xl sm:rounded-3xl font-medium !text-base sm:!text-lg placeholder:text-text-2 placeholder:font-medium placeholder:text-base sm:placeholder:text-lg focus-visible:!ring-border-1 focus-visible:ring-offset-0",
                  errors?.[name]?.message
                    ? "text-red-400 focus-visible:ring-red-500 border border-red-400 focus-visible:ring-1"
                    : "text-text-1 border border-transparent focus-visible:ring-1 focus-visible:ring-main",
                  prefix ? "pl-[46px] sm:pl-[60px]" : "",
                  className
                )}
              />
            </FormControl>
            {prefix && (
              <div className="absolute flex items-center top-1/2 -translate-y-1/2 left-4 sm:left-[22px]">
                {prefix}
              </div>
            )}
            <Button
              className="h-full p-0 aspect-square rounded-l-none rounded-r-2xl shadow-none text-text-1 absolute top-1/2 -translate-y-1/2 right-0 bg-transparent hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              {showPassword ? (
                <EyeonIcon className="min-w-[18px] min-h-[18px] sm:min-w-[22px] sm:min-h-[22px] text-text-2" />
              ) : (
                <EyeoffIcon className="min-w-[18px] min-h-[18px] sm:min-w-[22px] sm:min-h-[22px] text-text-2" />
              )}
            </Button>
          </FormItem>
          <FormMessage className="pl-3 text-xs text-red-400" />
        </div>
      )}
    ></FormField>
  );
};

export default Password;
