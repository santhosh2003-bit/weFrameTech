import Navbar from "@/components/Navbar/Navbar";
import Section1 from "@/components/Section-1/Section";
import Section2 from "@/components/Section-2/Section";
import Section3 from "@/components/Section-3/Section";
import Section4 from "@/components/Section-4/Section";
import Section5 from "@/components/Section-5/Section";
import Section6 from "@/components/Section-6/Section";

// import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1920px] ">
      <div className=" px-[310px]">
        <Navbar />
        <Section1 />
        <Section2 />
        <div className="flex justify-between gap-5">
          <Section3 />
          <Section4 />
        </div>
        <Section5 />
      </div>
      <Section6 />
    </div>
  );
}
