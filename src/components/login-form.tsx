import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import GoogleIcon from "../assets/images/svg/google.svg";
import { auth, signInWithEmailAndPassword } from "@/lib/firebase";
import { useToken } from '@/contexts/TokenContext';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { setToken } = useToken();

  const handleSubmitToken = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (isEmailValid(email) && isPasswordValid) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Получение токена Firebase
        const token = await user.getIdToken();
        
        // Сохранение токена в localStorage
        localStorage.setItem('firebaseToken', token);
        setToken(token); // Сохраните токен в контексте

        // Сохранение email и userId в Local Storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userId', user.uid);
      } catch (error) {
        console.error("Error signing in:", error);
      }
    }
  };

  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const isPasswordValid = password.length >= 8;

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitted(true);

  //   if (!isEmailValid(email)) {
  //     setEmailError("Invalid email format.");
  //   }
  //   if (!isPasswordValid) {
  //     setPasswordError("Minimum length – 8 symbols");
  //   }

  //   // Если валидация прошла, можно выполнить дальнейшие действия (например, отправить данные на сервер)
  //   if (isEmailValid(email) && isPasswordValid) {
  //     try {
  //       // Аутентификация пользователя
  //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //       const user = userCredential.user;

  //       // Сохранение email и userId в Local Storage
  //       localStorage.setItem('userEmail', email);
  //       localStorage.setItem('userId', user.uid); // Сохранение уникального идентификатора пользователя
  //     } catch (error) {
  //       console.error("Error signing in:", error);
  //       // Обработка ошибок аутентификации
  //     }
  //   }
  // };

  return (
    <form className={cn("flex flex-col gap-6 font-[Inter]", className)} onSubmit={handleSubmitToken} {...props}>
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