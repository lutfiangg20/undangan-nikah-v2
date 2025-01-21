import { useImages } from "@/components/ImageProvider";
import { useMusic } from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import { useParams } from "react-router";
import { create } from "zustand";

interface UndanganState {
  open: boolean;
  setOpen: (state: boolean) => void;
}

export const useUndangan = create<UndanganState>((set) => ({
  open: false,
  setOpen: (state) => set({ open: state }),
}));

const OpeningContent = () => {
  const { id } = useParams();
  const newId = id?.replace(/-/g, " ");
  const { fotoCrop } = useImages();
  const { setIsPlaying } = useMusic();
  // const [open, setOpen] = useState(false);
  const { setOpen } = useUndangan();

  const handleBukaUndangan = () => {
    setOpen(true);
    setIsPlaying(true);
  };
  return (
    <motion.div className={`font-serif h-screen mt-16 space-y-10 `}>
      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="ring-black"
        >
          <motion.img
            src={fotoCrop}
            className="ring-black ring-2 size-52 object-cover object-[50%_20%] rounded-full"
          />
        </motion.div>
      </div>
      <motion.div className="text-center space-y-5">
        <motion.h3
          animate={{ y: [-100, 0] }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          className="text-xl"
        >
          Wedding Invitation
        </motion.h3>
        <motion.h1
          animate={{ y: [100, 0] }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          className="text-3xl font-serif font-medium italic"
        >
          Lutfi & Erlynda
        </motion.h1>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
        >
          <h3 className="">Kepada Yth:</h3>
          <h3 className="">Bapak/Ibu/Saudara/i</h3>
        </motion.div>
        <motion.h2
          animate={{ y: [100, 0] }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          className="text-2xl capitalize"
        >
          {newId}
        </motion.h2>
        <Button
          className="rounded-full bg-yellow-900 hover:bg-yellow-800"
          onClick={handleBukaUndangan}
        >
          Buka Undangan
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default OpeningContent;
