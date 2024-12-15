import { ScrollText } from "lucide-react";

export type Path = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

export const menuList: Path[] = [
  {
    name: "Salam",
    icon: <ScrollText />,
    link: "/salam",
  },
  {
    name: "Mempelai",
    icon: <ScrollText />,
    link: "/mempelai",
  },
  {
    name: "Akad & Resepsi",
    icon: <ScrollText />,
    link: "/akad",
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
  },
  {
    name: "Counting",
    icon: <ScrollText />,
    link: "/counting",
  },
  {
    name: "RSVP",
    icon: <ScrollText />,
    link: "/rsvp",
  },
  {
    name: "Gallery",
    icon: <ScrollText />,
    link: "/gallery",
  },
  {
    name: "Thanks",
    icon: <ScrollText />,
    link: "/thanks",
  },
];
