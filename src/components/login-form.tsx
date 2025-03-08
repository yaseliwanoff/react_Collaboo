import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import GoogleIcon from "../assets/images/svg/google.svg";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Убираем сообщение об ошибке при изменении
    setEmailError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    // Убираем сообщение об ошибке при изменении
    setPasswordError("");
  };

  const isPasswordValid = password.length >= 8;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Проверяем валидацию только при отправке формы
    if (!isEmailValid(email)) {
      setEmailError("Invalid email format.");
    }
    if (!isPasswordValid) {
      setPasswordError("Minimum length – 8 symbols");
    }

    // Если валидация прошла, можно выполнить дальнейшие действия (например, отправить данные на сервер)
    if (isEmailValid(email) && isPasswordValid) {
      // Здесь можно добавить логику для отправки данных
      console.log("Form submitted successfully");
    }
  };

  if (isEmailValid(email) && isPasswordValid) {
    // Здесь можно добавить логику для отправки данных
    console.log("Form submitted successfully");
  }

  return (
    <form className={cn("flex flex-col gap-6 font-[Inter]", className)} onSubmit={handleSubmit} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={handleEmailChange}
            className={cn({ 'border-red-500': isSubmitted && emailError })}
          />
          {isSubmitted && emailError && (
            <span className="text-[14px] font-light opacity-60">
              {emailError}
            </span>
          )}
        </div>
        <div className="grid gap-3 font-[Inter]">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={handlePasswordChange}
            className={cn({ 'border-red-500': isSubmitted && passwordError })}
          />
          {isSubmitted && passwordError && (
            <span className="text-[14px] font-light opacity-60">
              {passwordError}
            </span>
          )}
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <img src={GoogleIcon} alt="google" />
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
