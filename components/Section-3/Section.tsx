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
        <h2 className="font-[Sora] text-[24px] font-semibold leading-[30.24px] text-center text-DarkGreenTextColor tracking-[1%]">
          Filter
        </h2>
      </div>
      <div className="flex flex-col py-[24px] px-0 gap-10">
        <div className="w-full flex flex-col gap-5 pb-[30px] border-b border-b-[rgba(98,195,198,0.3)]">
          <h3 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)]">
            Preis
          </h3>
          <div>
            <Preis />
          </div>
        </div>
        <div className="flex flex-col gap-5 border-b border-b-[rgba(98,195,198,0.3)]">
          <div className="flex items-center justify-between">
            <div className="pl-[30%]">
              <h3 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)] gap-5">
                Hersteller
              </h3>
            </div>
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
        </div>

        <div className="w-full flex flex-col gap-5 pb-[30px] border-b border-b-[rgba(98,195,198,0.3)]">
          <h3 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)]">
            THC Gehalt
          </h3>
          <div>
            <THC_Gehalt />
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 pb-[30px] border-b border-b-[rgba(98,195,198,0.3)]">
          <h3 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)]">
            CBD Gehalt
          </h3>
          <div>
            <CBD_Gehalt />
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 pb-[30px] border-b border-b-[rgba(98,195,198,0.3)]">
          <h3 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)]">
            Genetik
          </h3>
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
        </div>
        <div className="w-full flex flex-col gap-5 pb-[30px] border-b border-b-[rgba(98,195,198,0.3)]">
          <h3 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)]">
            Bestrahltung
          </h3>
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
        </div>
        <div className="w-full flex flex-col gap-5 pb-[30px] border-b border-b-[rgba(98,195,198,0.3)]">
          <div className="flex items-center justify-between">
            <div className="pl-[30%]">
              <h3 className="font-[Sora] font-semibold text-[18px] leading-[22.68px] text-center text-[rgba(54,87,88,1)] gap-5">
                Terpene
              </h3>
            </div>
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7443 1.56461L15.2202 1.03687C15.0552 0.872052 14.8358 0.781254 14.6012 0.781254C14.3668 0.781254 14.1471 0.872052 13.9822 1.03687L8.00358 7.01571L2.0181 1.03023C1.85341 0.865417 1.6337 0.77475 1.3993 0.77475C1.16489 0.77475 0.945048 0.865417 0.780234 1.03023L0.256002 1.55472C-0.085334 1.8958 -0.085334 2.45138 0.256002 2.79246L7.38243 9.94452C7.54712 10.1092 7.76657 10.2252 8.00306 10.2252H8.00579C8.24033 10.2252 8.45978 10.1091 8.62446 9.94452L15.7443 2.81184C15.9092 2.64716 15.9997 2.42107 16 2.18666C16 1.95213 15.9092 1.72916 15.7443 1.56461Z"
                fill="#62C3C6"
              />
            </svg>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 pb-[30px] ">
          <div className="flex items-center justify-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.59415 9.14712C1.24653 9.49474 1.24653 10.0583 1.59415 10.406C1.94177 10.7536 2.50537 10.7536 2.85299 10.406L6.00013 7.25883L9.14726 10.406C9.49488 10.7536 10.0585 10.7536 10.4061 10.406C10.7537 10.0583 10.7537 9.49474 10.4061 9.14712L7.25897 5.99998L10.4061 2.8529C10.7537 2.50528 10.7537 1.94168 10.4061 1.59406C10.0584 1.24644 9.49483 1.24644 9.14721 1.59406L6.00013 4.74114L2.85305 1.59406C2.50543 1.24644 1.94182 1.24644 1.5942 1.59406C1.24658 1.94168 1.24658 2.50528 1.5942 2.8529L4.74129 5.99998L1.59415 9.14712Z"
                fill="#28E3E9"
              />
            </svg>

            <h3 className="font-[Sora] font-normal text-[16px] leading-[20.16px]  text-[rgba(13,13,13,1)] ">
              alle Filter zurücksetzen
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
