import MainLayout from "@/components/MainLayout";
import { menuList } from "@/components/menuList";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useParams } from "react-router";
import OpeningContent from "./OpeningContent";
import path from "path";
import NewMainLayout from "@/components/NewMainLayout";
import { Button } from "@/components/ui/button";
import MusicPlayer from "@/components/MusicPlayer";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import MainContent from "./MainContent";

const Opening = () => {
  const [selectedMenu, setSelectedMenu] = useState("opening");

  const parentRef = useRef(document.createElement("footer"));

  useEffect(() => {
    const parent = parentRef.current;

    if (parent) {
      // Cari elemen aktif dengan class "bg-accent"
      const activeElement = parent.querySelector(
        ".bg-gray-800",
      ) as HTMLDivElement | null;

      if (activeElement) {
        // Gunakan getBoundingClientRect untuk mendapatkan posisi elemen aktif
        const activeRect = activeElement.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();

        // Hitung posisi scroll untuk menengahkan elemen
        const targetOffset =
          activeRect.left - parentRect.left + activeElement.clientWidth / 2;
        const scrollPosition = targetOffset - parent.clientWidth / 2;

        // Gulir ke posisi tersebut dengan efek halus
        parent.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [selectedMenu]); // Efek dijalankan setiap kali pathname berubah

  const paths = useMemo(() => menuList, []);

  const handleSelectMenu = (name: string) => {
    setSelectedMenu(name);
  };

  return (
    <NewMainLayout>
      <main className="w-full">
        {paths.map((path, index) => {
          if (path.name.toLowerCase() === selectedMenu.toLowerCase()) {
            return <MainContent children={path.component} key={index} />;
          }
        })}
      </main>

      <MusicPlayer />
      <footer
        ref={parentRef}
        className="z-[400] fixed  bottom-0 left-0 w-full rounded-b-xl p-1 flex gap-5 bg-background overflow-hidden"
      >
        <Carousel className="w-full">
          <CarouselContent>
            {paths.map((path, index) => (
              <button
                onClick={() => handleSelectMenu(path.name)}
                key={index}
                style={{ transition: "all 0.2s ease-in-out" }}
                className={` 
                  h-20 p-4 ${selectedMenu.toLowerCase().includes(path.name.toLowerCase()) ? "bg-gray-800" : ""} 
                  rounded-xl 
                  flex 
                  flex-col gap-2 items-center`}
              >
                {path.icon}
                <Label className="text-nowrap">{path.name}</Label>
              </button>
            ))}
          </CarouselContent>
        </Carousel>
      </footer>
    </NewMainLayout>
  );
};

export default Opening;
