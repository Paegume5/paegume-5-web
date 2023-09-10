import AnimatedBgImage from "@components/AnimatedBgImage";
import PrimaryButton from "@components/PrimaryButton";
import { headerImages } from "@constants/constants";

const Header = () => {
  return (
    <div className="relative flex flex-col w-full h-screen overflow-x-hidden text-white bg-center bg-cover">
      <div className="absolute z-0 w-screen h-screen bg-gradient-default">
        <AnimatedBgImage images={headerImages} />
      </div>
      <div className="absolute flex flex-col items-center justify-center flex-grow w-full h-full gap-10 px-4 pt-28 bg-gradient-default">
        <div className="flex flex-col items-center justify-center text-center select-none text-heading lg:text-4xl md:text-heading-md">
          <h1 className="font-extrabold">ጳጉሜ አምስት (፭) ግብረሰናይ ድርጅት</h1>
          <h1 className="font-extrabold text-color-7">
            Paegume 5 Charity Organization (PAGD)
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-12">
          <p className="max-w-2xl font-light text-center text-white sm:text-sm">
            Continuation and consolidation of humanitarian service delivery,
            saving lives and mitigating human suffering, based on comprehensive
            engagement in relief, recovery, rehabilitation and resilience.
          </p>
          <PrimaryButton
            text="Help Us"
            bgColor="bg-color-3"
            classes="text-sm"
            click={() => {
              document
                .querySelector("#help-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
