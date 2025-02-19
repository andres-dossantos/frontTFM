"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useCurrentUser from "@/queries/auth/useCurrentUser";
import useLogout from "@/queries/auth/useLogout";
import { useFormsCreate } from "@/api/forms/forms";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {
  GenderEnum,
  AgricultureEconomyEnum,
  EaseOfBusinessEnum,
  ExportEconomyEnum,
  WorkSectorEnum,
  UnemploymentRateEnum,
  JobSecurityEnum,
  AirPollutionEnum,
  LivingAreaEnum,
  HealthcareImportanceEnum,
  MobileAccessEnum,
  ResearchDevelopmentEnum,
  LowTaxesEnum,
  CompanyRegistrationEnum,
  PovertyReductionEnum,
  UnemploymentSupportEnum,
} from "@/api/baseAppBackendAPI.schemas";

const Form = () => {
  const { user } = useCurrentUser();
  const { logout } = useLogout();
  const { mutate: createForm } = useFormsCreate();
  //createForm({
  //data: {
  // salary: 0,
  //age: 0,
  //user: 0,
  //weather: WeatherEnum.frio,
  //work: WorkEnum.agricultor,
  //gender: GenderEnum.hombre,
  //country: CountryEnum.albania,
  //},
  //});
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/wallpaper2.jpg')` }}
    >
      <div className="flex items-center justify-center h-full">
        {/* Ajuste en el Card */}
        <Card className="flex flex-col items-center p-4 w-[600px] bg-white bg-opacity-90 shadow-lg rounded-lg max-h-[80vh] overflow-y-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Encontremos tu nuevo hogar
          </h1>

          {/* Formulario con campos alineados a la izquierda */}
          <div className="grid gap-4 w-full">
            <div className="grid gap-2">
              <Label htmlFor="age" className="text-left">¿Cuál es tu edad?</Label>
              <Input
                id="age"
                type="number"
                name="age"
                min="0"
                placeholder=""
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/\D/, "");
                }}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="gender" className="text-left">¿Cuál es tu sexo?</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Hombre</SelectItem>
                  <SelectItem value="female">Mujer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="salary" className="text-left">
                ¿Cuál es tu ingreso mensual aproximado en dólares?
              </Label>
              <Input
                id="salary"
                type="number"
                name="salary"
                step="0.01"
                min="0"
                placeholder=""
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="farming" className="text-left">
                ¿Te interesa un país con una economía agrícola fuerte?
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farming">
                    Sí, prefiero un país con oportunidades en agricultura.
                  </SelectItem>
                  <SelectItem value="noFarming">
                    No, prefiero un país con una economía diversificada.
                  </SelectItem>
                  <SelectItem value="dontCareFarming">No me importa.</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Label htmlFor="business">¿Qué tan importante es la facilidad para hacer negocios en el país?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moreBusiness">Muy importante (Quiero emprender o invertir).</SelectItem>
                <SelectItem value="mediumBusiness">Moderadamente importante (Podría considerar oportunidades).</SelectItem>
                <SelectItem value="noBusiness">No es importante para mí.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="internationalBusiness">¿Qué tan importante es la inversión extranjera en el país?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moreInternationalBusiness">Muy importante.</SelectItem>
                <SelectItem value="noInternationalBusiness">No me importa.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="export">¿Prefieres un país con una economía basada en la exportación?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moreExport">Sí, quiero un país con un alto nivel de comercio internacional.</SelectItem>
                <SelectItem value="noExport">No es relevante para mí.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="work">¿En qué sector trabajas o te gustaría trabajar?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="farming">Agricultura / Pesca</SelectItem>
                <SelectItem value="tech">Tecnología / Innovación</SelectItem>
                <SelectItem value="businessWork">Negocios / Emprendimiento</SelectItem>
                <SelectItem value="education">Educación / Salud</SelectItem>
                <SelectItem value="manufacturing">Industria / Manufactura</SelectItem>
                <SelectItem value="othersWork">Otros</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="tasa">¿Qué tan importante es la tasa de desempleo para ti?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lowTasa">Quiero un país con muy baja tasa de desempleo.</SelectItem>
                <SelectItem value="highTasa">No me importa mucho la tasa de desempleo.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="securityWork">¿Qué nivel de seguridad laboral prefieres?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="goodContracts">Prefiero un país con empleos estables y buenos contratos.</SelectItem>
                <SelectItem value="noFormal">No me importa si el empleo es informal o vulnerable.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="electricity">¿Qué tan importante es el acceso a la electricidad en zonas urbanas?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yesElectricity">Muy importante.</SelectItem>
                <SelectItem value="noElectricity">No me importa.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="contamination">¿Qué tan importante es la contaminación del aire en tu decisión?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lowContamination">Muy importante, quiero vivir en un país con baja contaminación.</SelectItem>
                <SelectItem value="highContamination">No me importa mucho.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="rural">¿Quieres vivir en una ciudad o en un área rural?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cityLife">Ciudad.</SelectItem>
                <SelectItem value="ruralLife">Rural.</SelectItem>
                <SelectItem value="noneLife">No me importa.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="helth">¿Qué tan importante es el sistema de salud?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="muchHealth">Muy importante, quiero un país con buena atención médica.</SelectItem>
                <SelectItem value="noHealth">No me importa mucho.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="phone">¿Qué tan importante es el acceso a la telefonía móvil y la tecnología?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yesPhone">Muy importante.</SelectItem>
                <SelectItem value="noPhone">No me importa.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="investigation">¿Prefieres un país con alta inversión en investigación y desarrollo?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yesInvestigation">Sí, prefiero un país innovador.</SelectItem>
                <SelectItem value="noInvestigation">No es una prioridad para mí.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="tax">¿Prefieres un país con impuestos más bajos?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yesTax">Sí, quiero un país con menor carga impositiva.</SelectItem>
                <SelectItem value="noTax">No me importa.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="newBusiness">¿Quieres un país con facilidad para registrar empresas?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yesNewBusiness">Sí, quiero facilidades para emprender.</SelectItem>
                <SelectItem value="noNewBusiness">No me importa.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="poberty">¿Qué tan importante es la reducción de la pobreza en el país?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yesPoberty">Muy importante, quiero un país con menos desigualdad.</SelectItem>
                <SelectItem value="noPoberty">No es una prioridad.</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="programs">¿Te gustaría que el país tenga programas de apoyo al desempleo?</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yesPrograms">Sí, quiero un país con apoyo social.</SelectItem>
                <SelectItem value="noPrograms">No me importa.</SelectItem>
              </SelectContent>
            </Select>

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


