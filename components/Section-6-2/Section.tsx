import React from "react";

const Section = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-[30px]">
        <div className="flex gap-1 items-center">
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
              fill="#28E3E9"
            />
          </svg>
          <h3 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(255,255,255,1)]">
            Rezept einlösen
          </h3>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
              fill="#28E3E9"
            />
          </svg>
          <h3 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(255,255,255,1)]">
            Live Bestand
          </h3>
        </div>
      </div>
      <div className="flex gap-[30px] items-center">
        <div className="flex gap-1 items-center">
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
              fill="#28E3E9"
            />
          </svg>
          <h3 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(255,255,255,1)]">
            Videosprechstunde
          </h3>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
              fill="#28E3E9"
            />
          </svg>
          <h3 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(255,255,255,1)]">
            FAQs
          </h3>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
              fill="#28E3E9"
            />
          </svg>
          <h3 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(255,255,255,1)]">
            Kontakt
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Section;
