import Gallery from "@components/Gallery";
import Shortcuts from "@components/sections/Shortcuts";
import { navHeight } from "@constants/constants";
import { makeTopMargin } from "@utils/utils";

const Body = () => {
  let marginT = makeTopMargin(navHeight);

  return (
    <div style={{marginTop: marginT}}>
      <div
        className={`flex flex-col items-center justify-center gap-6 px-6 py-56 bg-center bg-cover text-white`}
        style={{
          backgroundImage: `linear-gradient(to top, #000000c1 20%, #000000c9), url('/img/gallery/g2.jpg')`,
        }}
      >
        <h1 className="text-heading text-color-7 text-center font-semibold md:text-4xl">
          PAGD Gallery
        </h1>
      </div>
      <Gallery />
      <Shortcuts noLinks />
    </div>
  )
}

export default Body