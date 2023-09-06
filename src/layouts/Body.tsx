"use client";

import Test from "@components/Test";
import Challenges from "@components/sections/Challenges";
import HomeGallery from "@components/sections/HomeGallery";
import HowToHelp from "@components/sections/HowToHelp";
import JoinUs from "@components/sections/JoinUs";
import Pagd from "@components/sections/Pagd";
import Shortcuts from "@components/sections/Shortcuts";

const Body = () => {
  return (
    <>
      <Shortcuts />
      <Pagd />
      <JoinUs />
      <HomeGallery />
      <Challenges />
      <HowToHelp />
      <Test />
    </>
  );
};

export default Body;
