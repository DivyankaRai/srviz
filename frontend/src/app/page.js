"use client";
import HeroSection from "./components/HeroSection";
import FeaturedEvent from "./components/FeaturedEvent";
import TopPackages from "./components/TopPackages";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import SampleItinerary from "./components/SampleItinerary";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedEvent />
      <TopPackages />
      <WhyChooseUs />
      <HowItWorks />
      <SampleItinerary />
      <LeadForm />
      <Footer />
    </>
  );
}
