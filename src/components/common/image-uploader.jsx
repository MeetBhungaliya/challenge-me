import { useDropzone } from "react-dropzone";
import { Controller } from "react-hook-form";
import { UploadIcon } from "@/assets/icons/badges";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Img from "../ui/Img";

const ImageUploader = ({ name, label, control, noPadBg = false }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
          onDrop: (acceptedFiles) => onChange(acceptedFiles),
          multiple: false,
          accept: {
            "image/*": [".png", ".jpeg", ".jpg", ".svg"],
          },
        });

        return (
          <div className="space-y-1.5">
            {label && (
              <Label
                htmlFor={name}
                className="text-text-1 text-base font-normal"
              >
                {label}
              </Label>
            )}
            <div
              className={cn(
                "h-[120px] border rounded-xl",
                error ? "border-red-400" : "border-transparent"
              )}
            >
              {value?.[0] ? (
                <div
                  className={cn(
                    "h-full w-max rounded-xl flex justify-center items-center relative",
                    noPadBg ? "p-0 bg-transparent aspect-[205/120]" : "p-4 bg-bg-3 aspect-square"
                  )}
                >
                  <Img
                    src={
                      typeof value[0] === "string"
                        ? value[0]
                        : URL.createObjectURL(value[0])
                    }
                    alt="Uploaded"
                    className={cn(
                      "h-full max-w-full",
                      noPadBg ? "object-cover rounded-xl" : "object-contain rounded-md"
                    )}
                  />
                  <button
                    type="button"
                    className="absolute -top-1.5 -right-1.5 p-1 bg-[#7E808C] rounded-full cursor-pointer"
                    onClick={() => onChange([])}
                  >
                    <X className="size-3.5 text-text-1" />
                  </button>
                </div>
              ) : (
                <div
                  {...getRootProps()}
                  className={cn(
                    "h-full py-2 rounded-xl flex items-center text-center text-text-2 cursor-pointer",
                    value?.length ? "bg-transparent" : "bg-bg-3 justify-center"
                  )}
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-2 rounded-full bg-bg-1">
                      <UploadIcon className="text-text-1 size-5" />
                    </div>
                    <p className="text-base text-text-2">Upload image</p>
                    {isDragActive && <p className="text-xs">Drop it here...</p>}
                  </div>
                </div>
              )}
            </div>
            {error && (
              <p className="pl-3 text-xs text-red-400">{error.message}</p>
            )}
          </div>
        );
      }}
    />
  );
};

export default ImageUploader;
