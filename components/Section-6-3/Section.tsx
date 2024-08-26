import React from "react";

const Section = () => {
  return (
    <div className="flex flex-col gap-3 w-[162px]">
      <p className="font-manrope font-light text-[12px] leading-[15.12px] tracking-[1%] text-[rgba(255,255,255,0.5)]">
        Standort
      </p>
      <h2 className="font-manrope font-extrabold text-[16px] leading-[21.86px] text-[rgba(255,255,255,1)] text-start">
        Bergstraße 49 - 57 69469 Weinheim <br />
        (3 Glocken Quartier)
      </h2>
    </div>
  );
};

export default Section;
