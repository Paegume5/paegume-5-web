import { navHeight, topMargin } from "@constants/constants"
import Body from "./layouts/Body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paegume 5 - Donate",
  description: "Paegume 5 donation"
}

const DonatePage = () => {

  let marginT   = topMargin(navHeight);

  return (
      <div className={``} style={{marginTop: marginT}}>
        <Body />
      </div>
  )
}

export default DonatePage