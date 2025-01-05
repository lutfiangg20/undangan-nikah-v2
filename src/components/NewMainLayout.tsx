import { Link, Outlet, Path, useLocation } from "react-router";
import { Label } from "./ui/label";
import { ScrollText } from "lucide-react";
import { ReactNode, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { menuList } from "./menuList";
import MusicPlayer from "./MusicPlayer";
import corner from "/Asset 2.png";

type Props = {
  children: ReactNode;
};

const NewMainLayout = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col h-screen m-0 max-w-[460px] mx-auto rounded-xl p-4 ">
      <img
        src={corner}
        alt=""
        className="absolute top-0 left-0 h-36 transform scale-x-[-1] z-10"
      />
      <img src={corner} alt="" className="absolute top-0 right-0 h-36 z-10" />
      {children}
    </div>
  );
};

export default NewMainLayout;
