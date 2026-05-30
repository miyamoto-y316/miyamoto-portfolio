import SkillCard from "@/components/molecules/SkillCard";

export default function Skill() {
  return (
    <div className="flex gap-20">
      <SkillCard
        backGroundColor="#F7DF1E33"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        skillTitle="JavaScript"
      />
      <SkillCard
        backGroundColor="#1677C733"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        skillTitle="TypeScript"
      />
      <SkillCard
        backGroundColor="#53C1DE33"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        skillTitle="React"
      />
    </div>
  );
}
