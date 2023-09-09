import AnimatedBgImage from "@components/AnimatedBgImage";
import PrimaryButton from "@components/PrimaryButton";
import { headerImages } from "@constants/constants";
import { useEffect, useState } from "react";

const Header = () => {
  let [bgDefault, bgMobile] = ["img/bg.mp4", "img/bg-mobile.mp4"];
  const [bg, setBg] = useState(bgDefault);

  useEffect(() => {
    const setBgSrc = () => {
      window.innerWidth <= 580 ? setBg(bgMobile) : setBg(bgDefault);
    };

    setBgSrc();
    window.addEventListener("resize", setBgSrc);
  }, []);

  return (
    <div
      className="relative flex flex-col h-screen w-full text-white
                 bg-center bg-cover overflow-x-hidden"
    >
      <div className="absolute w-screen h-screen z-0 bg-black">
        <AnimatedBgImage images={headerImages} />
      </div>
      <div
        className="absolute w-full h-full flex flex-col flex-grow gap-10 items-center justify-center px-4 pt-28"
        style={{
          background: "linear-gradient(to top, #000000aa 20%, #000000c9)",
        }}
      >
        <div
          className="flex flex-col items-center justify-center text-center 
                     text-heading lg:text-4xl md:text-heading-md select-none"
        >
          <h1 className="font-extrabold">ጳጉሜ አምስት (፭) ግብረሰናይ ድርጅት</h1>
          <h1 className="text-color-7 font-extrabold">
            Paegume 5 Charity Organization (PAGD)
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center px-12">
          <p className="max-w-2xl text-white font-light sm:text-sm text-center">
            Continuation and consolidation of humanitarian service delivery,
            saving lives and mitigating human suffering, based on comprehensive
            engagement in relief, recovery, rehabilitation and resilience.
          </p>
          <PrimaryButton
            text="Help Us"
            bgColor="bg-color-3"
            classes="text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
