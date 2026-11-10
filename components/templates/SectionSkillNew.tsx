"use client";

import { Grid, Stack } from "@mui/material";
import CardSkillNew from "@/components/molecules/CardSkillNew";

const skills = [
  [
    {
      color: "#F7DF1E",
      label: "2",
      labelTextColor: "black" as const,
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      skillTitle: "JavaScript",
    },
    {
      color: "#1677C7",
      label: "2",
      labelTextColor: "white" as const,
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      skillTitle: "TypeScript",
    },
    {
      color: "#53C1DE",
      label: "1",
      labelTextColor: "white" as const,
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      skillTitle: "React",
    },
    {
      color: "#41B883",
      label: "1",
      labelTextColor: "white" as const,
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",
      skillTitle: "Nuxt.js",
    },
  ],
  [
    {
      color: "#4D4D4D",
      label: "2",
      labelTextColor: "white" as const,
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
      skillTitle: "Unity",
    },
    {
      color: "#68217A",
      label: "2",
      labelTextColor: "white" as const,
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      skillTitle: "C#",
    },
    {
      color: "#53C1DE",
      label: "1",
      labelTextColor: "white" as const,
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      skillTitle: "VBA",
    },
    {
      color: "#00979C",
      label: "1",
      labelTextColor: "white" as const,
      iconSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
      skillTitle: "Arduino",
    },
  ],
];

export default function Skill() {
  return (
    <div className="flex flex-wrap justify-center gap-13">
      <CardSkillNew
        skillName="JavaScript"
        experience={2}
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        floatDelay={0.3}
      />
      <CardSkillNew
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        skillName="TypeScript"
        experience={0.4}
      />
      <CardSkillNew
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
        skillName="Nuxt"
        experience={2}
        floatDelay={0.9}
      />
      <CardSkillNew
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        skillName="React"
        experience={1}
      />
    </div>
  );
}
