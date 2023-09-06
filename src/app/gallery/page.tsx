import { navHeight, topMargin } from "@constants/constants"
import Body from "./layouts/Body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paegume 5 - Gallery",
  description: "Paegume 5 gallery"
}

const GalleryPage = () => {

  let marginT = topMargin(navHeight);

  return (
      <div className={``} style={{marginTop: marginT}}>
        <Body />
      </div>
  )
}

export default GalleryPage