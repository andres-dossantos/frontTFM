import Link from "next/link";
import { Button } from "@/components/ui/button";
import useLogout from "@/queries/auth/useLogout";

export const Navbar = () => {
  const { logout } = useLogout();
  return (
    <nav className="bg-gray-100 p-4 flex items-center justify-between">
      <ul className="flex space-x-6">
        <li>
          <a href="/home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <Link href="/form" className="hover:underline">
            Encuesta
          </Link>
        </li>
        <li>
          <Link href="/result" className="hover:underline">
            Resultados de la encuesta
          </Link>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Gráficas
          </a>
        </li>
      </ul>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src="/favicon.ico" alt="Logo" className="w-10 h-10" />
      </div>

      <Button onClick={logout} className="ml-auto">
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
