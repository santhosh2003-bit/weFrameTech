import React from "react";

const Section = () => {
  return (
    <div className="mt-[115px] flex items-start justify-between">
      <div className="flex items-center gap-5">
        <h2 className="font-[Sora] text-[16px] font-normal leading-[20.16px] text-left text-customElement">
          Home
        </h2>
        <svg
          width="20"
          height="10"
          viewBox="0 0 20 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7709 4.44699L19.7702 4.44625L15.688 0.383747C15.3821 0.0794115 14.8875 0.0805441 14.5831 0.386403C14.2787 0.692224 14.2799 1.18687 14.5857 1.49125L17.3265 4.21875H0.78125C0.349766 4.21875 0 4.56851 0 5C0 5.43148 0.349766 5.78125 0.78125 5.78125H17.3264L14.5857 8.50875C14.2799 8.81312 14.2788 9.30777 14.5831 9.61359C14.8875 9.91949 15.3822 9.92054 15.688 9.61625L19.7702 5.55375L19.7709 5.55301C20.0769 5.24761 20.0759 4.75136 19.7709 4.44699Z"
            fill="#62C3C6"
          />
        </svg>

        <h2 className="font-[Sora] text-[16px] font-normal leading-[20.16px] text-left text-customElement">
          Livebestand
        </h2>
        <svg
          width="20"
          height="10"
          viewBox="0 0 20 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7709 4.44699L19.7702 4.44625L15.688 0.383747C15.3821 0.0794115 14.8875 0.0805441 14.5831 0.386403C14.2787 0.692224 14.2799 1.18687 14.5857 1.49125L17.3265 4.21875H0.78125C0.349766 4.21875 0 4.56851 0 5C0 5.43148 0.349766 5.78125 0.78125 5.78125H17.3264L14.5857 8.50875C14.2799 8.81312 14.2788 9.30777 14.5831 9.61359C14.8875 9.91949 15.3822 9.92054 15.688 9.61625L19.7702 5.55375L19.7709 5.55301C20.0769 5.24761 20.0759 4.75136 19.7709 4.44699Z"
            fill="#62C3C6"
          />
        </svg>

        <h2 className="font-[Sora] text-[16px] font-bold leading-[20.16px] text-left text-DarkGreenTextColor">
          Cannabis Blüten
        </h2>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h2 className="font-[Sora] text-[14px] font-normal leading-[17.64px] text-center tracking-[1%] text-[rgba(54,87,88,1)]">
          GKV mit Kostenübernahme?
        </h2>
        <button className="pt-[2px] pr-[20px] pb-[2px] pl-[20px] rounded-tl-[24px] rounded-tr-[0px] rounded-br-[24px] rounded-bl-[0px] border-2 border-[rgba(98,195,198,1)] w-full text-DarkGreenTextColor">
          Preisoptionen
        </button>
      </div>
    </div>
  );
};

export default Section;
