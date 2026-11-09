"use client";

import SectionAbout from "@/components/templates/SectionAbout";
import SectionSkill from "@/components/templates/SectionSkill";
import SectionSkillNew from "@/components/templates/SectionSkillNew";
import SectionTitle from "@/components/molecules/SectionTitle";
import SectionWork from "@/components/templates/SectionWork";

export default function Home() {
  return (
    <main className="px-6 md:px-16 lg:px-64 bg-white">
      <SectionTitle title="ABOUT" />
      <SectionAbout />
      <SectionTitle title="Skill" />
      {/* <SectionSkill /> */}
      <SectionSkillNew />
      <SectionTitle title="Works" />
      <SectionWork />
    </main>
  );
}
