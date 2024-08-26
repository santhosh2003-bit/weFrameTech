import React from "react";

const Section = () => {
  return (
    <div className="flex items-center gap-[30px] justify-end mt-12">
      <svg
        width="20"
        height="10"
        viewBox="0 0 20 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.229141 5.55301L0.229843 5.55375L4.31203 9.61625C4.61785 9.92059 5.1125 9.91946 5.41691 9.6136C5.72129 9.30778 5.72012 8.81313 5.4143 8.50875L2.67352 5.78125L19.2188 5.78125C19.6502 5.78125 20 5.43149 20 5C20 4.56852 19.6502 4.21875 19.2188 4.21875L2.67355 4.21875L5.41426 1.49125C5.72008 1.18688 5.72125 0.692229 5.41687 0.386409C5.11246 0.0805111 4.61777 0.0794563 4.31199 0.383753L0.229805 4.44625L0.229101 4.44699C-0.0768757 4.75239 -0.0758991 5.24864 0.229141 5.55301Z"
          fill="#62C3C6"
        />
      </svg>
      <h3 className="font-[Sora] font-semibold text-[16px] leading-[22.68px] text-[rgba(4,90,92,1)]">
        1
      </h3>
      <h3 className="font-[Sora] font-semibold text-[16px] leading-[22.68px] text-[rgba(4,90,92,1)]">
        2
      </h3>
      <h3 className="font-[Sora] font-semibold text-[16px] leading-[22.68px] text-[rgba(4,90,92,1)]">
        3
      </h3>
      <div className="flex font-[Sora] font-semibold text-[16px] leading-[22.68px] text-[rgba(4,90,92,1)]">
        <h3>.</h3>
        <h3>.</h3>
        <h3>.</h3>
      </div>
      <h3 className="font-[Sora] font-semibold text-[16px] leading-[22.68px] text-[rgba(4,90,92,1)]">
        12
      </h3>
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
    </div>
  );
};

export default Section;
