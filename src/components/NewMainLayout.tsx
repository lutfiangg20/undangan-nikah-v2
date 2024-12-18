import { Link, Outlet, Path, useLocation } from "react-router";
import { Label } from "./ui/label";
import { ScrollText } from "lucide-react";
import { ReactNode, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { menuList } from "./menuList";

type Props = {
  children: ReactNode;
};

const NewMainLayout = ({ children }: Props) => {
  return (
    <div className="relative h-screen m-0 max-w-[460px] mx-auto rounded-xl p-4">
      {children}
    </div>
  );
};

export default NewMainLayout;
