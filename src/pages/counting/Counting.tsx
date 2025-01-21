import CountColumn from "./CountColumn";
import { motion } from "motion/react";

const Counting = () => {
  return (
    <div className="text-center px-10 mt-20 font-serif p-4 ">
      <div className="absolute -inset-10 bg-black opacity-15 bg-[url('/remini9.jpg')] bg-cover max-w-[460px] translate-x-10 -translate-y-10" />
      <motion.h1
        animate={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
        className="text-4xl font-sans font-semibold"
      >
        Menghitung Hari
      </motion.h1>
      <CountColumn />
      <motion.p
        animate={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
      >
        Jam terun berdetik, kami tidak sabar untuk merayakannya bersama Anda,
        keluarga dan teman-teman kami di momen yang sangat spesial ini.
        Merupakan suatu kehormatan bagi kami untuk berbagi kebahagiaan kami
        dengan Anda semua.
      </motion.p>
    </div>
  );
};

export default Counting;
