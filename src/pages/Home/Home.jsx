import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import SectorsSection from "./SectorsSection";
import LeadershipSection from "./LeadershipSection";
import BlogSection from "./BlogSection";
import CTASection from "./CTASection";
import TeamSection from "./TeamSection";
import LocationsSection from "./LocationsSection";
import DisclaimerSection from "./DisclaimerSection";

function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <TeamSection />
    </div>
  );
}

export default Home;
