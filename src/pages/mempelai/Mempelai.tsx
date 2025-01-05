// import foto from "/remini1.jpg";
// import foto2 from "/remini5.jpg";
import { motion } from "motion/react";
import foto3 from "/remini8.jpg";

const Mempelai = () => {
  return (
    <div className="space-y-10 overflow-x-hidden mt-10">
      <div className="w-full grid grid-cols-12 gap-5">
        <motion.div
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="col-span-6  rounded-md overflow-hidden"
        >
          <img
            src={foto3}
            className="translate-x-8 translate-y-16 scale-[1.90] "
            alt="Salam"
          />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="col-span-6"
        >
          <h1 className="text-3xl font-bold">Lutfi Angga Hendrawan</h1>
          <p>
            Putra Kedua dari Bapak Drs.H.Suwito(Alm) & Ibu Hj.Endang Harwenisya
            S.Pd
          </p>
        </motion.div>
      </div>
      <div className="w-full grid grid-cols-12 gap-5">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="col-span-6"
        >
          <h1 className="text-3xl font-bold">Erlynda Sabirina</h1>

          <p>Putri Kedua dari Bapak Agus Triyono & Ibu Enny Minarsih </p>
        </motion.div>
        <motion.div
          animate={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="col-span-6 rounded-md overflow-hidden"
        >
          <img
            src={foto3}
            className="-translate-x-[4.5rem] translate-y-16 scale-[1.90] "
            alt="Salam"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Mempelai;
