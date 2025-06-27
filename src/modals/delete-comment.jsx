import {
  AssignUserIcon,
  DeleteCommentIcon,
} from "@/assets/icons/user-management";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DeleteComment = ({ state, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={state.value} onOpenChange={handleClose}>
      <DialogContent
        showCloseButton={false}
        className="w-full sm:max-w-[456px] p-5 md:p-[30px] rounded-2xl md:rounded-3xl bg-bg-2 border-none"
      >
        <DeleteCommentIcon className="size-[126px] mx-auto text-text-3" />
        <DialogHeader className="w-full max-w-[370px] mx-auto gap-[10px]">
          <DialogTitle className="text-text-1 text-2xl font-bold text-center">
            Delete Comment
          </DialogTitle>
          <DialogDescription className="text-base sm:text-lg lg:text-xl text-text-2 text-center">
            Are you sure you want to delete the comment from “Florencio
            Dorrance”?
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 sm:mt-5 flex gap-x-3">
          <Button
            type="button"
            className="flex-1 py-3 sm:py-3.5 rounded-full lg:rounded-3xl text-base md:text-lg font-semibold text-text-2 bg-bg-3"
            onClick={onClose}
          >
            No
          </Button>
          <Button
            type="button"
            className="flex-1 py-3 sm:py-3.5 rounded-full lg:rounded-3xl text-base md:text-lg font-semibold"
            onClick={onClose}
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteComment;
