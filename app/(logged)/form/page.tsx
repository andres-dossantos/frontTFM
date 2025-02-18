"use client";
import useCurrentUser from "@/queries/auth/useCurrentUser";
import useLogout from "@/queries/auth/useLogout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Spinner from "@/components/common/spinner";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Form = () => {
  const { user } = useCurrentUser();
  const { logout } = useLogout();
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/wallpaper2.jpg')` }}
    >
      <div className="flex items-center justify-center h-full">
        <Card className="flex flex-col items-center justify-center text-center p-10 w-[600px] gap-4 bg-white bg-opacity-90 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800">
            Encontremos tu nuevo hogar
          </h1>

          <style jsx>{`
            .form-field {
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              font-size: 16px;
              background-color: white;
            }
          `}</style>

          <div className="grid gap-4 w-full">
            <div className="grid gap-2">
              <Label htmlFor="age">¿Cual es tu edad?</Label>
              <Input
                id="age"
                type="number"
                name="age"
                min="0"
                className="form-field"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/, "");
                }}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="gender">¿Cuál es tu sexo?</Label>
              <select id="gender" name="gender" className="form-field">
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="work">¿Cual es tu profesión?</Label>
              <select id="work" name="work" className="form-field">
                <option value="ingeniero">Ingeniero</option>
                <option value="agricultor">Agricultor</option>
                <option value="profesor">Profesor</option>
                <option value="economista">Economista</option>
                <option value="deportista">Deportista</option>
                <option value="artista">Artista</option>
              </select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="salary">
                ¿Cual es tu salario actual? (anual)
              </Label>
              <Input
                id="salary"
                type="number"
                name="salary"
                step="0.01"
                min="0"
                className="form-field"
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="country">¿Pais donde vives actualmente?</Label>
              </div>
              <select
                id="country"
                name="country"
                className="border border-gray-300 p-2 rounded"
                //onChange={handleChange}
                //value={registerForm.country}
              >
                <option value="albania">Albania</option>
                <option value="andorra">Andorra</option>
                <option value="armenia">Armenia</option>
                <option value="austria">Austria</option>
                <option value="azerbaiyan">Azerbaiyan</option>
                <option value="bielorrusia">Bielorrusia</option>
                <option value="belgica">Belgica</option>
                <option value="bosnia_y_herzegovina">
                  Bosnia y Herzegovina
                </option>
                <option value="bulgaria">Bulgaria</option>
                <option value="croacia">Croacia</option>
                <option value="chipre">Chipre</option>
                <option value="republica_checa">Republica Checa</option>
                <option value="dinamarca">Dinamarca</option>
                <option value="estonia">Estonia</option>
                <option value="finlandia">Finlandia</option>
                <option value="francia">Francia</option>
                <option value="georgia">Georgia</option>
                <option value="alemania">Alemania</option>
                <option value="grecia">Grecia</option>
                <option value="hungria">Hungria</option>
                <option value="islandia">Islandia</option>
                <option value="irlanda">Irlanda</option>
                <option value="italia">Italia</option>
                <option value="kazajistan">Kazajistan</option>
                <option value="kosovo">Kosovo</option>
                <option value="letonia">Letonia</option>
                <option value="liechtenstein">Liechtenstein</option>
                <option value="lituania">Lituania</option>
                <option value="luxemburgo">Luxemburgo</option>
                <option value="malta">Malta</option>
                <option value="moldavia">Moldavia</option>
                <option value="monaco">Monaco</option>
                <option value="montenegro">Montenegro</option>
                <option value="paises_bajos">Paises Bajos</option>
                <option value="macedonia_del_norte">Macedonia del Norte</option>
                <option value="noruega">Noruega</option>
                <option value="polonia">Polonia</option>
                <option value="portugal">Portugal</option>
                <option value="rumania">Rumania</option>
                <option value="rusia">Rusia</option>
                <option value="san_marino">San Marino</option>
                <option value="serbia">Serbia</option>
                <option value="eslovaquia">Eslovaquia</option>
                <option value="eslovenia">Eslovenia</option>
                <option value="espana">España</option>
                <option value="suecia">Suecia</option>
                <option value="suiza">Suiza</option>
                <option value="turquia">Turquia</option>
                <option value="ucrania">Ucrania</option>
                <option value="reino_unido">Reino Unido</option>
                <option value="ciudad_del_vaticano">Ciudad del Vaticano</option>
              </select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="weather">Tipo de clima deseado</Label>
              <select id="weather" name="weather" className="form-field">
                <option value="caliente">Caliente</option>
                <option value="medio">Medio</option>
                <option value="frio">Frío</option>
              </select>
            </div>

            <Link href="/home">
              <Button className="bg-blue-600 text-white px-6 py-3 mt-4 w-full">
                Enviar
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Form;
