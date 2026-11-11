"use client";

import SphereSkill from "@/components/molecules/SphereSkill";

export default function Skill() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-4 justify-items-center">
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxt/nuxt-original.svg"
          skillName="nuxt"
          experience={2}
          experienceType="pro"
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          skillName="JavaScript"
          experience={2}
          experienceType="pro"
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          skillName="TypeScript"
          experience={2}
          experienceType="pro"
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          skillName="React"
          experience={1}
          experienceType="pro"
        />
      </div>
      <div className="grid grid-cols-4 justify-items-center">
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg"
          skillName="AWS"
          experience={1}
          experienceType="personal"
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
          skillName="Unity"
          experience={2}
          experienceType="personal"
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
          skillName="C#"
          experience={2}
          experienceType="personal"
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg"
          skillName="Arduino"
          experience={1}
          experienceType="personal"
        />
      </div>
    </div>
  );
}
