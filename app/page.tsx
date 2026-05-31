import SectionAbout from "@/components/templates/SectionAbout";
import SectionSkill from "@/components/templates/SectionSkill";

export default function Home() {
  return (
    <main className="px-6 md:px-16 lg:px-32 bg-white">
      <SectionAbout />
      <SectionSkill />
      <div className="pt-30 bg-white"></div>
    </main>
  );
}
