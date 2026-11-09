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
    <div className="flex flex-wrap justify-center gap-30">
      <CardSkillNew
        label="2"
        skillTitle="JavaScript"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      />
      <CardSkillNew
        label="2"
        skillTitle="TypeScript"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        experienceBgColor="#1677C7"
        experienceTextColor="white"
      />
      <CardSkillNew
        label="2"
        skillTitle="Nuxt"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
        experienceBgColor="#3B8070"
        experienceTextColor="white"
      />
      <CardSkillNew
        label="1"
        skillTitle="React"
        iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        experienceBgColor="#53C1DE"
        experienceTextColor="white"
      />
    </div>
  );
}
