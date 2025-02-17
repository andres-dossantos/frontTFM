"use client";
import useCurrentUser from "@/queries/auth/useCurrentUser";
import useLogout from "@/queries/auth/useLogout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Spinner from "@/components/common/spinner";
import Link from "next/link";

const Home = () => {
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
                      <Link href="/form" className="hover:underline">
                          Encuesta y Recomendación
                      </Link>
                  </li>
                  <li>
                      <a href="#" className="hover:underline">
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
                  <h1 className="text-6xl font-bold text-gray-800">COUNTRY FIND</h1>

                  <h1 className="text-4xl font-bold text-gray-800">Bienvenido, {user?.username}</h1>

                  <p className="text-lg text-gray-600">
                      ¡Queremos saber de ti y ayudarte a encontrar el mejor país para vivir para ti!
                      Rellena nuestra encuesta y descubre tu nuevo hogar.
                  </p>

                  <Link href="/form">
                      <Button className="bg-blue-600 text-white px-6 py-3 mt-4 w-full">
                          ¡Descubre nuestra encuesta!
                      </Button>
                  </Link>
              </Card>
          </div>
      </div>
  );
};

export default Home;
