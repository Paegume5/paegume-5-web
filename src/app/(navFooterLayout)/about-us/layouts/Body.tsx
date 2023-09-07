import Goals from "@components/sections/Goals";
import { navHeight } from "@constants/constants";
import { makeTopMargin } from "@utils/utils";
import Image from "next/image";

const Body = () => {
  let marginT = makeTopMargin(navHeight);

  return (
    <div style={{ marginTop: marginT }}>
      <div
        className={`flex flex-col items-center justify-center gap-6 px-6 py-44 bg-center bg-cover text-white`}
        style={{
          backgroundImage: `linear-gradient(to top, #000000c1 20%, #000000c9), url('/img/gallery/g1.jpg')`,
        }}
      >
        <h1 className="text-heading text-color-7 text-center font-semibold md:text-4xl">
          About Paegume 5
        </h1>
        <p className="font-light w-full px-32 md:px-12 md:text-sm py-4 text-center">
          Established in 2012 GC,{" "}
          <span className="font-normal">
            PAEGUME AMEST (5) GEBRESENAY DIRJITE (PAGD)
          </span>{" "}
          is a steadily growing NGO with an increasing effort to reach out to
          the most vulnerable communities with a comprehensive agenda. In the
          past 19 years, it has reached and served more than 270,000
          beneficiaries including most vulnerable urban poor communities. It
          provides critically needed humanitarian support - shelter, food, water
          sanitation and hygiene (WASH), health, educational material and
          technical support. These services are provided in response to
          emergency needs with a focus on saving lives and mitigating human
          suffering caused and perpetuated by human-made and natural disasters.
        </p>
      </div>
      <Goals />
    </div>
  );
};

export default Body;
