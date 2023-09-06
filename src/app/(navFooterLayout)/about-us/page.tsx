import Body from "./layouts/Body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paegume 5 - About",
  description: "Paegume 5 about"
}

const AboutPage = () => {

  return (
      <div>
        <Body />
      </div>
  )
}

export default AboutPage