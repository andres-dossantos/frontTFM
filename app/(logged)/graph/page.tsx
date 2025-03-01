"use client";
import useCurrentUser from "@/queries/auth/useCurrentUser";
import useLogout from "@/queries/auth/useLogout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Spinner from "@/components/common/spinner";
import Link from "next/link";

const Graph = () => {
  const { user } = useCurrentUser();
  const { logout } = useLogout();
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/wallpaper2.jpg')` }}
    >
      {/* Ajustar el margen superior y lateral para posicionar el Card */}
      <div className="flex items-center justify-center h-full">
        <Card className="flex flex-col items-center justify-center text-center p-10 w-[1780px] h-[750px] gap-4 bg-white bg-opacity-90 shadow-lg rounded-lg">
          <iframe
            title="Proyecto_country_find"
            width="1140"
            height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=cd42a792-3fe5-4483-bd25-f0f1d8f43827&autoAuth=true&ctid=032115c7-35fe-4637-b2c3-d0a42906ba7b"
            frameBorder="0"
          ></iframe>
        </Card>
      </div>
    </div>
  );
};

export default Graph;
