import { useImages } from "@/components/ImageProvider";
import { motion } from "motion/react";

const TerimaKasih = () => {
  const { fotoCrop } = useImages();

  return (
    <div className="font-serif p-4 mt-16 space-y-10 ">
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
      <motion.div className="text-center space-y-10">
        <motion.p
          animate={{ y: [-100, 0] }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
        >
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan doa restu kepada
          kedua mempelai.
        </motion.p>
        <div>
          <motion.h1
            animate={{ y: [100, 0] }}
            transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          >
            Hormat Kami Yang Mengundang
          </motion.h1>
          <motion.h1
            animate={{ y: [100, 0] }}
            transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
            className="text-2xl font-sans font-semibold"
          >
            Lutfi & Erlynda
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
};

export default TerimaKasih;
