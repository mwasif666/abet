import React from "react";
import { Helmet } from "react-helmet";
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
import ForexDictionary from "./ForexDic";
import MyEditor from "./Blog/Editor";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Abet Global: Best Regulated Broker for Forex & CFD</title>
        <meta
          name="description"
          content="Trade forex, CFD, and more with Abet Global. Enjoy fast execution, secure deposits, and expert tools on a trusted regulated forex trading platform."
        />
      </Helmet>
      <HomeBanner />
      <AnnouncementsMarquee />
      {/* <MyEditor /> */}
      <BenefitsSection />
      <InstrumentsSection />
      <CircularAnimation />
      <PackagesTable />
      <PlatformsSection />
      <AbetGlobalSection />
      <AbetEducationSection />
      <BlogSection />
      <TestimonialSection />
      {/* <ForexDictionary /> */}
    </>
  );
};

export default Home;
