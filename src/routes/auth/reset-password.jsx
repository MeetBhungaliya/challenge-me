import {
  LockIcon,
  ResetPasswordIcon
} from "@/assets/icons/auth";
import ArrowBack from "@/components/common/arrow-back";
import Password from "@/components/common/password";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Img from "@/components/ui/Img";
import { RESETPASSWORD_SIDE } from "@/constants/images";
import ResetPasswordSuccess from "@/modals/reset-password-success";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useBoolean } from "usehooks-ts";
import { z } from "zod";

const ResetPasswordSchema = z
  .object({
    "new-password": z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters"),
    "confirm-new-password": z.string().nonempty("Confirm password is required"),
  })
  .refine((data) => data["new-password"] === data["confirm-new-password"], {
    path: ["confirm-new-password"],
    message: "Passwords do not match",
  });

const ResetPassword = () => {
  const isPasswordReset = useBoolean(false)

  const resetPasswordForm = useForm({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: { "new-password": "", "confirm-new-password": "" },
  });

  const onSubmit = (values) => {
    isPasswordReset.setTrue();
  };

  return (
    <>
      <div className="h-dvh flex flex-col md:flex-row">
        <div className="px-4 sm:px-5 md:px-8 lg:px-10 py-14 flex-1 flex items-center justify-center bg-bg-2 rounded-r-[7%]">
          <Img
            className="w-full max-w-[457px] object-cover"
            src={RESETPASSWORD_SIDE}
            alt="reset-password-side"
          />
        </div>
        <div className="flex-1 ml-[4%] px-4 sm:px-6 flex items-center">
          <ArrowBack />
          <div className="w-full max-w-[390px] sm:max-w-[430px] space-y-4 sm:space-y-6 lg:space-y-[30px]">
            <div className="w-max p-5 md:p-[25px] bg-bg-3 rounded-2xl">
              <ResetPasswordIcon className="size-10 md:size-[50px] text-text-3" />
            </div>
            <div>
              <h4 className="text-2xl sm:text-[30px] lg:text-[38px] leading-normal font-bold text-text-1">
                Reset Password
              </h4>
              <p className="text-base sm:text-lg lg:text-xl text-text-2">
                Create a new password for your account. Make sure it’s strong
                and easy to remember
              </p>
            </div>
            <Form {...resetPasswordForm}>
              <form
                noValidate
                onSubmit={resetPasswordForm.handleSubmit(onSubmit)}
              >
                <div className="flex flex-col gap-y-5 md:gap-y-[30px]">
                  <Password
                    prefix={
                      <LockIcon className="size-5 md:size-6 text-text-3" />
                    }
                    name="new-password"
                    label="New password"
                  />
                  <Password
                    prefix={
                      <LockIcon className="size-5 md:size-6 text-text-3" />
                    }
                    name="confirm-new-password"
                    label="Confirm new password"
                  />
                </div>
                <Button
                  className="w-full mt-7 sm:mt-10 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl lg:rounded-3xl text-base md:text-lg font-bold"
                  type="submit"
                >
                  Update
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <ResetPasswordSuccess
        state={isPasswordReset}
        onClose={()=>{
          isPasswordReset.setFalse()
          resetPasswordForm.reset();
        }}
      />
    </>
  );
};

export default ResetPassword;
