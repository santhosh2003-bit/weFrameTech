"use client";
import React, { useState } from "react";

interface CheckedItems {
  ADREXpharma: boolean;
  Aurora: boolean;
  Avaay: boolean;
  Bedrocan: boolean;
  Cannamedical: boolean;
}

const CustomCheckboxes: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    ADREXpharma: false,
    Aurora: false,
    Avaay: true,
    Bedrocan: true,
    Cannamedical: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const labels = ["ADREXpharma", "Aurora", "Avaay", "Bedrocan", "Cannamedical"];

  return (
    <div className="flex flex-col gap-4 ">
      {labels.map((label) => (
        <label
          key={label}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          {/* Hidden input */}
          <input
            type="checkbox"
            name={label}
            checked={checkedItems[label as keyof CheckedItems]}
            onChange={handleChange}
            className="hidden"
          />
          {/* Custom checkbox */}
          <span
            className={`relative w-4 h-4 rounded-[4px] border-2 border-[rgba(98,195,198,1)] flex items-center justify-center ${
              checkedItems[label as keyof CheckedItems]
                ? "bg-[rgba(98,195,198,0.1)] border-0"
                : ""
            }`}
          >
            {/* Checkmark */}
            {checkedItems[label as keyof CheckedItems] && (
              <span className="absolute block w-[3px] h-[9.17px] border-b-2 border-r-2 border-[rgba(98,195,198,1)] rotate-45"></span>
            )}
          </span>
          <span className="font-[Sora] text-[16px] leading-[20.16px] text-[rgba(54,87,88,1)]">
            {label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default CustomCheckboxes;
