"use client";
import React, { useState } from "react";
import CustomCheckboxes from "../Checkboxes/Checkbox";
import THC_Gehalt from "../Slider/Slider1";
import CBD_Gehalt from "../Slider/Slider2";
import Preis from "../Slider/Slider3";

const Section = () => {
 

  return (
    <div className="w-[250px] mt-[70px] flex flex-col gap-5">
      <div className="bg-[rgba(98,195,198,0.1)] px-[10px] py-[2px] rounded-[4px] border-b-2">
        <h1 className="font-[Sora] text-[24px] font-semibold leading-[30.24px] text-center text-DarkGreenTextColor tracking-[1%]">
          Filter
        </h1>
      </div>
      <div className="flex flex-col py-[24px] px-0 gap-10">
        <section className="w-full flex flex-col gap-5 pb-[30px] border-b border-b-[rgba(98,195,198,0.3)]">
          <h2 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)]">
            Preis
          </h2>
          <div>
            <Preis />
          </div>
        </section>

        <section className="flex flex-col gap-5 border-b border-b-[rgba(98,195,198,0.3)]">
          <div className="flex items-center justify-between">
            <h2 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)] gap-5">
              Hersteller
            </h2>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.255743 12.4354L0.779844 12.9631C0.944789 13.1279 1.16424 13.2187 1.39878 13.2187C1.63318 13.2187 1.85289 13.1279 2.01784 12.9631L7.99642 6.98426L13.9819 12.9697C14.1466 13.1346 14.3663 13.2252 14.6007 13.2252C14.8351 13.2252 15.055 13.1346 15.2198 12.9697L15.744 12.4452C16.0853 12.1042 16.0853 11.5486 15.744 11.2075L8.61757 4.05545C8.45288 3.89077 8.23343 3.77474 7.99694 3.77474H7.99421C7.75967 3.77474 7.54022 3.8909 7.37554 4.05545L0.255743 11.1881C0.0907984 11.3528 0.000260353 11.5789 0 11.8133C0 12.0478 0.0907984 12.2708 0.255743 12.4354Z"
                fill="#62C3C6"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-5 pb-[30px]">
            <CustomCheckboxes />
            <button className="w-full rounded-tl-[24px] rounded-tr-[0px] rounded-br-[24px] rounded-bl-[0px] border-2 pt-[7px] pr-[20px] pb-[8px] pl-[20px] text-center border-[rgba(236,254,170,1)]  font-[Sora] font-normal text-[14px] leading-[17.64px] tracking-[1%] text-[rgba(4,90,92,1)]">
              mehr anzeigen
            </button>
          </div>
        </section>

        <section className="w-full flex flex-col gap-5 pb-[30px] border-b border-b-[rgba(98,195,198,0.3)]">
          <h2 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)]">
            THC Gehalt
          </h2>
          <div>
            <THC_Gehalt />
          </div>
        </section>

        <section className="w-full flex flex-col gap-5 pb-[30px] border-b border-b-[rgba(98,195,198,0.3)]">
          <h2 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)]">
            CBD Gehalt
          </h2>
          <div>
            <CBD_Gehalt />
          </div>
        </section>

        <section className="w-full flex flex-col gap-5 pb-[30px] border-b border-b-[rgba(98,195,198,0.3)]">
          <h2 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)]">
            Genetik
          </h2>
          <div className="flex gap-x-4 w-full">
            <div className="rounded-[4px] px-[10px] py-[4px] bg-[rgba(98,195,198,1)] flex items-center ">
              <h3 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(252,252,250,1)]">
                Indica
              </h3>
            </div>
            <div className="rounded-[4px] px-[10px] py-[4px] bg-[rgba(98,195,198,0.3)]">
              <h3 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(4,90,92,1)]">
                Sativa
              </h3>
            </div>
            <div className="rounded-[4px] px-[10px] py-[4px] bg-[rgba(98,195,198,0.3)]">
              <h3 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(4,90,92,1)]">
                Hybrid
              </h3>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col gap-5 pb-[30px] border-b border-b-[rgba(98,195,198,0.3)]">
          <h2 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)]">
            Bestrahltung
          </h2>
          <div className="flex gap-x-4 w-full">
            <div className="rounded-[4px] px-[10px] py-[4px] bg-[rgba(98,195,198,1)] flex items-center ">
              <h3 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(252,252,250,1)]">
                bestrahlt
              </h3>
            </div>
            <div className="rounded-[4px] px-[10px] py-[4px] bg-[rgba(98,195,198,0.3)]">
              <h3 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(4,90,92,1)]">
                nicht bestrahlt
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section;
