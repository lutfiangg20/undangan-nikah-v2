import { Link, Outlet, Path, useLocation } from "react-router";
import { Label } from "./ui/label";
import { ScrollText } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { menuList } from "./menuList";

const MainLayout = () => {
  const { pathname } = useLocation();
  const parentRef = useRef(document.createElement("footer"));

  useEffect(() => {
    const parent = parentRef.current;

    if (parent) {
      // Cari elemen aktif dengan class "bg-accent"
      const activeElement = parent.querySelector(
        ".bg-accent",
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
  }, [pathname]); // Efek dijalankan setiap kali pathname berubah

  const paths = useMemo(() => menuList, []);

  return (
    <div className="relative h-screen m-0 max-w-[460px] mx-auto rounded-xl p-4">
      <div className="w-full">
        <Outlet />
      </div>
      <footer
        ref={parentRef}
        className="absolute bottom-0 left-0 w-full rounded-b-xl p-1 flex gap-5 bg-background  overflow-hidden"
      >
        {paths.map((path, index) => (
          <Link to={path.link} key={index}>
            <motion.div
              style={{ transition: "all 0.2s ease-in-out" }}
              className={`w-20 h-20 p-4 ${pathname.includes(path.name.toLowerCase()) ? "bg-accent" : ""} rounded-xl flex flex-col gap-2 items-center`}
            >
              {path.icon}
              <Label className="text-nowrap">{path.name}</Label>
            </motion.div>
          </Link>
        ))}
      </footer>
    </div>
  );
};

export default MainLayout;
