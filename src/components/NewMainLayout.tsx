import { ReactNode } from "react";
import corner from "/Asset 2.png";
import ImageProvider from "./ImageProvider";

type Props = {
  children: ReactNode;
};

const NewMainLayout = ({ children }: Props) => {
  return (
    <ImageProvider>
      <div className="relative flex flex-col h-screen m-0 max-w-[460px] mx-auto rounded-xl ">
        <img
          src={corner}
          alt=""
          className="absolute top-0 left-0 h-28 transform scale-x-[-1] z-10"
        />
        <img src={corner} alt="" className="absolute top-0 right-0 h-28 z-10" />
        {children}
        <img
          src={corner}
          alt=""
          className="absolute bottom-0 left-0 h-28 transform scale-y-[-1] scale-x-[-1] z-10"
        />
        <img
          src={corner}
          alt=""
          className="absolute bottom-0 right-0 h-28 z-10 transform scale-y-[-1]"
        />
      </div>
    </ImageProvider>
  );
};

export default NewMainLayout;
