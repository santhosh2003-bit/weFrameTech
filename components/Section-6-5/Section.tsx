import React from "react";

const Section = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-manrope font-light text-[12px] leading-[15.12px] tracking-[1%] text-[rgba(255,255,255,0.5)]">
        Öffnungszeiten{" "}
      </p>
      <p className="font-manrope font-light text-[12px] leading-[15.12px] tracking-[1%] text-[rgba(255,255,255,0.5)]">
        Mo-Fr{" "}
      </p>
      <h2 className="font-manrope font-extrabold text-[16px] leading-[21.86px] text-[rgba(255,255,255,1)]">
        09:00 – 18:00 Uhr
      </h2>
      <p className="font-manrope font-light text-[12px] leading-[15.12px] tracking-[1%] text-[rgba(255,255,255,0.5)]">
        Sa{" "}
      </p>
      <h2 className="font-manrope font-extrabold text-[16px] leading-[21.86px] text-[rgba(255,255,255,1)]">
        09:00 – 14:00 Uhr
      </h2>
    </div>
  );
};

export default Section;
