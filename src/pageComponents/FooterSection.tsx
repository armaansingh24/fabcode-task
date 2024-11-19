import React from "react";
import facebookIcon from "../../public/images/facebook.png";
import instagramIcon from "../../public/images/instagram.png";
import tiktokIcon from "../../public/images/tiktok.png";
import youtubeIcon from "../../public/images/youtube.png";
import Image from "next/image";

const Index = () => {
  return (
    <div className="w-full flex justify-center mb-28 mt-28 ">
      <div className="w-[90%] min-h-[400px] bg-seconderyBackground rounded-[20px] p-4 flex justify-between items-center">
        {/* Left section */}
        <div className="h-[95%] flex flex-col items-start justify-between w-[40%]">
          <div className="text-primary font-semibold uppercase text-xl">
            <p>Connect Community</p>
          </div>
          <div className="flex gap-4">
            <div className="w-fit bg-secondery p-4 rounded-lg cursor-pointer">
              <Image src={instagramIcon} alt="Instagram" />
            </div>
            <div className="w-fit bg-secondery p-4 rounded-lg cursor-pointer">
              <Image src={tiktokIcon} alt="Tik Tok" />
            </div>
            <div className="w-fit bg-secondery p-4 rounded-lg cursor-pointer">
              <Image src={facebookIcon} alt="Facebook" />
            </div>
            <div className="w-fit bg-secondery p-4 rounded-lg cursor-pointer">
              <Image src={youtubeIcon} alt="Youtube" />
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="w-[60%] flex flex-col h-full items-start justify-between">
          <div className="text-primary mt-8 w-[52%]">
            <p>
              Get 10% off your first order, exclusive early access to new
              product launches, and the opportunity to suggest new products.
              Plus, enter our weekly draw to win free sets. Don't miss out—join
              now!
            </p>
          </div>
          <div className="w-full flex gap-4">
            <input
              type="text"
              className="outline-none p-4 text-[32px] uppercase bg-transparent placeholder-[#2b99ff7b] text-primary font-bold border-b-2 border-primary w-full"
              placeholder="Enter your email"
            />
            <button className="w-[30%] bg-primary text-secondery rounded-[24px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FooterSection = Index;
