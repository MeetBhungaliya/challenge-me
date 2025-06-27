import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import Img from "@/components/ui/Img";
import { useMemo } from "react";
import { faker } from "@faker-js/faker";
import { EmailIcon } from "@/assets/icons/auth";
import { PhoneIcon } from "@/assets/icons/user-management";

const SuspendUserDetail = ({ state, onClose }) => {
  const userData = useMemo(
    () => ({
      id: faker.database.mongodbObjectId(),
      user_img: faker.image.avatar(),
      fname: faker.person.firstName(),
      lname: faker.person.lastName(),
      email: faker.internet.email(),
      number: "+1 1234 5879",
      dob: faker.date.past({ years: 20 }),
    }),
    [state.value]
  );

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
            Suspended User Detail
          </DialogTitle>
          <DialogClose className="absolute top-1/2 right-0 -translate-y-1/2 size-6 flex justify-center items-center border border-text-2 rounded-full cursor-pointer">
            <X className="text-text-2 size-3.5" />
          </DialogClose>
          <VisuallyHidden.Root>
            <DialogDescription className="text-base sm:text-lg lg:text-xl text-text-2 text-center">
              suspend user detail
            </DialogDescription>
          </VisuallyHidden.Root>
        </DialogHeader>
        <Separator className="bg-bg-4 opacity-10" />
        <div className="w-max mx-auto mt-2 sm:mt-5 flex flex-col items-center gap-y-[10px]">
          <Img
            src={userData?.user_img}
            className="size-[100px] rounded-full"
            alt="user-image"
          />
          <div className="space-y-1.5">
            <p className="text-text-1 text-xl font-semibold">
              {userData.fname} {userData.lname}
            </p>
            <div className="text-xs text-text-2 flex justify-center gap-x-1 items-end">
              <EmailIcon className="size-4" />
              {userData.email}
            </div>
            <div className="text-xs text-text-2 flex justify-center gap-x-1 items-end">
              <PhoneIcon className="size-4" />
              {userData.number}
            </div>
          </div>
        </div>
        <div className="mt-2 sm:mt-5 space-y-1.5">
          <p className="text-text-1 text-lg font-semibold">Suspend reason</p>
          <p className="text-text-6 text-lg">
            User violated community guidelines by posting inappropriate or
            harmful content.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuspendUserDetail;
