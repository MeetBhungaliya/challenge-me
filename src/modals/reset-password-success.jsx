import { ResetPasswordSuccessIcon } from "@/assets/icons/auth";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ResetPasswordSuccess = ({ state, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={state.value}>
      <DialogContent
        showCloseButton={false}
        className="w-full sm:max-w-[456px] p-8 md:p-10 rounded-2xl md:rounded-3xl bg-bg-2 border-none"
      >
        <ResetPasswordSuccessIcon className="size-[126px] mx-auto text-text-3" />
        <DialogHeader className="w-full max-w-[370px] mx-auto gap-[10px]">
          <DialogTitle className="text-text-1 text-2xl font-bold text-center">
            Successful
          </DialogTitle>
          <DialogDescription className="text-base sm:text-lg lg:text-xl text-text-2 text-center">
            Your password has been reset successfully
          </DialogDescription>
        </DialogHeader>
        <Button
          type="button"
          className="w-full mt-2 sm:mt-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl lg:rounded-3xl text-base md:text-lg font-bold"
          onClick={onClose}
        >
          Ok
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ResetPasswordSuccess;
