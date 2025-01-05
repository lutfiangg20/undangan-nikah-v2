import { motion } from "motion/react";

const Akad = () => {
  return (
    <div className="relative overflow-y-hidden">
      <div className="absolute -inset-10 bg-black opacity-10  bg-[url('/remini1.jpg')] bg-cover" />
      <div className="flex flex-col items-center space-y-10 h-screen justify-center">
        <motion.p
          animate={{ opacity: [0, 1], y: [-100, 0] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          UNDANGAN PERNIKAHAN
        </motion.p>
        <motion.p
          animate={{ opacity: [0, 1], y: [-100, 0] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-2xl"
        >
          LUTFI & ERLYNDA
        </motion.p>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="space-y-5 text-center"
        >
          <p className="text-center">
            YANG AKAN DISELENGGARAKAN PADA WAKTU & TEMPAT BERIKUT:
          </p>
          <div className="grid grid-cols-12">
            <motion.div
              animate={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-right col-span-5"
            >
              <p>AKAD</p>
              <p className="">PUKUL 08.00 - 11.00 WIB</p>
            </motion.div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="col-span-2 text-center"
            >
              <p>|</p>
              <p>|</p>
            </motion.div>
            <motion.div
              animate={{ opacity: [0, 1], x: [100, 0] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-left col-span-5"
            >
              <p>RESEPSI</p>
              <p className="">PUKUL 13.00 - 20.00 WIB</p>
            </motion.div>
          </div>
          <motion.p
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-center"
          >
            Jl. Anggrek No.26, RT.04/RW.09, Tumpuk, Purwokerto, Kec. Srengat,
            Kabupaten Blitar, Jawa Timur 66152
          </motion.p>
          <motion.p
            animate={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-2xl"
          >
            Kamis, 06 Februari 2025
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Akad;
