"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/common/spinner";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useSignUp from "@/queries/auth/useSignUp";

const RegisterPage = () => {
  const router = useRouter();
  const { mutate: register, isPending: loadingRegister } = useSignUp({
    onSuccess: () => {
      router.replace("/login");
    },
  });

  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    lastName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    register({
      username: registerForm.username,
      email: registerForm.email,
      password: registerForm.password,
      name: registerForm.name,
      lastName: registerForm.lastName,
    });
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-slate-50">
      <img src="/favicon.ico" alt="Logo" className="mb-5 w-16 h-16" />
      <Card className="min-w-[450px]">
        <CardHeader className="mb-5">
          <CardTitle className="text-2xl text-center">
            Registrate en Country Find!
          </CardTitle>
          <CardDescription className="text-center">
            Agregue los siguientes datos para registrarse en la plataforma.
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
              <div className="flex items-center">
                <Label htmlFor="password">Nombre de Usuario</Label>
              </div>
              <Input
                id="username"
                type="username"
                name="username"
                onChange={handleChange}
                value={registerForm.username}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Nombre</Label>
              </div>
              <Input
                id="name"
                type="name"
                name="name"
                onChange={handleChange}
                value={registerForm.name}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Apellido</Label>
              </div>
              <Input
                id="lastName"
                type="lastName"
                name="lastName"
                onChange={handleChange}
                value={registerForm.lastName}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={registerForm.email}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                value={registerForm.password}
              />
            </div>
            <Button className="w-full" size="default" type="submit">
              Registrar
              {loadingRegister && <Spinner />}
            </Button>
            <Link href="/login">
              <Button className="w-full" size="default">
                Ya tengo cuenta
                {loadingRegister && <Spinner />}
              </Button>
            </Link>
          </form>
          <div className="flex justify-center items-center mt-4"></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
