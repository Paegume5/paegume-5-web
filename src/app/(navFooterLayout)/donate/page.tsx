import Body from "./layouts/Body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paegume 5 - Donate",
  description: "Paegume 5 donation"
}

const DonatePage = () => {

  return (
      <div>
        <Body />
      </div>
  )
}

export default DonatePage