import { motion } from "motion/react";
import { useParams } from "react-router";

const OpeningContent = () => {
  const { id } = useParams();
  const newId = id?.replace(/-/g, " ");
  return (
    <div className=" flex h-screen items-center justify-center">
      <motion.div className="text-center space-y-5">
        <motion.h3
          animate={{ y: [-100, 0] }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          className="text-2xl"
        >
          Wedding Invitation
        </motion.h3>
        <motion.h1
          animate={{ y: [100, 0] }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          className="text-4xl"
        >
          Lutfi & Erlynda
        </motion.h1>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
        >
          <h3 className="text-2xl">Kepada Yth:</h3>
          <h3 className="text-2xl">bapak/Ibu/Saudara/i</h3>
        </motion.div>
        <motion.h2
          animate={{ y: [100, 0] }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          className="text-3xl capitalize"
        >
          {newId}
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default OpeningContent;
