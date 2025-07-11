import { BadgeIcon } from "@/assets/icons/sidebar";
import { MessageTextIcon } from "@/assets/icons/user-management";
import ImageUploader from "@/components/common/image-uploader";
import Input from "@/components/common/input";
import Select from "@/components/common/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddEditBadgeSchema = z.object({
  name: z.string().min(1, "Badge name is required"),
  description: z.string().min(1, "Description is required"),
  rarity: z.string().min(1, "Badge rarity is required"),
  category: z.string().min(1, "Badge category is required"),
  acquisition: z.string().min(1, "Condition for acquisition is required"),
  image: z
    .any()
    .refine((file) => file && file.length > 0, "Badge image is required"),
});

const AddEditBadge = ({ state, data, onClose }) => {
  const isEdit = useMemo(() => Boolean(data), [state.value]);

  const form = useForm({
    resolver: zodResolver(AddEditBadgeSchema),
    defaultValues: {
      name: "",
      description: "",
      rarity: "",
      category: "",
      acquisition: "",
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
            {isEdit ? " Edit" : "Add"} Badge
          </DialogTitle>
          <VisuallyHidden.Root>
            <p className="text-base sm:text-lg lg:text-xl text-text-2 text-center">
              Create a badge and upload image
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
              label="Badge name"
              prefix={<BadgeIcon className="size-5 md:size-6 text-text-3" />}
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
            <div className="flex gap-x-6">
              <Select
                name="rarity"
                label="Badge rarity"
                prefix={<BadgeIcon className="size-5 md:size-6 text-text-3" />}
                options={[{ label: "option 1", value: "123" }]}
                className="h-[58px] bg-bg-3 !rounded-xl"
              />
              <Select
                name="category"
                label="Badge category"
                prefix={<BadgeIcon className="size-5 md:size-6 text-text-3" />}
                options={[{ label: "option 1", value: "123" }]}
                className="h-[58px] bg-bg-3 !rounded-xl"
              />
            </div>
            <Select
              name="acquisition"
              label="Condition for acquisition"
              prefix={<BadgeIcon className="size-5 md:size-6 text-text-3" />}
              options={[{ label: "option 1", value: "123" }]}
              className="h-[58px] bg-bg-3 !rounded-xl"
            />
            <ImageUploader
              label="Upload badge"
              name="image"
              control={form.control}
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

export default AddEditBadge;
