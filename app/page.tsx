import AboutSection from "@/components/templates/About";
import Skill from "@/components/templates/Skill";

export default function Home() {
  return (
    <main className="px-6 md:px-16 lg:px-32 bg-white">
      <AboutSection />
      <Skill />
    </main>
  );
}
