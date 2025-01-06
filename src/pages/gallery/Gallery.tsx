import { motion } from "motion/react";
import { fotos } from "./fotos";

const Gallery = () => {
  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute -inset-10 bg-black opacity-10  bg-[url('/remini1.jpg')] bg-cover" />
      <div className="grid grid-cols-12 gap-2 mx-14 z-20">
        {/* {[...Array(9)].map((_, i) => { */}
        {/*   if (i === 4) */}
        {/*     return ( */}
        {/*       <motion.img */}
        {/*         initial={{ scale: 0, opacity: 0 }} */}
        {/*         animate={{ scale: 1, opacity: 1 }} */}
        {/*         transition={{ duration: 1, ease: "easeOut" }} */}
        {/*         key={i} */}
        {/*         src={`/remini1crop.jpg`} */}
        {/*         className="col-span-4 size-36 object-cover" */}
        {/*       /> */}
        {/*     ); */}
        {/*   if (i === 3) */}
        {/*     return ( */}
        {/*       <motion.img */}
        {/*         initial={{ scale: 0, opacity: 0 }} */}
        {/*         animate={{ scale: 1, opacity: 1 }} */}
        {/*         transition={{ duration: 1, ease: "easeOut" }} */}
        {/*         key={i} */}
        {/*         src={`/remini6.jpg`} */}
        {/*         className="col-span-4 size-36 object-cover" */}
        {/*       /> */}
        {/*     ); */}
        {/*   return ( */}
        {/*     <motion.img */}
        {/*       initial={{ scale: 0, opacity: 0 }} */}
        {/*       animate={{ scale: 1, opacity: 1 }} */}
        {/*       transition={{ duration: 1, ease: "easeOut" }} */}
        {/*       key={i} */}
        {/*       src={`/remini${i + 2}.jpg`} */}
        {/*       className="col-span-4 size-36 object-cover" */}
        {/*     /> */}
        {/*   ); */}
        {/* })} */}
        {fotos.map((foto) => (
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            key={foto}
            src={foto}
            className="col-span-4 size-36 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
