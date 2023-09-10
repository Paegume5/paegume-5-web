import Body from "./layouts/Body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paegume 5 - Registration",
  description: "Paegume 5 registration",
};

const AboutPage = () => {
  return (
    <div className={`overflow-hidden`}>
      <Body />
    </div>
  );
};

export default AboutPage;
