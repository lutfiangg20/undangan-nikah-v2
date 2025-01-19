import { Button } from "@/components/ui/button";
import "leaflet/dist/leaflet.css";
import { motion } from "motion/react";
// import "./style.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapView = () => {
  const toMap = () => {
    const latitude = -8.1094833193278;
    const longitude = 112.0749664305271;

    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(googleMapsUrl);
  };

  return (
    <div className="mt-20 font-serif p-4">
      <motion.div
        animate={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
        className="mx-auto flex justify-center  mt-10"
      >
        <MapContainer
          center={[-8.1094833193278, 112.0749664305271]}
          zoom={13}
          scrollWheelZoom={false}
          className="rounded-xl"
          style={{ height: "50vh", width: "90%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-8.1094833193278, 112.0749664305271]}>
            <Popup>Lokasi</Popup>
          </Marker>
        </MapContainer>
      </motion.div>
      <motion.div
        animate={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
        className="mt-10 text-center space-y-10"
      >
        <h1 className="text-center">
          Jl. Anggrek No.26, RT.04/RW.09, Tumpuk, Purwokerto, Kec. Srengat,
          Kabupaten Blitar, Jawa Timur 66152
        </h1>
        <Button onClick={toMap} className="rounded-2xl" variant={"location"}>
          Petunjuk Ke Lokasi
        </Button>
      </motion.div>
    </div>
  );
};

export default MapView;
