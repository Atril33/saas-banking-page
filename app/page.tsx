import Image from "next/image";
import Hero from './components/sections/Hero';
import RecentClient from './components/sections/RecentClient';
import Features from './components/sections/Features';
import CurrencyOptions from './components/sections/CurrencyOptions';
import OurPayment from './components/sections/OurPayment';
import Pricing from './components/sections/Pricing';
import SmartBanking from './components/sections/SmartBanking';
import Testimonials from './components/sections/Testimonials';
import TrustSection from './components/sections/TrustSection';
import Footer from './components/sections/Footer';

export default function Home() {
  return (
    <>
    <Hero />
    <RecentClient />
    <Features />
    <CurrencyOptions />
    <OurPayment />
    <Pricing />
    <SmartBanking />
    <Testimonials />
    <TrustSection />
    <Footer />
    </>
  );
}
