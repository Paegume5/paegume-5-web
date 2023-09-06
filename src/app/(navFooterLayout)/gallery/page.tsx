import Body from "./layouts/Body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paegume 5 - Gallery",
  description: "Paegume 5 gallery",
};

const GalleryPage = () => {
  return (
    <div>
      <Body />
    </div>
  );
};

export default GalleryPage;
