"use client";

import { useFormsResultList } from "@/api/forms/forms";
import { Result } from "@/api/baseAppBackendAPI.schemas";
import { cn } from "@/lib/utils";
import { Tooltip } from "@material-ui/core";

interface RowProps {
  values?: Result;
  index?: number;
}

const descripciones_paises = {
  Albania:
    "Un paraíso oculto con playas de ensueño y costos de vida accesibles.",
  Alemania: "Potencia económica y tecnológica con oportunidades infinitas.",
  "Antigua y Barbuda": "Playas paradisíacas y un clima ideal todo el año.",
  Argentina: "Tierra del tango, la pasión y la innovación en tecnología.",
  Austria: "Alta calidad de vida, cultura histórica y paisajes alpinos.",
  Bahamas: "Un paraíso fiscal y turístico con aguas cristalinas.",
  Barbados: "Destino de lujo con clima perfecto y oportunidades en turismo.",
  Belarús: "Industria tecnológica en crecimiento en el corazón de Europa.",
  Belice: "Naturaleza exuberante y un paraíso para nómadas digitales.",
  Bolivia: "Diversidad cultural y naturaleza virgen con gran potencial.",
  "Bosnia y Herzegovina": "Una joya oculta con un costo de vida accesible.",
  Brasil: "Economía emergente, playas espectaculares y riqueza cultural.",
  Bulgaria:
    "Uno de los costos de vida más bajos en Europa con buen desarrollo.",
  Bélgica: "Centro financiero y político de Europa con calidad de vida alta.",
  Canadá: "Calidad de vida insuperable y grandes oportunidades laborales.",
  Chile: "Estabilidad económica y paisajes impresionantes en Sudamérica.",
  Colombia: "Crecimiento tecnológico, biodiversidad y vida asequible.",
  "Costa Rica": "Paraíso ecológico con calidad de vida y seguridad.",
  Croacia: "Playas impresionantes y un destino de expatriados en auge.",
  Cuba: "Cultura vibrante, educación gratuita y playas caribeñas.",
  Dinamarca: "Uno de los países más felices y con mejor equilibrio laboral.",
  Ecuador: "Costos de vida bajos y naturaleza diversa en un solo país.",
  "El Salvador":
    "Economía en transformación y atractivo para criptoinversionistas.",
  Eslovenia: "Pequeño pero poderoso, con alta calidad de vida y seguridad.",
  España:
    "Clima perfecto, calidad de vida y un mercado en constante evolución.",
  "Estados Unidos":
    "La tierra de las oportunidades con la economía más grande del mundo.",
  Estonia: "Un líder en digitalización y oportunidades para emprendedores.",
  "Federación de Rusia": "Extensión, riqueza natural y poder geopolítico.",
  Finlandia: "Educación de clase mundial y calidad de vida excepcional.",
  Francia: "El arte, la gastronomía y la innovación en un solo lugar.",
  Grecia: "Historia, cultura y un destino turístico sin igual.",
  Guatemala: "Paisajes espectaculares y costos de vida bajos.",
  Guyana: "País con gran potencial de crecimiento en recursos naturales.",
  Haití: "Riqueza cultural y un espíritu resiliente inquebrantable.",
  Honduras: "Belleza natural y economía en crecimiento.",
  Hungría: "Alta calidad de vida en el corazón de Europa.",
  Irlanda: "Centro tecnológico europeo con impuestos bajos para empresas.",
  Islandia: "Naturaleza impresionante y calidad de vida insuperable.",
  Italia: "Moda, arte y gastronomía en la cuna de la civilización moderna.",
  Jamaica: "Música vibrante, playas icónicas y un espíritu inigualable.",
  Kosovo: "Economía emergente con gran potencial de inversión.",
  Letonia: "Un hub tecnológico con oportunidades para emprendedores.",
  Lituania: "País en auge con uno de los mejores ecosistemas tecnológicos.",
  Luxemburgo: "Uno de los países más ricos y seguros del mundo.",
  "Macedonia del Norte":
    "Crecimiento económico y gran calidad de vida a bajo costo.",
  Malta: "Paraíso fiscal y tecnológico con clima envidiable.",
  Montenegro: "Destino emergente con oportunidades inmobiliarias.",
  México: "Economía vibrante y oportunidades en múltiples sectores.",
  Nicaragua: "Belleza natural y oportunidades para expatriados.",
  Noruega: "Salarios altos y un modelo de bienestar inigualable.",
  Panamá: "Uno de los principales centros financieros de Latinoamérica.",
  Paraguay: "Economía estable y oportunidades de inversión en agricultura.",
  "Países Bajos": "Innovación, calidad de vida y una economía en crecimiento.",
  Perú: "Cultura milenaria y una economía en constante desarrollo.",
  Polonia: "Crecimiento económico sostenido y oportunidades en tecnología.",
  Portugal: "Destino favorito de expatriados por su calidad de vida.",
  "Reino Unido":
    "Centro financiero global con oportunidades en todas las industrias.",
  "República Checa": "Bajo costo de vida y economía en auge.",
  "República Dominicana": "Playas paradisíacas y oportunidades de inversión.",
  "República Eslovaca": "Centro industrial con gran crecimiento en Europa.",
  "República de Moldova": "Economía emergente con bajo costo de vida.",
  Rumania: "Oportunidades en tecnología y bajo costo de vida.",
  "San Vicente y las Granadinas": "Paraíso tropical y estabilidad económica.",
  "Santa Lucía": "Destino turístico con grandes oportunidades en el sector.",
  Serbia: "Puerta de entrada al mercado europeo con crecimiento constante.",
  Suecia: "Innovación, bienestar social y calidad de vida incomparable.",
  Suiza: "Salarios altos y una de las economías más estables del mundo.",
  Suriname: "Riqueza natural y biodiversidad única.",
  "Trinidad y Tobago": "Un paraíso caribeño con oportunidades en energía.",
  Ucrania: "Economía en reconstrucción con gran potencial de inversión.",
  Uruguay: "El país más estable de Sudamérica con calidad de vida alta.",
  Venezuela: "Riqueza en recursos naturales con potencial de recuperación.",
};

