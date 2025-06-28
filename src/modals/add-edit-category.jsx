import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/common/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { MessageTextIcon } from "@/assets/icons/user-management";
import ImageUploader from "@/components/common/image-uploader";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { CategoryManagementIcon } from "@/assets/icons/sidebar";
import { useEffect, useMemo } from "react";
import { TagsInput } from "@/components/ui/tags-input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { TagsIcon } from "@/assets/icons/category-management";

const AddEditCategorySchema = z.object({
  name: z.string().min(1, "Badge name is required"),
  description: z.string().min(1, "Description is required"),
  tags: z.array(z.string()).min(1, "Minimum 1 tag is required"),
  image: z
    .any()
    .refine((file) => file && file.length > 0, "Badge image is required"),
});

const AddEditCategory = ({ state, data, onClose }) => {
  const isEdit = useMemo(() => Boolean(data), [state.value]);

  const form = useForm({
    resolver: zodResolver(AddEditCategorySchema),
    defaultValues: {
      name: "",
      description: "",
      tags: [],
      image: [],
    },
  });

  useEffect(() => {
    if (!state.value) return;
    form.reset(data);
  }, [state.value]);

  const onSubmit = (data) => {
    console.log(data);
    onClose();
  };
  return (
    <Dialog open={state.value}>
      <DialogContent
        showCloseButton={false}
        className="w-full sm:max-w-[565px] p-5 md:p-[30px] rounded-2xl md:rounded-3xl bg-bg-2 border-none gap-[30px]"
      >
        <DialogHeader className="w-full max-w-[370px] mx-auto gap-[10px]">
          <DialogTitle className="text-text-1 text-2xl font-bold text-center">
            {isEdit ? " Edit" : "Add"} Category
          </DialogTitle>
          <VisuallyHidden.Root>
            <p className="text-base sm:text-lg lg:text-xl text-text-2 text-center">
              Create a category and upload image
            </p>
          </VisuallyHidden.Root>
        </DialogHeader>
        <Separator className="bg-bg-4 opacity-10" />
        <Form {...form}>
          <form
            noValidate
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-[30px]"
          >
            <Input
              name="name"
              label="Category name"
              prefix={
                <CategoryManagementIcon className="size-5 md:size-6 text-text-3" />
              }
              className="bg-bg-3 !rounded-xl"
            />
            <Input
              name="description"
              label="Description"
              textarea
              className="resize-none h-[120px] bg-bg-3"
              prefix={
                <MessageTextIcon className="size-5 md:size-6 text-text-3" />
              }
            />
            <div className="space-y-1.5">
              <Label
                htmlFor="tags"
                className="text-text-1 text-base font-normal"
              >
                Tags
              </Label>
              <div className="relative">
                <div
                  className={cn(
                    "absolute flex items-center",
                    "top-1/2 -translate-y-1/2 left-4 sm:left-5"
                  )}
                >
                  <TagsIcon className="size-5 md:size-6 text-text-3" />
                </div>
                <TagsInput
                  id="tags"
                  value={form.watch("tags")}
                  onValueChange={(e) =>
                    form.setValue("tags", e, { shouldValidate: true })
                  }
                  className={cn(
                    "py-3 sm:py-[14px] px-4 sm:px-6 border bg-bg-3 rounded-xl !text-base sm:!text-lg placeholder:text-text-4 placeholder:text-base sm:placeholder:text-lg ring-0",
                    form.formState.errors?.tags?.message
                      ? "text-red-400 border-red-400"
                      : "text-text-1 border-bg-2",
                    "pl-[46px] sm:pl-[55px]"
                  )}
                  inputClassName="text-sm sm:!text-base"
                />
              </div>
              {form.formState.errors?.tags?.message && (
                <p className="pl-3 text-xs text-red-400">
                  {form.formState.errors?.tags?.message}
                </p>
              )}
            </div>

            <ImageUploader
              label="Upload thumbnail"
              name="image"
              control={form.control}
              noPadBg={true}
            />
            <div className="flex gap-x-3.5 md:gap-x-5">
              <Button
                type="button"
                className="flex-1 py-3 sm:py-3.5 rounded-full lg:rounded-3xl text-base md:text-lg font-semibold text-text-2 bg-bg-3"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 py-3 sm:py-3.5 rounded-full lg:rounded-3xl text-base md:text-lg font-semibold"
              >
                {isEdit ? "Save" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditCategory;
