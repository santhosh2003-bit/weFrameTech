import React from "react";
import Section_6_1 from "../Section-6-1/Section";
import Section_6_2 from "../Section-6-2/Section";
import Section_6_3 from "../Section-6-3/Section";
import Section_6_4 from "../Section-6-4/Section";
import Section_6_5 from "../Section-6-5/Section";
const Section = () => {
  return (
    <div className="bg-[rgba(26,141,145,1)] shadow-[0px_0px_20px_0px_rgba(7,64,64,0.05)] rounded-tl-[30px] rounded-tr-[30px] rounded-br-[0px] rounded-bl-[0px] mt-[100px] px-[310px] flex justify-between gap-4   pt-[40px]  pb-[40px]">
      <Section_6_1 />
      <Section_6_2 />
      <Section_6_3 />
      <Section_6_4 />
      <Section_6_5 />
    </div>
  );
};

export default Section;
