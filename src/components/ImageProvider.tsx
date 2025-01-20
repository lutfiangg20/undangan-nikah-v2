import { createContext, useContext, useMemo } from "react";
import foto from "/remini4.jpg";
import kiri from "/remini8kiri.jpg";
import kanan from "/remini8kanan.jpg";
import foto1 from "/remini1.jpg";
import { fotos } from "@/pages/gallery/fotos";
import atm from "/atm.png";
import chip from "/chip.png";
import bca from "/bca.png";
import mandiri from "/mandiri.png";
import bni from "/bni.svg";
import fotoCrop from "/remini1crop2.jpg";

type Props = {
  children: React.ReactNode;
};

const datas = {
  fotoCrop,
  foto1,
  foto,
  kiri,
  kanan,
  fotos,
  atm,
  chip,
  bca,
  bni,
  mandiri,
};

const ImageContext = createContext<typeof datas | null>(null);

export const useImages = () => {
  return useContext(ImageContext) as typeof datas;
};

const ImageProvider = ({ children }: Props) => {
  const images = useMemo(() => datas, []);
  return (
    <ImageContext.Provider value={images}>{children}</ImageContext.Provider>
  );
};

export default ImageProvider;
