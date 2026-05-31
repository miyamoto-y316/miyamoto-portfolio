"use client";

import SectionAbout from "@/components/templates/SectionAbout";
import SectionSkill from "@/components/templates/SectionSkill";
import SectionTitle from "@/components/molecules/SectionTitle";

export default function Home() {
  return (
    <main className="px-6 md:px-16 lg:px-32 bg-white">
      <SectionTitle title="ABOUT" />
      <SectionAbout />
      <SectionTitle title="Skill" />
      <SectionSkill />
      <div className="pt-30 bg-white"></div>
    </main>
  );
}
