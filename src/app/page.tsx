"use client";

import Header from "./layouts/Header";
import Body from "./layouts/Body";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import GetInvolved from "@components/sections/GetInvolved";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Header />
      <Body />
      <GetInvolved />
      <Footer />
    </>
  );
}
