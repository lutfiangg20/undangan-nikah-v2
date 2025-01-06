import atm from "/atm.png";
import chip from "/chip.png";
import bca from "/bca.png";
import bni from "/bni.svg";
import { Copy } from "lucide-react";
import { useState } from "react";

const GiftContent = () => {
  const rekUpi = "304537406";
  const rekLynda = "007940478612";
  const [copyRekUpi, setCopyRekUpi] = useState("Copy No. Rekening");
  const [copyRekLynda, setCopyRekLynda] = useState("Copy No. Rekening");

  const handleCopy = (textToCopy: string, name: string) => {
    if (name === "upi") {
      setCopyRekUpi("Copied!");
    }
    if (name === "lynda") {
      setCopyRekLynda("Copied!");
    }
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setTimeout(() => {
          if (name === "upi") {
            setCopyRekUpi("Copy No. Rekening");
          }
          if (name === "lynda") {
            setCopyRekLynda("Copy No. Rekening");
          }
        }, 500);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="mt-20 space-y-2">
      <p className="text-center text-sm">
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika
        memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara
        cashless.
      </p>
      <div className="relative">
        <img src={atm} />
        <div className="absolute bottom-6 left-2 ">
          <img className="w-20 h-14" src={chip} />
          <b className="pl-3">LUTFI ANGGA HENDRAWAN</b>
          <h6 className="pl-3">{rekUpi}</h6>
        </div>
        <img className="absolute top-5 right-10 size-20" src={bni} />
        <button
          onClick={() => handleCopy(rekUpi, "upi")}
          className="absolute bottom-4 right-8 flex gap-1 text-xs bg-gray-500 hover:bg-gray-700 text-white p-1 rounded-sm"
        >
          <Copy size={16} /> {copyRekUpi}
        </button>
      </div>
      <div className="relative">
        <img src={atm} />
        <div className="absolute bottom-6 left-2 ">
          <img className="w-20 h-14" src={chip} />
          <b className="pl-3">ERLYNDA SABIRINA</b>
          <h6 className="pl-3">{rekLynda}</h6>
        </div>
        <img className="absolute top-5 right-10 size-20" src={bca} />
        <button
          onClick={() => handleCopy(rekLynda, "lynda")}
          className="absolute bottom-4 right-8 flex gap-1 text-xs bg-gray-500 hover:bg-gray-700 text-white p-1 rounded-sm"
        >
          <Copy size={16} /> {copyRekLynda}
        </button>
      </div>
    </div>
  );
};

export default GiftContent;
