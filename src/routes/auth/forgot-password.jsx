import { EmailIcon, ForgotPasswordIcon } from "@/assets/icons/auth";
import ArrowBack from "@/components/common/arrow-back";
import Input from "@/components/common/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Img from "@/components/ui/Img";
import { FORGOTPASSWORD_SIDE } from "@/constants/images";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

const ForgotPasswordSchema = z.object({
  email: z.string().nonempty("Email is required").email("Enter a valid email"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();

  const forgotPasswordForm = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values) => {
    navigate("/code-verification", {
      state: { email: values.email },
    });
  };

  return (
    <div className="h-dvh flex flex-col md:flex-row">
      <div className="px-4 sm:px-5 md:px-8 lg:px-10 py-14 flex-1 flex items-center justify-center bg-bg-2 rounded-r-[7%]">
        <Img
          className="w-full max-w-[457px] object-cover"
          src={FORGOTPASSWORD_SIDE}
          alt="forgot-password-side"
        />
      </div>
      <div className="flex-1 ml-[4%] px-4 sm:px-6 flex items-center">
        <ArrowBack />
        <div className="w-full max-w-[390px] sm:max-w-[430px] space-y-4 sm:space-y-6 lg:space-y-[30px]">
          <div className="w-max p-5 md:p-[25px] bg-bg-3 rounded-2xl">
            <ForgotPasswordIcon className="size-10 md:size-[50px] text-text-3" />
          </div>
          <div>
            <h4 className="text-2xl sm:text-[30px] lg:text-[38px] leading-normal font-bold text-text-1">
              Forgot Password?
            </h4>
            <p className="text-base sm:text-lg lg:text-xl text-text-2">
              No worries, we'll help you reset your password
            </p>
          </div>
          <Form {...forgotPasswordForm}>
            <form noValidate onSubmit={forgotPasswordForm.handleSubmit(onSubmit)}>
              <Input
                prefix={<EmailIcon className="size-5 md:size-6 text-text-3" />}
                name="email"
                label="Email"
              />
              <Button
                className="w-full mt-7 sm:mt-10 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl lg:rounded-3xl text-base md:text-lg font-bold"
                type="submit"
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
