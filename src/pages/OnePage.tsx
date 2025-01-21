import { menuList } from "@/components/menuList";
import MusicPlayer from "@/components/MusicPlayer";
import NewMainLayout from "@/components/NewMainLayout";
import { useEffect, useMemo, useRef, useState } from "react";
import MainContent from "./MainContent";
import OpeningContent, { useUndangan } from "./OpeningContent";
import { motion } from "framer-motion";

const OnePage = () => {
  const paths = useMemo(() => menuList, []);
  const { open } = useUndangan();

  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".observer-item");
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      observer.disconnect();
    };
  }, [paths, open]);

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        className="absolute w-full h-screen z-50"
        animate={{ y: open ? -1000 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <NewMainLayout>
          <div className="w-full bg-[#f7ebd2]">
            <OpeningContent />
          </div>
        </NewMainLayout>
      </motion.div>
      {open &&
        paths.map((path, index) => {
          return (
            <div
              className="observer-item"
              data-index={index}
              style={{ minHeight: "500px", marginBottom: "0px" }}
              key={index}
            >
              {visibleIndexes.includes(index) && (
                <NewMainLayout>
                  <div className="w-full">
                    <MainContent children={path.component} />
                  </div>
                </NewMainLayout>
              )}
            </div>
          );
        })}
      <MusicPlayer />
    </div>
  );
};

export default OnePage;
