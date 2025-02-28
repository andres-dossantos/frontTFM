"use client";

import { useFormsResultList } from "@/api/forms/forms";
import { Result } from "@/api/baseAppBackendAPI.schemas";
import { cn } from "@/lib/utils";

interface RowProps {
  values?: Result;
  index?: number;
}

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

  return (
    <div className="grid grid-cols-3 gap-6 text-xl text-slate-700 text-center">
      {/* Columna de continente */}
      <div className={cn("min-w-[70px]", isHeader && "font-bold text-4xl")}>
        {values?.continente || "Continente"}
      </div>

      {/* Columna de país con estilos según el índice */}
      <div
        className={cn(
          "min-w-[70px]",
          isHeader && "font-bold text-4xl",
          !isHeader && getClassByIndex(index) // Solo aplicar estilo si no es el header
        )}
      >
        {values?.pais || "Pais"}
      </div>

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
              <Row
                values={result}
                key={index}
                index={index} // Pasamos el índice al componente Row
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopPaises;