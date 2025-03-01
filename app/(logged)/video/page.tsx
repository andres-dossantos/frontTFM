"use client";
import useCurrentUser from "@/queries/auth/useCurrentUser";
import useLogout from "@/queries/auth/useLogout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Spinner from "@/components/common/spinner";
import Link from "next/link";
import ReactPlayer from "react-player"; // Importa ReactPlayer

const Video = () => {
  const { user } = useCurrentUser();
  const { logout } = useLogout();
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/wallpaper2.jpg')` }}
    >
      <div className="flex items-center justify-center h-full">
        <Card
          className="flex flex-col items-center justify-center text-center p-10 w-[1780px] h-[750px] gap-4 bg-white bg-opacity-90 shadow-lg rounded-lg"
        >
          {/* Video */}
          <ReactPlayer
            url="http://localhost:3000/country_find_video.mp4"
            playing={true}
            controls
            width="100%"
            height="100%"
            className="rounded-lg shadow-md"
          />
        </Card>
      </div>
    </div>
  );
};

export default Video;