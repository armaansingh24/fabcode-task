"use client";
import React, { useState } from "react";
import HoverImage1 from "../../public/images/HoverImage1.png";
import HoverImage2 from "../../public/images/HoverImage2.png";
import Image from "next/image";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full bg-primary">
      <div className="mt-28 flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col gap-0 text-[96px] text-secondery font-bold text-center leading-none">
          <p>EXPLORE</p>
          <p>POPDARTS PRODUCTS</p>
          <p>LINES OF FUN</p>
        </div>
        <div className="text-secondery">
          <p>The hottest game of the summer!</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col mt-20">
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={HoverImage1}
            alt="HoverImage1"
            className={`transition-opacity duration-500 ease-in-out  ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={HoverImage2}
            alt="HoverImage2"
            className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out  ${
              !isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="mt-10 text-primary bg-secondery w-[90%] rounded-[24px] py-5 mb-20">show all</button>
      </div>
    </div>
  );
};

export const HoverSection = Index;
