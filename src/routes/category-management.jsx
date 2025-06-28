import { EditIcon } from "@/assets/icons/badges";
import { SearchIcon } from "@/assets/icons/common";
import { TrashIcon } from "@/assets/icons/user-management";
import Input from "@/components/common/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Img from "@/components/ui/Img";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CATEGORY1, CATEGORY2, CATEGORY3 } from "@/constants/images";
import AddEditCategory from "@/modals/add-edit-category";
import DeleteCategory from "@/modals/delete-category";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useBoolean } from "usehooks-ts";

const CategoryManagement = () => {
  const addEditCategory = useBoolean(false);
  const deleteCategory = useBoolean(false);
  const [editCategory, setEditCategory] = useState(null);

  const searhForm = useForm({
    defaultValues: { search: "" },
  });
  return (
    <>
      <div className="h-full flex flex-col gap-y-6 overflow-hidden">
        <div className="flex justify-between items-center gap-x-3">
          <Form {...searhForm}>
            <form noValidate className="w-full max-w-[380px]">
              <Input
                name="Search"
                className="py-2 sm:py-2.5 text-base font-normal sm:rounded-lg"
                placeholder="Search"
                prefix={<SearchIcon className="size-5 text-text-4" />}
              />
            </form>
          </Form>
          <Button
            type="button"
            className="w-full max-w-[160px] py-2.5 font-medium rounded-lg text-lg"
            onClick={addEditCategory.setTrue}
          >
            +Add Category
          </Button>
        </div>
        <ScrollArea>
          <div className="grid grid-cols-3 gap-[30px]">
            <div className="p-4 bg-bg-3 rounded-2xl space-y-[14px] relative">
              <div className="absolute top-8 right-8 flex gap-x-1 z-20">
                <button
                  type="button"
                  className="p-1.5 rounded-full bg-text-1 cursor-pointer"
                  onClick={() => {
                    addEditCategory.setTrue();
                    setEditCategory({
                      name: "Fitness",
                      description: "Physical activities and workout challenges",
                      tags: ["Health", "Workout", "Wellness"],
                      image: [
                        "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
                      ],
                    });
                  }}
                >
                  <EditIcon className="size-3 text-text-2" />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-full bg-text-1 cursor-pointer"
                  onClick={deleteCategory.setTrue}
                >
                  <TrashIcon className="size-3 text-[#FF0000]" />
                </button>
              </div>
              <div className="w-full relative rounded-lg">
                <div className="absolute w-full h-1/2 top-0 rounded-lg z-10 bg-linear-to-b from-0% from-[#000000CC] to-100% to-[#00000000]" />
                <Img
                  src={CATEGORY1}
                  className="w-full aspect-[325/160] rounded-lg"
                  alt="category1"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-lg font-medium text-text-1">Fitness</p>
                  <p className="text-xs text-text-2">
                    Physical activities and workout challenges
                  </p>
                </div>
              </div>
              <div className="flex gap-x-1.5">
                <div className="px-2.5 py-1.5 rounded-full text-text-1 text-xs bg-[#50505066]">
                  Health
                </div>
                <div className="px-2.5 py-1.5 rounded-full text-text-1 text-xs bg-[#50505066]">
                  Workout
                </div>
                <div className="px-2.5 py-1.5 rounded-full text-text-1 text-xs bg-[#50505066]">
                  Wellness
                </div>
              </div>
            </div>
            <div className="p-4 bg-bg-3 rounded-2xl space-y-[14px] relative">
              <div className="absolute top-8 right-8 flex gap-x-1 z-20">
                <button
                  type="button"
                  className="p-1.5 rounded-full bg-text-1 cursor-pointer"
                  onClick={() => {
                    addEditCategory.setTrue();
                    setEditCategory({
                      name: "Food",
                      description: "Physical activities and workout challenges",
                      tags: ["Cooking", "Food"],
                      image: [
                        "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
                      ],
                    });
                  }}
                >
                  <EditIcon className="size-3 text-text-2" />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-full bg-text-1 cursor-pointer"
                  onClick={deleteCategory.setTrue}
                >
                  <TrashIcon className="size-3 text-[#FF0000]" />
                </button>
              </div>
              <div className="w-full relative rounded-lg">
                <div className="absolute w-full h-1/2 top-0 rounded-lg z-10 bg-linear-to-b from-0% from-[#000000CC] to-100% to-[#00000000]" />
                <Img
                  src={CATEGORY2}
                  className="w-full aspect-[325/160] rounded-lg"
                  alt="category2"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-lg font-medium text-text-1">Food</p>
                  <p className="text-xs text-text-2">
                    Physical activities and workout challenges
                  </p>
                </div>
              </div>
              <div className="flex gap-x-1.5">
                <div className="px-2.5 py-1.5 rounded-full text-text-1 text-xs bg-[#50505066]">
                  Cooking
                </div>
                <div className="px-2.5 py-1.5 rounded-full text-text-1 text-xs bg-[#50505066]">
                  Food
                </div>
              </div>
            </div>
            <div className="p-4 bg-bg-3 rounded-2xl space-y-[14px] relative">
              <div className="absolute top-8 right-8 flex gap-x-1 z-20">
                <button
                  type="button"
                  className="p-1.5 rounded-full bg-text-1 cursor-pointer"
                  onClick={() => {
                    addEditCategory.setTrue();
                    setEditCategory({
                      name: "Dance",
                      description: "Physical activities and workout challenges",
                      tags: ["Dance", "Music"],
                      image: [
                        "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
                      ],
                    });
                  }}
                >
                  <EditIcon className="size-3 text-text-2" />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-full bg-text-1 cursor-pointer"
                  onClick={deleteCategory.setTrue}
                >
                  <TrashIcon className="size-3 text-[#FF0000]" />
                </button>
              </div>
              <div className="w-full relative rounded-lg">
                <div className="absolute w-full h-1/2 top-0 rounded-lg z-10 bg-linear-to-b from-0% from-[#000000CC] to-100% to-[#00000000]" />
                <Img
                  src={CATEGORY3}
                  className="w-full aspect-[325/160] rounded-lg"
                  alt="category3"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-lg font-medium text-text-1">Dance</p>
                  <p className="text-xs text-text-2">
                    Physical activities and workout challenges
                  </p>
                </div>
              </div>
              <div className="flex gap-x-1.5">
                <div className="px-2.5 py-1.5 rounded-full text-text-1 text-xs bg-[#50505066]">
                  Dance
                </div>
                <div className="px-2.5 py-1.5 rounded-full text-text-1 text-xs bg-[#50505066]">
                  Music
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      <AddEditCategory
        state={addEditCategory}
        onClose={() => {
          addEditCategory.setFalse();
          setEditCategory(null);
        }}
        data={editCategory}
      />
      <DeleteCategory
        state={deleteCategory}
        onClose={deleteCategory.setFalse}
      />
    </>
  );
};

export default CategoryManagement;
