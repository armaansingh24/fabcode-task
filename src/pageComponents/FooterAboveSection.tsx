import React from "react";
import FooterAboveSectionImage from "../../public/images/FooterAboveSection.png";
import Image from "next/image";

const Index = () => {
  return (
    <div>
      <Image src={FooterAboveSectionImage} alt="FooterAboveSection" />
    </div>
  );
};

export const FooterAboveSection = Index;
