import React from "react";
import Header from "../components/home/header";
import Intro from "../components/home/intro";
import Works from "../components/home/works";
import Services from "../components/home/service";
import Footer from "../components/home/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Works />
      <Services />
      <Footer />
    </>
  );
}
