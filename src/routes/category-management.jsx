import { EditIcon } from "@/assets/icons/badges";
import { SearchIcon } from "@/assets/icons/common";
import { TrashIcon } from "@/assets/icons/user-management";
import Input from "@/components/common/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Img from "@/components/ui/Img";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CATEGORY1 } from "@/constants/images";
import { useForm } from "react-hook-form";

const CategoryManagement = () => {
  const searhForm = useForm({
    defaultValues: { search: "" },
  });
  return (
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
        >
          +Add Category
        </Button>
      </div>
      <ScrollArea>
        <div className="grid grid-cols-3 gap-[30px]">
          <div className="p-4 bg-bg-3 rounded-2xl space-y-[14px] relative">
            <div className="absolute top-8 right-8 flex gap-x-1">
              <button type="button" className="p-1.5 rounded-full bg-text-1">
                <EditIcon className="size-3 text-text-2" />
              </button>
              <button type="button" className="p-1.5 rounded-full bg-text-1">
                <TrashIcon className="size-3 text-[#FF0000]" />
              </button>
            </div>
            <Img
              src={CATEGORY1}
              className="w-full aspect-[325/160] rounded-lg"
              alt="category1"
            />
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
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryManagement;
