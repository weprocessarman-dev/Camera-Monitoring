import React from 'react';
import { Navbar13 } from '../components/layout/Navbar13';
import { Footer7 } from '../components/layout/Footer7';
import { Pricing19 } from '../components/sections/Pricing19';
import { Layout392 } from '../components/sections/Layout392';
import { Cta53 } from '../components/ui/Cta53';
import { Faq4 } from '../components/ui/Faq4';

export default function PricingPage() {
  return (
    <div>
      <Navbar13 />
      <div className="pt-20">
        <Layout392 />
        <Pricing19 />
        <Faq4 />
        <Cta53 />
      </div>
      <Footer7 />
    </div>
  );
}