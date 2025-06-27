import { BadgeIcon } from "@/assets/icons/badges";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";

const BadgeDetail = ({ state, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={state.value} onOpenChange={handleClose}>
      <DialogContent
        showCloseButton={false}
        className="w-full sm:max-w-[565px] p-5 md:p-[30px] rounded-2xl md:rounded-3xl bg-bg-2 border-none"
      >
        <DialogHeader className="w-full relative">
          <DialogTitle className="text-text-1 text-2xl font-bold text-center">
            Badge Detail
          </DialogTitle>
          <DialogClose className="absolute top-1/2 right-0 -translate-y-1/2 size-6 flex justify-center items-center border border-text-2 rounded-full cursor-pointer">
            <X className="text-text-2 size-3.5" />
          </DialogClose>
          <VisuallyHidden.Root>
            <DialogDescription className="text-base sm:text-lg lg:text-xl text-text-2 text-center">
              badge detail
            </DialogDescription>
          </VisuallyHidden.Root>
        </DialogHeader>
        <Separator className="bg-bg-4 opacity-10" />
        <div className="w-max mx-auto mt-2 sm:mt-5 flex flex-col items-center gap-y-[10px]">
          <BadgeIcon className="w-[60px]" />
          <p className="text-text-1 text-xl font-semibold">
            Challenge Influencer
          </p>
        </div>
        <div className="mt-2 sm:mt-5 space-y-1.5">
          <p className="text-text-1 text-lg font-semibold">Description</p>
          <p className="text-text-6 text-lg">
            This badge is awarded to users who create engaging and inspiring
            challenges that motivate others to participate and stay active.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BadgeDetail;
