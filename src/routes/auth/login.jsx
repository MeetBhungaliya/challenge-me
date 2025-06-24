import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Img from "@/components/ui/Img";
import { LOGIN_SIDE, LOGO } from "@/constants/images";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Input from "@/components/common/input";
import { EmailIcon, LockIcon } from "@/assets/icons/auth";
import Password from "@/components/common/password";

const LoginSchema = z.object({
  email: z.string().nonempty("Email is required").email("Enter a valid email"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  const loginForm = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = () => {};

  return (
    <div className="h-dvh flex flex-col md:flex-row">
      <div className="px-4 sm:px-5 md:px-8 lg:px-10 py-14 flex-1 flex items-center justify-center bg-bg-2 rounded-r-[7%]">
        <Img
          className="w-full max-w-[457px] object-cover"
          src={LOGIN_SIDE}
          alt="login-side"
        />
      </div>
      <div className="flex-1 ml-[4%] px-4 sm:px-6 flex items-center">
        <div className="w-full max-w-[440px] sm:max-w-[570px] space-y-4 sm:space-y-6 lg:space-y-[30px]">
          <Img
            className="w-full max-w-20 aspect-square"
            src={LOGO}
            alt="challage-me-logo"
          />
          <div>
            <h4 className="text-2xl sm:text-[30px] lg:text-[38px] leading-normal font-bold text-text-1">
              Welcome Back!
            </h4>
            <p className="text-base sm:text-lg lg:text-xl text-text-2">
              Please sign in to continue
            </p>
          </div>
          <Form {...loginForm}>
            <form noValidate onSubmit={loginForm.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-y-5 md:gap-y-[30px]">
                <Input
                  prefix={
                    <EmailIcon className="size-5 md:size-6 text-text-3" />
                  }
                  name="email"
                  label="Email"
                />
                <Password
                  prefix={<LockIcon className="size-5 md:size-6 text-text-3" />}
                  name="password"
                  label="Password"
                />
              </div>
              <Link
                to="/forgot-password"
                className="block mt-2 sm:mt-3 mb-7 sm:mb-10 font-medium text-sm sm:!text-base lg:text-lg text-text-1 text-end"
              >
                Forgot Password?
              </Link>
              <Button
                className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl lg:rounded-3xl text-base md:text-lg font-bold"
                type="submit"
              >
                Sign In
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
