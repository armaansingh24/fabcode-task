import { FooterAboveSection } from "@/pageComponents/FooterAboveSection";
import { FooterSection } from "@/pageComponents/FooterSection";
import { HeroSection } from "@/pageComponents/HeroSection";
import { HoverSection } from "@/pageComponents/HoverSection";
import { Navbar } from "@/pageComponents/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Navbar />
      <HeroSection />
      <HoverSection />
      <FooterAboveSection />
      <FooterSection />
    </div>
  );
};

export default page;
