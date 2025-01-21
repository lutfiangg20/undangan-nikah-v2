import Akad from "@/pages/akad/Akad";
import Counting from "@/pages/counting/Counting";
import Gallery from "@/pages/gallery/Gallery";
import GiftContent from "@/pages/gift/GiftContent";
import Maps from "@/pages/maps/Maps";
import Mempelai from "@/pages/mempelai/Mempelai";
import OpeningContent from "@/pages/OpeningContent";
import Salam from "@/pages/salam/Salam";
import TerimaKasih from "@/pages/terimakasih/TerimaKasih";
import Wishes from "@/pages/wishes/Wishes";
import {
  CalendarDays,
  Gift,
  Heart,
  Images,
  MapPinned,
  MessageCircleMore,
  ScrollText,
  Timer,
} from "lucide-react";
import { ReactNode } from "react";

export type Path = {
  name: string;
  icon: React.ReactNode;
  link: string;
  component: ReactNode;
};

export const menuList: Path[] = [
  // {
  //   name: "Opening",
  //   icon: <ScrollText strokeWidth={3} />,
  //   link: "/:id",
  //   component: <OpeningContent />,
  // },
  {
    name: "Salam",
    icon: <ScrollText strokeWidth={3} />,
    link: "/salam",

    component: <Salam />,
  },
  {
    name: "Mempelai",
    icon: <Heart strokeWidth={3} />,
    link: "/mempelai",

    component: <Mempelai />,
  },
  {
    name: "Akad & Resepsi",
    icon: <CalendarDays strokeWidth={3} />,
    link: "/akad",

    component: <Akad />,
  },
  // {
  //   name: "Resepsi",
  //   icon: <ScrollText />,
  //   link: "/resepsi",
  // },
  {
    name: "Maps",
    icon: <MapPinned strokeWidth={3} />,
    link: "/maps",

    component: <Maps />,
  },
  {
    name: "Counting",
    icon: <Timer strokeWidth={3} />,
    link: "/counting",

    component: <Counting />,
  },
  {
    name: "Gift",
    icon: <Gift strokeWidth={3} />,
    link: "/gift",

    component: <GiftContent />,
  },
  {
    name: "Gallery",
    icon: <Images strokeWidth={3} />,
    link: "/gallery",

    component: <Gallery />,
  },
  {
    name: "Wishes",
    icon: <MessageCircleMore strokeWidth={3} />,
    link: "/wishes",
    component: <Wishes />,
  },
  {
    name: "Thanks",
    icon: <ScrollText strokeWidth={3} />,
    link: "/thanks",

    component: <TerimaKasih />,
  },
];
