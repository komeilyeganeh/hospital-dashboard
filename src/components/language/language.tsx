import { useState } from "react";
import GermanyImage from "../../assets/images/flags/germany.png";
import { Languages } from "@data/languages";

export const Language: React.FC = () => {
  // ---- state ----
  const [activeLng, setActiveLng] = useState("en");

  //   ---- methods ----
  const handleChangeLng = () => {};

  // ---- return jsx ----
  return (
    <div className="relative">
      <div className="flex items-center gap-x-1 cursor-pointer peer">
        <img src={GermanyImage} alt="flag image" />
        <span className="text-sm">Germany</span>
      </div>
      <div className="flex flex-col gap-y-1 w-32 p-2 border rounded-md bg-white border-gray-300 absolute top-[140%] right-0 opacity-0 invisible duration-200 ease-in-out peer-hover:visible peer-hover:opacity-100 peer-hover:top-full hover:visible hover:opacity-100 hover:top-full">
        {Languages?.map((lng: { id: number; img: string; title: string }) => (
          <div
            key={lng.id}
            className="flex items-center gap-x-1 cursor-pointer duration-200 ease-in-out p-1 rounded-md hover:bg-gray-200"
            onClick={handleChangeLng}
          >
            <img src={lng.img} alt="flag image" />
            <span className="text-sm">{lng.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