const Row = ({ values, index }: RowProps) => {
  const isHeader = !values;

  const getClassByIndex = (index: number | undefined) => {
    if (index === 0) {
      return "text-5xl text-yellow-500 font-semibold shadow-md";
    } else if (index === 1) {
      return "text-4xl text-gray-400 font-semibold shadow-md";
    } else if (index === 2) {
      return "text-3xl text-orange-600 font-semibold shadow-md";
    }
    return "text-xl";
  };

  const getCountryDescription = (country: any) => {
    // @ts-ignore
    return descripciones_paises[country];
  };

  return (
    <div className="grid grid-cols-3 gap-6 text-xl text-slate-700 text-center">
      {/* Columna de continente */}
      <div className={cn("min-w-[70px]", isHeader && "font-bold text-4xl")}>
        {values?.continente || "Continente"}
      </div>

      {/* Columna de país con estilos según el índice */}
      <Tooltip title={getCountryDescription(values?.pais)}>
        <div
          className={cn(
            "min-w-[70px]",
            isHeader && "font-bold text-4xl",
            !isHeader && getClassByIndex(index), // Solo aplicar estilo si no es el header
          )}
        >
          {values?.pais || "Pais"}
        </div>
      </Tooltip>

      {/* Columna de score */}
      <div className={cn("min-w-[70px]", isHeader && "font-bold text-4xl")}>
        {values ? parseFloat(String(values.score)).toFixed(2) : "Score"}
      </div>
    </div>
  );
};

const TopPaises = () => {
  const { data: results, isLoading: isLoadingResults } = useFormsResultList();

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/wallpaper2.jpg')` }}
    >
      <div className="flex flex-col justify-center items-center gap-6 h-screen">
        <h1 className="text-6xl font-semibold text-slate-800">
          ¡Tus 5 mejores países!
        </h1>

        <div className="flex flex-col rounded border border-slate-100 p-6 gap-6 bg-white shadow w-fit-content">
          {isLoadingResults && <h2 className="text-slate-500">Cargando...</h2>}
          {!isLoadingResults && <Row />}

          {!isLoadingResults &&
            results?.map((result, index) => (
              <Row values={result} key={index} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopPaises;
