"use client";

import SphereSkill from "@/components/molecules/SphereSkill";

export default function Skill() {
  return (
    <div className="flex flex-col gap-13">
      {/* 1グループ目：4列 */}
      <div className="grid grid-cols-4 justify-items-center gap-1">
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          skillName="JavaScript"
          experience={2}
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          skillName="TypeScript"
          experience={2}
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
          skillName="Nuxt.js"
          experience={2}
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          skillName="React"
          experience={1}
        />
      </div>

      {/* 2グループ目：3列 */}
      <div className="grid grid-cols-3 justify-items-center gap-1">
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
          skillName="Unity"
          experience={2}
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
          skillName="C#"
          experience={2}
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg"
          skillName="Arduino"
          experience={1}
        />
        <SphereSkill
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg"
          skillName="VBA"
          experience={1}
        />
      </div>
    </div>
  );
}
