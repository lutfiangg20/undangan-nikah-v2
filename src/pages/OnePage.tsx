import { menuList } from "@/components/menuList";
import MusicPlayer from "@/components/MusicPlayer";
import NewMainLayout from "@/components/NewMainLayout";
import { useEffect, useMemo, useRef, useState } from "react";
import MainContent from "./MainContent";

const OnePage = () => {
  const paths = useMemo(() => menuList, []);

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
  }, [paths]);

  return (
    <div ref={containerRef}>
      {paths.map((path, index) => {
        return (
          <div
            className="observer-item"
            data-index={index}
            style={{ minHeight: "500px", marginBottom: "0px" }}
          >
            {visibleIndexes.includes(index) && (
              <NewMainLayout key={index}>
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
