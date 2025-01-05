import { ReactNode } from "react";
import corner from "/Asset 2.png";

type Props = {
  children: ReactNode;
};

const NewMainLayout = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col h-screen m-0 max-w-[460px] mx-auto rounded-xl p-4 ">
      <img
        src={corner}
        alt=""
        className="absolute top-0 left-0 h-36 transform scale-x-[-1] z-10"
      />
      <img src={corner} alt="" className="absolute top-0 right-0 h-36 z-10" />
      {children}
    </div>
  );
};

export default NewMainLayout;
