"use client";
import useCurrentUser from "@/queries/auth/useCurrentUser";
import useLogout from "@/queries/auth/useLogout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Spinner from "@/components/common/spinner";
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

const Form = () => {
  const { user } = useCurrentUser();
  const { logout } = useLogout();
  return (
      <div
          className="h-screen bg-cover bg-center"
          style={{backgroundImage: `url('/wallpaper2.jpg')`}}
      >
          <nav className="bg-gray-100 p-4 flex items-center justify-between">
              <ul className="flex space-x-6">
                  <li>
                      <a href="/home" className="hover:underline">
                          Home
                      </a>
                  </li>
                  <li>
                      <a href="/form" className="hover:underline">
                          Encuesta y Recomendación
                      </a>
                  </li>
                  <li>
                      <a href="a" className="hover:underline">
                          Gráficas
                      </a>
                  </li>
              </ul>

              <div className="absolute left-1/2 transform -translate-x-1/2">
                  <img src="/favicon.ico" alt="Logo" className="w-10 h-10"/>
              </div>

              <Button onClick={logout} className="ml-auto">
                  Logout
              </Button>
          </nav>

          <div className="flex items-center justify-center h-full">
              <Card
                  className="flex flex-col items-center justify-center text-center p-10 w-[600px] gap-4 bg-white bg-opacity-90 shadow-lg rounded-lg"
              >

                  <h1 className="text-4xl font-bold text-gray-800">Encontremos tu nuevo hogar</h1>

                  <div className="grid gap-2">
                      <div className="flex items-center">
                          <Label htmlFor="password">¿Cual es tu profesión?</Label>
                      </div>
                      <Input
                          id="work"
                          type="work"
                          name="work"
                          //onChange={handleChange}
                          //value={registerForm.password}
                      />
                  </div>

                  <div className="grid gap-2">
                      <div className="flex items-center">
                          <Label htmlFor="password">¿Cual es tu salario actual?</Label>
                      </div>
                      <Input
                          id="salary"
                          type="salary"
                          name="salary"
                          //onChange={handleChange}
                          //value={registerForm.password}
                      />
                  </div>

                  <div className="grid gap-2">
                      <div className="flex items-center">
                          <Label htmlFor="password">Tipo de clima deseado</Label>
                      </div>
                      <Input
                          id="weather"
                          type="weather"
                          name="weather"
                          //onChange={handleChange}
                          //value={registerForm.password}
                      />
                  </div>

                  <Link href="/home">
                      <Button className="bg-blue-600 text-white px-6 py-3 mt-4 w-full">
                          Enviar
                      </Button>
                  </Link>
              </Card>
          </div>
      </div>
  );
};

export default Form;