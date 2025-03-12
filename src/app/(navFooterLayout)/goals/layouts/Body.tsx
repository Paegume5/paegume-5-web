import Goals from "@components/sections/Goals";
import { navHeight } from "@constants/constants";
import { makeTopMargin } from "@utils/utils";

const Body = () => {
  let marginT = makeTopMargin(navHeight);

  return (
    <div style={{ marginTop: marginT }}>
      <div
        className={`flex flex-col items-center justify-center gap-6 px-6 py-44 bg-center bg-cover text-white`}
        style={{
          backgroundImage: `linear-gradient(to top, #000000c1 20%, #000000c9), url('/img/gallery/g3.jpg')`,
        }}
      >
        <h1 className="text-heading text-color-7 text-center font-semibold md:text-4xl">
          Our Goals
        </h1>
        <p className="font-light w-full px-32 md:px-12 md:text-sm py-4 text-center">
          At <span className="font-normal">PAEGUME AMEST (5) GEBRESENAY DIRJITE (PAGD)</span>, 
          our goals are centered around empowering vulnerable communities and creating sustainable 
          solutions. We strive to provide long-term support in key areas such as education, healthcare, 
          and economic development. Our approach is driven by:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base font-light w-full px-32 md:px-12">
          <li>Providing access to quality education and learning materials.</li>
          <li>Enhancing healthcare facilities and ensuring medical support.</li>
          <li>Facilitating economic opportunities for disadvantaged communities.</li>
          <li>Promoting gender equality and women's empowerment.</li>
          <li>Ensuring environmental sustainability through community-driven initiatives.</li>
        </ul>
      </div>
      <Goals />
    </div>
  );
};

export default Body;
