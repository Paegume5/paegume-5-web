import PrimaryButton from "@components/PrimaryButton";

const Header = () => {
  
  const headerStyle = {
    backgroundImage: `linear-gradient(to top, #000000c1 20%, #000000c9), url('/img/bg.gif')`,
    backgroundSize: 'cover'
  };

  return (
    <div
      className="relative flex flex-col h-screen w-full text-white
                 bg-center bg-cover overflow-x-hidden"
      style={headerStyle}
    >
      <div className="flex flex-col flex-grow gap-10 items-center justify-center px-4 pt-28">
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
          <PrimaryButton text="Help Us" color="bg-color-3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
