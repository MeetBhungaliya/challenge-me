import { MessageTextIcon } from "@/assets/icons/user-management";
import Input from "@/components/common/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SuspendUserSchema = z.object({
  reason: z.string().min(1, "Reason is required"),
});

const SuspendUser = ({ state, onClose }) => {
  const suspendUserForm = useForm({
    resolver: zodResolver(SuspendUserSchema),
    defaultValues: { reason: "" },
  });

  const onSubmit = () => {
    handleClose();
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={state.value}>
      <DialogContent
        showCloseButton={false}
        className="w-full sm:max-w-[565px] p-8 md:p-10 rounded-2xl md:rounded-3xl bg-bg-2 border-none gap-[30px]"
      >
        <DialogHeader className="w-full max-w-[370px] mx-auto gap-[10px]">
          <DialogTitle className="text-text-1 text-2xl font-bold text-center">
            Suspend User
          </DialogTitle>
          <VisuallyHidden.Root>
            <DialogDescription className="text-base sm:text-lg lg:text-xl text-text-2 text-center">
              suspend user
            </DialogDescription>
          </VisuallyHidden.Root>
        </DialogHeader>
        <Separator className="bg-bg-4 opacity-10" />
        <Form {...suspendUserForm}>
          <form
            noValidate
            onSubmit={suspendUserForm.handleSubmit(onSubmit)}
            className="space-y-[30px]"
          >
            <Input
              prefix={
                <MessageTextIcon className="size-5 md:size-6 text-text-3" />
              }
              name="reason"
              label="Suspend reason"
              className="h-[140px] resize-none bg-bg-3"
              textarea
            />
            <div className="flex gap-x-3">
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
                Suspend
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SuspendUser;
