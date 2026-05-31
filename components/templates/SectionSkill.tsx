import SkillCard from "@/components/molecules/SkillCard";

export default function Skill() {
  return (
    <div className="flex gap-20">
      <SkillCard
        color="#F7DF1E"
        label="2"
        labelTextColor="black"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        skillTitle="JavaScript"
      />
      <SkillCard
        color="#1677C7"
        label="2"
        labelTextColor="white"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        skillTitle="TypeScript"
      />
      <SkillCard
        color="#53C1DE"
        label="1"
        labelTextColor="white"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        skillTitle="React"
      />
    </div>
  );
}
