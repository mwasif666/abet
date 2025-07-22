import React from "react";
import PackagesTable from "../Components/PricingSection";
import HomeBanner from "../Components/HomeBanner";
import BenefitsSection from "../Components/BenefitSection";
import AnnouncementsMarquee from "../Components/Announcement";
import CircularAnimation from "../Components/Circular";
import InstrumentsSection from "../Components/Instrument";
import AbetEducationSection from "../Components/AbetEducationSection";
import PlatformsSection from "../Components/PlatformsSection";
import AbetGlobalSection from "../Components/AbetGlobalSection";
import BlogSection from "../Components/BlogSection";
import TestimonialSection from "../Components/Testimonial";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AnnouncementsMarquee />
      <BenefitsSection />
      <InstrumentsSection />
      <CircularAnimation />
      <PackagesTable />
      <PlatformsSection />
      <AbetGlobalSection />
      <AbetEducationSection />
      <BlogSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
