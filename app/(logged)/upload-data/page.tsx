"use client";

import { Button } from "@/components/ui/button";
import axios from "@/lib/axiosInstance";
import { ChangeEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

const UploadDataPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("/predictions/upload_csv/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success("Archivo subido correctamente");
      } else {
        toast.error("Error al subir el archivo");
      }
    }
  };

  return (
    <div className="flex flex-col p-5 gap-4">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />
      <Button className="w-fit" onClick={() => fileInputRef.current?.click()}>
        Seleccionar Archivo
      </Button>
      <div className="flex flex-row gap-2">
        <p className="font-semibold">Archivo seleccionado:</p>
        {file && <p>{file.name}</p>}
      </div>
      <Button className="w-fit" onClick={handleUpload} disabled={!file}>
        Subir Archivo
      </Button>
    </div>
  );
};

export default UploadDataPage;
