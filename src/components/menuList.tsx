import Akad from "@/pages/akad/Akad";
import Counting from "@/pages/counting/Counting";
import Gallery from "@/pages/gallery/Gallery";
import Maps from "@/pages/maps/Maps";
import Mempelai from "@/pages/mempelai/Mempelai";
import OpeningContent from "@/pages/OpeningContent";
import Salam from "@/pages/salam/Salam";
import Wishes from "@/pages/wishes/Wishes";
import { ScrollText } from "lucide-react";
import { ReactNode } from "react";

export type Path = {
  name: string;
  icon: React.ReactNode;
  link: string;
  component: ReactNode;
};

export const menuList: Path[] = [
  {
    name: "Opening",
    icon: <ScrollText />,
    link: "/:id",
    component: <OpeningContent />,
  },
  {
    name: "Salam",
    icon: <ScrollText />,
    link: "/salam",

    component: <Salam />,
  },
  {
    name: "Mempelai",
    icon: <ScrollText />,
    link: "/mempelai",

    component: <Mempelai />,
  },
  {
    name: "Akad & Resepsi",
    icon: <ScrollText />,
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
    icon: <ScrollText />,
    link: "/maps",

    component: <Maps />,
  },
  {
    name: "Counting",
    icon: <ScrollText />,
    link: "/counting",

    component: <Counting />,
  },
  {
    name: "RSVP",
    icon: <ScrollText />,
    link: "/rsvp",

    component: <OpeningContent />,
  },
  {
    name: "Gallery",
    icon: <ScrollText />,
    link: "/gallery",

    component: <Gallery />,
  },
  {
    name: "Wishes",
    icon: <ScrollText />,
    link: "/wishes",
    component: <Wishes />,
  },
  {
    name: "Thanks",
    icon: <ScrollText />,
    link: "/thanks",

    component: <OpeningContent />,
  },
];
