"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLogin from "@/queries/auth/useLogin";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/common/spinner";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const { mutate: login, isPending: loadingLogin } = useLogin({
    onSuccess: () => {
      router.replace("/home");
    },
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    login({
      email: loginForm.email,
      password: loginForm.password,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleForgotPassword = () => {
    alert("Coming soon");
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-slate-50">
      <Card className="min-w-[450px]">
        <CardHeader className="mb-5">
          <CardTitle className="text-2xl text-center">Country Find</CardTitle>
          <CardTitle className="text-1xl text-center">¡Busca tu siguiente Hogar!</CardTitle>
          <CardDescription className="text-center">
            Introduce tu correo y contraseña para acceder
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
              className="flex flex-col gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
          >
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                name="email"
                onChange={handleChange}
                value={loginForm.email}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                <a
                  href=""
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  onClick={handleForgotPassword}
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                value={loginForm.password}
              />
            </div>
            <Button className="w-full" size="default" type="submit">
              Login
              {loadingLogin && <Spinner />}
            </Button>
            <Button className="w-full" size="default" type="submit">
              Registrate
              {loadingLogin && <Spinner />}
            </Button>
          </form>
          <div className="flex justify-center items-center mt-4">
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
