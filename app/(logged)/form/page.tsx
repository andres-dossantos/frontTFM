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
import { useEffect, useState } from "react";
import Spinner from "@/components/common/spinner";
import { useRouter } from "next/navigation";

const Form = () => {
  const { user } = useCurrentUser();
  const router = useRouter();
  const { mutate: createForm, isPending: loadingCreate } = useFormsCreate({
    mutation: {
      onSuccess: () => {
        router.push("/home");
      },
    },
  });

  const { mutate: updateForm, isPending: loadingUpdate } = useFormsUpdate({
    mutation: {
      onSuccess: () => {
        router.push("/home");
      },
    },
  });

  const { data: userForms } = useFormsList({ search: `${user?.id}` });

  const [formsForm, setFormsForm] = useState({
    user: undefined,
    age: undefined,
    salary: undefined,
    gender: undefined,
    agriculture_economy: undefined,
    ease_of_business: undefined,
    export_economy: undefined,
    work_sector: undefined,
    unemployment_rate: undefined,
    job_security: undefined,
    air_pollution: undefined,
    living_area: undefined,
    healthcare_importance: undefined,
    mobile_access: undefined,
    research_development: undefined,
    low_taxes: undefined,
    company_registration: undefined,
    poverty_reduction: undefined,
    unemployment_support: undefined,
    foreign_investment: undefined,
    electricity_access: undefined,
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
          salary: formsForm.salary || 0,
          gender: formsForm.gender,
          agriculture_economy: formsForm.agriculture_economy,
          ease_of_business: formsForm.ease_of_business,
          foreign_investment: formsForm.foreign_investment,
          export_economy: formsForm.export_economy,
          work_sector: formsForm.work_sector,
          unemployment_rate: formsForm.unemployment_rate,
          job_security: formsForm.job_security,
          electricity_access: formsForm.electricity_access,
          air_pollution: formsForm.air_pollution,
          living_area: formsForm.living_area,
          healthcare_importance: formsForm.healthcare_importance,
          mobile_access: formsForm.mobile_access,
          research_development: formsForm.research_development,
          low_taxes: formsForm.low_taxes,
          company_registration: formsForm.company_registration,
          poverty_reduction: formsForm.poverty_reduction,
          unemployment_support: formsForm.unemployment_support,
        },
      });
      return;
    }
    updateForm({
      id: userForms?.[0].id || 0,
      data: {
        user: user?.id || 0,
        age: formsForm.age || 0,
        salary: formsForm.salary || 0,
        gender: formsForm.gender,
        agriculture_economy: formsForm.agriculture_economy,
        ease_of_business: formsForm.ease_of_business,
        foreign_investment: formsForm.foreign_investment,
        export_economy: formsForm.export_economy,
        work_sector: formsForm.work_sector,
        unemployment_rate: formsForm.unemployment_rate,
        job_security: formsForm.job_security,
        electricity_access: formsForm.electricity_access,
        air_pollution: formsForm.air_pollution,
        living_area: formsForm.living_area,
        healthcare_importance: formsForm.healthcare_importance,
        mobile_access: formsForm.mobile_access,
        research_development: formsForm.research_development,
        low_taxes: formsForm.low_taxes,
        company_registration: formsForm.company_registration,
        poverty_reduction: formsForm.poverty_reduction,
        unemployment_support: formsForm.unemployment_support,
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
      salary: userForm.salary || 0,
      gender: userForm.gender,
      agriculture_economy: userForm.agriculture_economy,
      ease_of_business: userForm.ease_of_business,
      foreign_investment: userForm.foreign_investment,
      export_economy: userForm.export_economy,
      work_sector: userForm.work_sector,
      unemployment_rate: userForm.unemployment_rate,
      job_security: userForm.job_security,
      electricity_access: userForm.electricity_access,
      air_pollution: userForm.air_pollution,
      living_area: userForm.living_area,
      healthcare_importance: userForm.healthcare_importance,
      mobile_access: userForm.mobile_access,
      research_development: userForm.research_development,
      low_taxes: userForm.low_taxes,
      company_registration: userForm.company_registration,
      poverty_reduction: userForm.poverty_reduction,
      unemployment_support: userForm.unemployment_support,
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
                <Label htmlFor="salary" className="text-left">
                  ¿Cuál es tu ingreso mensual aproximado en dólares?
                </Label>
                <Input
                  id="salary"
                  type="number"
                  name="salary"
                  step="0.01"
                  min="0"
                  onChange={handleChange}
                  value={formsForm.salary}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="agriculture_economy" className="text-left">
                  ¿Te interesa un país con una economía agrícola fuerte?
                </Label>
                <Select
                  name="agriculture_economy"
                  onValueChange={(value: AgricultureEconomyEnum) => {
                    setFormsForm({
                      ...formsForm,
                      agriculture_economy: value,
                    });
                  }}
                  value={formsForm.agriculture_economy}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      value={
                        AgricultureEconomyEnum[
                          "Sí,_prefiero_un_país_con_oportunidades_en_agricultura"
                        ]
                      }
                    >
                      Sí, prefiero un país con oportunidades en agricultura.
                    </SelectItem>
                    <SelectItem
                      value={
                        AgricultureEconomyEnum[
                          "No,_prefiero_un_país_con_una_economía_diversificada"
                        ]
                      }
                    >
                      No, prefiero un país con una economía diversificada.
                    </SelectItem>
                    <SelectItem value={AgricultureEconomyEnum.No_me_importa}>
                      No me importa.
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Label htmlFor="ease_of_business">
                ¿Qué tan importante es la facilidad para hacer negocios en el
                país?
              </Label>
              <Select
                name="ease_of_business"
                onValueChange={(value: EaseOfBusinessEnum) => {
                  setFormsForm({
                    ...formsForm,
                    ease_of_business: value,
                  });
                }}
                value={formsForm.ease_of_business}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value={
                      EaseOfBusinessEnum[
                        "Muy_importante_(Quiero_emprender_o_invertir)"
                      ]
                    }
                  >
                    Muy importante (Quiero emprender o invertir).
                  </SelectItem>
                  <SelectItem
                    value={
                      EaseOfBusinessEnum[
                        "Moderadamente_importante_(Podría_considerar_oportunidades)"
                      ]
                    }
                  >
                    Moderadamente importante (Podría considerar oportunidades).
                  </SelectItem>
                  <SelectItem
                    value={EaseOfBusinessEnum.No_es_importante_para_mí}
                  >
                    No es importante para mí.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="foreign_investment">
                ¿Qué tan importante es la inversión extranjera en el país?
              </Label>
              <Select
                name="foreign_investment"
                onValueChange={(value: MobileAccessEnum) => {
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
                  <SelectItem value={MobileAccessEnum.Muy_importante}>
                    Muy importante.
                  </SelectItem>
                  <SelectItem value={MobileAccessEnum.No_me_importa}>
                    No me importa.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="export_economy">
                ¿Prefieres un país con una economía basada en la exportación?
              </Label>
              <Select
                name="export_economy"
                onValueChange={(value: ExportEconomyEnum) => {
                  setFormsForm({
                    ...formsForm,
                    export_economy: value,
                  });
                }}
                value={formsForm.export_economy}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value={
                      ExportEconomyEnum[
                        "Sí,_quiero_un_país_con_un_alto_nivel_de_comercio_internacional"
                      ]
                    }
                  >
                    Sí, quiero un país con un alto nivel de comercio
                    internacional.
                  </SelectItem>
                  <SelectItem value={ExportEconomyEnum.No_es_relevante_para_mí}>
                    No es relevante para mí.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="work_sector">
                ¿En qué sector trabajas o te gustaría trabajar?
              </Label>
              <Select
                name="work_sector"
                onValueChange={(value: WorkSectorEnum) => {
                  setFormsForm({
                    ...formsForm,
                    work_sector: value,
                  });
                }}
                value={formsForm.work_sector}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={WorkSectorEnum["Agricultura_/_Pesca"]}>
                    Agricultura / Pesca
                  </SelectItem>
                  <SelectItem value={WorkSectorEnum["Tecnología_/_Innovación"]}>
                    Tecnología / Innovación
                  </SelectItem>
                  <SelectItem
                    value={WorkSectorEnum["Negocios_/_Emprendimiento"]}
                  >
                    Negocios / Emprendimiento
                  </SelectItem>
                  <SelectItem value={WorkSectorEnum["Educación_/_Salud"]}>
                    Educación / Salud
                  </SelectItem>
                  <SelectItem value={WorkSectorEnum["Industria_/_Manufactura"]}>
                    Industria / Manufactura
                  </SelectItem>
                  <SelectItem value={WorkSectorEnum.Otros}>Otros</SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="unemployment_rate">
                ¿Qué tan importante es la tasa de desempleo para ti?
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
                  <SelectItem
                    value={
                      UnemploymentRateEnum.Quiero_un_país_con_muy_baja_tasa_de_desempleo
                    }
                  >
                    Quiero un país con muy baja tasa de desempleo.
                  </SelectItem>
                  <SelectItem
                    value={
                      UnemploymentRateEnum.No_me_importa_mucho_la_tasa_de_desempleo
                    }
                  >
                    No me importa mucho la tasa de desempleo.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="job_security">
                ¿Qué nivel de seguridad laboral prefieres?
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
                  <SelectItem
                    value={
                      JobSecurityEnum.Prefiero_un_país_con_empleos_estables_y_buenos_contratos
                    }
                  >
                    Prefiero un país con empleos estables y buenos contratos.
                  </SelectItem>
                  <SelectItem
                    value={
                      JobSecurityEnum.No_me_importa_si_el_empleo_es_informal_o_vulnerable
                    }
                  >
                    No me importa si el empleo es informal o vulnerable.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="electricity_access">
                ¿Qué tan importante es el acceso a la electricidad en zonas
                urbanas?
              </Label>
              <Select
                name="electricity_access"
                onValueChange={(value: MobileAccessEnum) => {
                  setFormsForm({
                    ...formsForm,
                    electricity_access: value,
                  });
                }}
                value={formsForm.electricity_access}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={MobileAccessEnum.Muy_importante}>
                    Muy importante.
                  </SelectItem>
                  <SelectItem value={MobileAccessEnum.No_me_importa}>
                    No me importa.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="air_pollution">
                ¿Qué tan importante es la contaminación del aire en tu decisión?
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
                  <SelectItem
                    value={
                      AirPollutionEnum[
                        "Muy_importante,_quiero_vivir_en_un_país_con_baja_contaminación"
                      ]
                    }
                  >
                    Muy importante, quiero vivir en un país con baja
                    contaminación.
                  </SelectItem>
                  <SelectItem value={AirPollutionEnum.No_me_importa_mucho}>
                    No me importa mucho.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="living_area">
                ¿Quieres vivir en una ciudad o en un área rural?
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
                  <SelectItem value={LivingAreaEnum.Ciudad}>Ciudad.</SelectItem>
                  <SelectItem value={LivingAreaEnum.Rural}>Rural.</SelectItem>
                  <SelectItem value={LivingAreaEnum.No_me_importa}>
                    No me importa.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="healthcare_importance">
                ¿Qué tan importante es el sistema de salud?
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
                  <SelectItem
                    value={
                      HealthcareImportanceEnum[
                        "Muy_importante,_quiero_un_país_con_buena_atención_médica"
                      ]
                    }
                  >
                    Muy importante, quiero un país con buena atención médica.
                  </SelectItem>
                  <SelectItem
                    value={HealthcareImportanceEnum.No_me_importa_mucho}
                  >
                    No me importa mucho.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="mobile_access">
                ¿Qué tan importante es el acceso a la telefonía móvil y la
                tecnología?
              </Label>
              <Select
                name="mobile_access"
                onValueChange={(value: MobileAccessEnum) => {
                  setFormsForm({
                    ...formsForm,
                    mobile_access: value,
                  });
                }}
                value={formsForm.mobile_access}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={MobileAccessEnum.Muy_importante}>
                    Muy importante.
                  </SelectItem>
                  <SelectItem value={MobileAccessEnum.No_me_importa}>
                    No me importa.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="research_development">
                ¿Prefieres un país con alta inversión en investigación y
                desarrollo?
              </Label>
              <Select
                name="research_development"
                onValueChange={(value: ResearchDevelopmentEnum) => {
                  setFormsForm({
                    ...formsForm,
                    research_development: value,
                  });
                }}
                value={formsForm.research_development}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value={
                      ResearchDevelopmentEnum["Sí,_prefiero_un_país_innovador"]
                    }
                  >
                    Sí, prefiero un país innovador.
                  </SelectItem>
                  <SelectItem
                    value={ResearchDevelopmentEnum.No_es_una_prioridad_para_mí}
                  >
                    No es una prioridad para mí.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="low_taxes">
                ¿Prefieres un país con impuestos más bajos?
              </Label>
              <Select
                name="low_taxes"
                onValueChange={(value: LowTaxesEnum) => {
                  setFormsForm({
                    ...formsForm,
                    low_taxes: value,
                  });
                }}
                value={formsForm.low_taxes}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value={
                      LowTaxesEnum[
                        "Sí,_quiero_un_país_con_menor_carga_impositiva"
                      ]
                    }
                  >
                    Sí, quiero un país con menor carga impositiva.
                  </SelectItem>
                  <SelectItem value={LowTaxesEnum.No_me_importa}>
                    No me importa.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="company_registration">
                ¿Quieres un país con facilidad para registrar empresas?
              </Label>
              <Select
                name="company_registration"
                onValueChange={(value: CompanyRegistrationEnum) => {
                  setFormsForm({
                    ...formsForm,
                    company_registration: value,
                  });
                }}
                value={formsForm.company_registration}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value={
                      CompanyRegistrationEnum[
                        "Sí,_quiero_facilidades_para_emprender"
                      ]
                    }
                  >
                    Sí, quiero facilidades para emprender.
                  </SelectItem>
                  <SelectItem value={CompanyRegistrationEnum.No_me_importa}>
                    No me importa.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="poverty_reduction">
                ¿Qué tan importante es la reducción de la pobreza en el país?
              </Label>
              <Select
                name="poverty_reduction"
                onValueChange={(value: PovertyReductionEnum) => {
                  setFormsForm({
                    ...formsForm,
                    poverty_reduction: value,
                  });
                }}
                value={formsForm.poverty_reduction}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value={
                      PovertyReductionEnum[
                        "Muy_importante,_quiero_un_país_con_menos_desigualdad"
                      ]
                    }
                  >
                    Muy importante, quiero un país con menos desigualdad.
                  </SelectItem>
                  <SelectItem value={PovertyReductionEnum.No_es_una_prioridad}>
                    No es una prioridad.
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="unemployment_support">
                ¿Te gustaría que el país tenga programas de apoyo al desempleo?
              </Label>
              <Select
                name="unemployment_support"
                onValueChange={(value: UnemploymentSupportEnum) => {
                  setFormsForm({
                    ...formsForm,
                    unemployment_support: value,
                  });
                }}
                value={formsForm.unemployment_support}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={UnemploymentSupportEnum.No_me_importa}>
                    Sí, quiero un país con apoyo social.
                  </SelectItem>
                  <SelectItem
                    value={
                      UnemploymentSupportEnum[
                        "Sí,_quiero_un_país_con_apoyo_social"
                      ]
                    }
                  >
                    No me importa.
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" size="default" type="submit">
              Enviar
              {(loadingCreate || loadingUpdate) && <Spinner />}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Form;
