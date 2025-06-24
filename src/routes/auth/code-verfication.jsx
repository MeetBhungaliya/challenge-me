import { CodeVerificationIcon } from "@/assets/icons/auth";
import ArrowBack from "@/components/common/arrow-back";
import Img from "@/components/ui/Img";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { CODEVERIFICATION_SIDE } from "@/constants/images";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { z } from "zod";

const OTP_LENGTH = 4;

const OTPSchema = z.object({
  otp: z
    .string({ required_error: "OTP is required" })
    .length(4, "OTP must be 4 digit"),
});

const CodeVerification = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const codeVerificationForm = useForm({
    resolver: zodResolver(OTPSchema),
    defaultValues: { otp: "" },
  });

  const onSubmit = (values) => {
    navigate({
      pathname: "/reset-password",
      state: { email: state.email, code: values.otp },
    });
  };

  return (
    <div className="h-dvh flex flex-col md:flex-row">
      <div className="px-4 sm:px-5 md:px-8 lg:px-10 py-14 flex-1 flex items-center justify-center bg-bg-2 rounded-r-[7%]">
        <Img
          className="w-full max-w-[457px] object-cover"
          src={CODEVERIFICATION_SIDE}
          alt="codeverification-side"
        />
      </div>
      <div className="flex-1 ml-[4%] px-4 sm:px-6 flex items-center">
        <ArrowBack />
        <div className="w-full max-w-[390px] sm:max-w-[430px] space-y-4 sm:space-y-6 lg:space-y-[30px]">
          <div className="w-max p-5 md:p-[25px] bg-bg-3 rounded-2xl">
            <CodeVerificationIcon className="size-10 md:size-[50px] text-text-3" />
          </div>
          <div className="w-full max-w-[430px]">
            <h4 className="text-2xl sm:text-[30px] lg:text-[38px] leading-normal font-bold text-text-1">
              Authentication
            </h4>
            <p className="text-base sm:text-lg lg:text-xl text-text-2">
              Enter the verification code sent to your email
            </p>
          </div>
          <Form {...codeVerificationForm}>
            <form
              noValidate
              onSubmit={codeVerificationForm.handleSubmit(onSubmit)}
              className="space-y-6 sm:space-y-8 lg:space-y-10"
            >
              <FormField
                name="otp"
                control={codeVerificationForm.control}
                render={({ field, formState: { errors } }) => (
                  <FormItem className="w-full max-w-[430px]">
                    <FormControl>
                      <InputOTP
                        maxLength={OTP_LENGTH}
                        pattern={REGEXP_ONLY_DIGITS}
                        {...field}
                      >
                        <InputOTPGroup className="w-full flex gap-x-3 md:gap-x-4">
                          {new Array(OTP_LENGTH).fill().map((_, index) => {
                            return (
                              <InputOTPSlot
                                key={index}
                                index={index}
                                className={cn(
                                  "w-full py-7 font-semibold text-[22px] bg-bg-2 border-none !rounded-4xl",
                                  errors?.otp?.message
                                    ? "text-red-500"
                                    : "text-text-1"
                                )}
                              />
                            );
                          })}
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                  </FormItem>
                )}
              />
              <p className="text-text-2 text-lg text-center">
                Didn’t receive the code?
                <button
                  type="button"
                  className="text-text-3 font-medium cursor-pointer"
                >
                  &nbsp;Resend&nbsp;
                </button>
              </p>
              <Button
                className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl lg:rounded-3xl text-base md:text-lg font-bold"
                type="submit"
              >
                Verify
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CodeVerification;
