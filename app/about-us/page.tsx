import React from "react";
import { Navbar13 } from "../components/layout/Navbar13";
import { Header62 } from "../components/layout/Header62";
import { Layout149 } from "../components/sections/Layout149";
import { Team6 } from "../components/sections/Team6";
import { Stats55 } from "../components/sections/Stats55";
import { Contact26 } from "../components/ui/Contact26";
import { Testimonial25 } from "../components/sections/Testimonial25";
import { Cta53 } from "../components/ui/Cta53";
import { Footer7 } from "../components/layout/Footer7";

export default function AboutUsPage() {
  return (
    <div>
      <Navbar13 />
      <Header62 />
      <Layout149 />
      {/* <Team6 /> */}
      <Stats55 />
      <Contact26 />
      <Testimonial25 />
      <Cta53 />
      <Footer7 />
    </div>
  );
}