import React from "react";
import { Navbar13 } from "./components/layout/Navbar13";
import { Header98 } from "./components/layout/Header98";
import { Layout121 } from "./components/sections/Layout121";
import { Layout220 } from "./components/sections/Layout220";
import { Layout419 } from "./components/sections/Layout419";
import { Gallery5 } from "./components/sections/Gallery5";
import { Layout361 } from "./components/sections/Layout361";
import { Testimonial22 } from "./components/sections/Testimonial22";
import { Layout145 } from "./components/sections/Layout145";
import { Team2 } from "./components/sections/Team2";
import { Pricing19 } from "./components/sections/Pricing19";
import { Cta53 } from "./components/ui/Cta53";
import { Faq4 } from "./components/ui/Faq4";
import { Cta52 } from "./components/ui/Cta52";
import { Footer7 } from "./components/layout/Footer7";

export default function HomePage() {
  return (
    <div>
      <Navbar13 />
      <Header98 />
      <Layout121 />
      <Layout220 />
      <Layout419 />
      <Gallery5 />
      <Layout361 />
      <Testimonial22 />
      <Layout145 />
      {/* <Team2 /> */}
      {/* <Pricing19 /> */}
      <Cta53 />
      <Faq4 />
      {/* <Cta52 /> */}
      <Footer7 />
    </div>
  );
}