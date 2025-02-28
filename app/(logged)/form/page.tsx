"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useCurrentUser from "@/queries/auth/useCurrentUser";
import useLogout from "@/queries/auth/useLogout";
import {
  useFormsCreate,
  useFormsList,
  useFormsUpdate,
} from "@/api/forms/forms";
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
  CountrySalaryEnum,
  JobSecurityEnum,
  UnemploymentRateEnum,
  CorruptionEnum,
  HealthcareImportanceEnum,
  EconomyEnum,
  FreedomEnum,
  AirPollutionEnum,
  LowInflationEnum,
  ForeignInvestmentEnum,
  CityGrowthEnum,
  LivingAreaEnum,
} from "@/api/baseAppBackendAPI.schemas";
import { useEffect, useState } from "react";
import Spinner from "@/components/common/spinner";
import { useRouter } from "next/navigation";

const Form = () => {
  const { user } = useCurrentUser();
  const router = useRouter();
  const { mutate: createForm, isPending: loadingCreate } = useFormsCreate({
    mutation: {
      onSuccess: () => {
        router.push("/result");
      },
    },
  });

  const { mutate: updateForm, isPending: loadingUpdate } = useFormsUpdate({
    mutation: {
      onSuccess: () => {
        router.push("/result");
      },
    },
  });

  const { data: userForms } = useFormsList({ search: `${user?.id}` });

  const [formsForm, setFormsForm] = useState({
    user: undefined,
    age: undefined,
    gender: undefined,
    country_salary: undefined,
    job_security: undefined,
    unemployment_rate: undefined,
    corruption: undefined,
    healthcare_importance: undefined,
    economy: undefined,
    freedom: undefined,
    air_pollution: undefined,
    low_inflation: undefined,
    foreign_investment: undefined,
    city_growth: undefined,
    living_area: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormsForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const hasExistingForm = () => {
    return !!userForms?.length;
  };

  const handleSubmit = () => {
    if (hasExistingForm() === false) {
      createForm({
        data: {
          user: user?.id || 0,
          age: formsForm.age || 0,
          gender: formsForm.gender,
          country_salary: formsForm.country_salary,
          job_security: formsForm.job_security,
          unemployment_rate: formsForm.unemployment_rate,
          corruption: formsForm.corruption,
          healthcare_importance: formsForm.healthcare_importance,
          economy: formsForm.economy,
          freedom: formsForm.freedom,
          air_pollution: formsForm.air_pollution,
          low_inflation: formsForm.low_inflation,
          foreign_investment: formsForm.foreign_investment,
          city_growth: formsForm.city_growth,
          living_area: formsForm.living_area,
        },
      });
      return;
    }
    updateForm({
      id: userForms?.[0].id || 0,
      data: {
        user: user?.id || 0,
        age: formsForm.age || 0,
        gender: formsForm.gender,
        country_salary: formsForm.country_salary,
        job_security: formsForm.job_security,
        unemployment_rate: formsForm.unemployment_rate,
        corruption: formsForm.corruption,
        healthcare_importance: formsForm.healthcare_importance,
        economy: formsForm.economy,
        freedom: formsForm.freedom,
        air_pollution: formsForm.air_pollution,
        low_inflation: formsForm.low_inflation,
        foreign_investment: formsForm.foreign_investment,
        city_growth: formsForm.city_growth,
        living_area: formsForm.living_area,
      },
    });
  };

  useEffect(() => {
    if (hasExistingForm() === false) {
      return;
    }
    const userForm = userForms?.[0];
    if (userForm === undefined) {
      return;
    }
    setFormsForm({
      ...formsForm,
      age: userForm.age || 0,
      gender: userForm.gender,
      country_salary: userForm.country_salary,
      job_security: userForm.job_security,
      unemployment_rate: userForm.unemployment_rate,
      corruption: userForm.corruption,
      healthcare_importance: userForm.healthcare_importance,
      economy: userForm.economy,
      freedom: userForm.freedom,
      air_pollution: userForm.air_pollution,
      low_inflation: userForm.low_inflation,
      foreign_investment: userForm.foreign_investment,
      city_growth: userForm.city_growth,
      living_area: userForm.living_area,
    });
  }, [userForms]);

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/wallpaper2.jpg')` }}
    >
      <div className="flex items-center justify-center h-full">
        <Card className="flex flex-col items-center p-4 w-[600px] bg-white bg-opacity-90 shadow-lg rounded-lg max-h-[80vh] overflow-y-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Encontremos tu nuevo hogar
          </h1>

          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="grid gap-4 w-full">
              <div className="grid gap-2">
                <Label htmlFor="age" className="text-left">
                  ¿Cuál es tu edad?
                </Label>
                <Input
                  id="age"
                  type="number"
                  name="age"
                  min="0"
                  onChange={handleChange}
                  value={formsForm.age}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="gender" className="text-left">
                  ¿Cuál es tu sexo?
                </Label>
                <Select
                  name="gender"
                  onValueChange={(value: GenderEnum) => {
                    setFormsForm({
                      ...formsForm,
                      gender: value,
                    });
                  }}
                  value={formsForm.gender}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={GenderEnum.Hombre}>Hombre</SelectItem>
                    <SelectItem value={GenderEnum.Mujer}>Mujer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="country_salary" className="text-left">
                  ¿Qué tan importante es para ti que los salarios en el país sean altos?
                </Label>
                <Select
                  name="country_salary"
                  onValueChange={(value: CountrySalaryEnum) => {
                    setFormsForm({
                      ...formsForm,
                      country_salary: value,
                    });
                  }}
                  value={formsForm.country_salary}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={CountrySalaryEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={CountrySalaryEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={CountrySalaryEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={CountrySalaryEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="job_security" className="text-left">
                  ¿Qué tan importante es que sea fácil abrir un negocio o encontrar empleo?
                </Label>
                <Select
                  name="job_security"
                  onValueChange={(value: JobSecurityEnum) => {
                    setFormsForm({
                      ...formsForm,
                      job_security: value,
                    });
                  }}
                  value={formsForm.job_security}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={JobSecurityEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={JobSecurityEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={JobSecurityEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={JobSecurityEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="unemployment_rate" className="text-left">
                  ¿Qué tan importante es que haya pocas personas desempleadas?
                </Label>
                <Select
                  name="unemployment_rate"
                  onValueChange={(value: UnemploymentRateEnum) => {
                    setFormsForm({
                      ...formsForm,
                      unemployment_rate: value,
                    });
                  }}
                  value={formsForm.unemployment_rate}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={UnemploymentRateEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={UnemploymentRateEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={UnemploymentRateEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={UnemploymentRateEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="corruption" className="text-left">
                  ¿Qué tan importante es vivir en un país con baja corrupción?
                </Label>
                <Select
                  name="corruption"
                  onValueChange={(value: CorruptionEnum) => {
                    setFormsForm({
                      ...formsForm,
                      corruption: value,
                    });
                  }}
                  value={formsForm.corruption}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={CorruptionEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={CorruptionEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={CorruptionEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={CorruptionEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="healthcare_importance" className="text-left">
                  ¿Qué tan importante es para ti que haya buenos médicos y hospitales accesibles?
                </Label>
                <Select
                  name="healthcare_importance"
                  onValueChange={(value: HealthcareImportanceEnum) => {
                    setFormsForm({
                      ...formsForm,
                      healthcare_importance: value,
                    });
                  }}
                  value={formsForm.healthcare_importance}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={HealthcareImportanceEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={HealthcareImportanceEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={HealthcareImportanceEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={HealthcareImportanceEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="economy" className="text-left">
                  ¿Qué tan importante es que la economía del país esté creciendo constantemente?
                </Label>
                <Select
                  name="economy"
                  onValueChange={(value: EconomyEnum) => {
                    setFormsForm({
                      ...formsForm,
                      economy: value,
                    });
                  }}
                  value={formsForm.economy}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={EconomyEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={EconomyEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={EconomyEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={EconomyEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="freedom" className="text-left">
                  ¿Qué tan importante es vivir en un país con más libertades personales y económicas?
                </Label>
                <Select
                  name="freedom"
                  onValueChange={(value: FreedomEnum) => {
                    setFormsForm({
                      ...formsForm,
                      freedom: value,
                    });
                  }}
                  value={formsForm.freedom}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={FreedomEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={FreedomEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={FreedomEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={FreedomEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="air_pollution" className="text-left">
                  ¿Qué tan importante es para ti vivir en un país con aire limpio?
                </Label>
                <Select
                  name="air_pollution"
                  onValueChange={(value: AirPollutionEnum) => {
                    setFormsForm({
                      ...formsForm,
                      air_pollution: value,
                    });
                  }}
                  value={formsForm.air_pollution}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={AirPollutionEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={AirPollutionEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={AirPollutionEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={AirPollutionEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="low_inflation" className="text-left">
                  ¿Qué tan importante es que los precios se mantengan estables y la inflación sea baja?
                </Label>
                <Select
                  name="low_inflation"
                  onValueChange={(value: LowInflationEnum) => {
                    setFormsForm({
                      ...formsForm,
                      low_inflation: value,
                    });
                  }}
                  value={formsForm.low_inflation}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={LowInflationEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={LowInflationEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={LowInflationEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={LowInflationEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="foreign_investment" className="text-left">
                  ¿Qué tan importante es que el país reciba inversión extranjera?
                </Label>
                <Select
                  name="foreign_investment"
                  onValueChange={(value: ForeignInvestmentEnum) => {
                    setFormsForm({
                      ...formsForm,
                      foreign_investment: value,
                    });
                  }}
                  value={formsForm.foreign_investment}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ForeignInvestmentEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={ForeignInvestmentEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={ForeignInvestmentEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={ForeignInvestmentEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="city_growth" className="text-left">
                  ¿Qué tan importante es para ti vivir en una ciudad en crecimiento con nuevas oportunidades?
                </Label>
                <Select
                  name="city_growth"
                  onValueChange={(value: CityGrowthEnum) => {
                    setFormsForm({
                      ...formsForm,
                      city_growth: value,
                    });
                  }}
                  value={formsForm.city_growth}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={CityGrowthEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={CityGrowthEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={CityGrowthEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={CityGrowthEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="living_area" className="text-left">
                  ¿Qué tan importante es que haya muchas opciones de comercio, servicios y entretenimiento?
                </Label>
                <Select
                  name="living_area"
                  onValueChange={(value: LivingAreaEnum) => {
                    setFormsForm({
                      ...formsForm,
                      living_area: value,
                    });
                  }}
                  value={formsForm.living_area}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={LivingAreaEnum.Muy_importante}>Muy importante</SelectItem>
                    <SelectItem value={LivingAreaEnum.Importante}>Importante</SelectItem>
                    <SelectItem value={LivingAreaEnum.Poco_importante}>Poco importante</SelectItem>
                    <SelectItem value={LivingAreaEnum.Nada_importante}>Nada importante</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>
            <Button className="w-full" size="default" type="submit">
              Enviar y ver Resultados
              {(loadingCreate || loadingUpdate) && <Spinner />}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Form;
