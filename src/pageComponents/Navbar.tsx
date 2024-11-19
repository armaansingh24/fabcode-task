import Image from "next/image";
import React from "react";
import AssignmentLogo from "../../public/images/AssignmentLogo.png";
import profile from "../../public/images/profile.png";
import searchIcon from "../../public/images/searchIcon.png";
import soppingCart from "../../public/images/shopping-cart.png";

const Index = () => {
  return (
    <div className="w-full p-5 flex justify-between items-center">
      <div className="w-[33%]">
        <Image src={AssignmentLogo} alt="logo" />
      </div>
      <div className="flex gap-4 text-primary font-bold w-[40%]">
        <p>Shop</p>
        <p>Play</p>
        <p>Connect</p>
      </div>
      <div className="flex aspect-auto gap-4 self-end">
        <Image src={searchIcon} alt="logo" />
        <Image src={profile} alt="logo" />
        <Image src={soppingCart} alt="logo" />
      </div>
    </div>
  );
};

export const Navbar = Index;
