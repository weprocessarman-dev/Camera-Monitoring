import React from "react";
import { Navbar13 } from "../components/layout/Navbar13";
import { ContactHeader } from "../components/layout/ContactHeader";
import { Contact14 } from "../components/ui/Contact14";
import { Contact6 } from "../components/ui/Contact6";
import { Contact26 } from "../components/ui/Contact26";
import { Cta54 } from "../components/ui/Cta54";
import { Faq4 } from "../components/ui/Faq4";
import { Footer7 } from "../components/layout/Footer7";

export default function ContactUsPage() {
  return (
    <div>
      <Navbar13 />
      <ContactHeader />
      {/* <Contact14 /> */}
      <Contact6 />
      {/* <Contact26 /> */}
      {/* <Cta54 /> */}
      <Faq4 />
      <Footer7 />
    </div>
  );
}