import { useImages } from "@/components/ImageProvider";
import { motion } from "motion/react";
// import foto from "/remini4.jpg";

const Salam = () => {
  const { foto } = useImages();

  return (
    <div className="font-serif flex justify-center">
      <div className="space-y-10 ">
        <motion.div
          animate={{ y: [-100, -10], opacity: [0, 1] }}
          transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
          exit={{ opacity: 0, y: -100 }}
          className=" w-80 mx-auto overflow-hidden rounded-b-full ring-2 ring-offset-4 ring-offset-black ring-yellow-100"
        >
          <motion.img
            src={foto}
            className="scale-125 translate-x-8 translate-y-8"
            alt="Salam"
          />
        </motion.div>
        <motion.p
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center w-80"
        >
          Dengan memohon rahmat & ridho Allah Azza Wa Jalla kami mengundang
          bapak/ibu/saudara/i untuk hadir pada acara pernikahan kami.
        </motion.p>
      </div>
    </div>
  );
};

export default Salam;
