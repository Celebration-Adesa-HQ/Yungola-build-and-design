import React from "react";
import AboutHero from "@/components/sections/about/AboutHero";
import MissionVision from "@/components/sections/about/MissionVision";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";
import LeadershipTeam from "@/components/sections/about/LeadershipTeam";
import Milestones from "@/components/sections/about/Milestones";

export const metadata = {
  title: "About Us | YUNGOLA",
  description: "Learn about Yungola Build and Design — our story, leadership team, and mission to deliver premium cinematic architecture and construction across Nigeria.",
};

export default function AboutPage() {
  return (
    <div className="bg-darkBackground text-darkForeground min-h-screen pt-24 font-montserrat antialiased">
      <AboutHero />
      <MissionVision />
      <WhyChooseUs />
      <LeadershipTeam />
      <Milestones />
    </div>
  );
}
