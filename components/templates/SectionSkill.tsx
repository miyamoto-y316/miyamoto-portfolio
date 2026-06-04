"use client";

import { Grid, Stack } from "@mui/material";
import CardSkill from "@/components/molecules/CardSkill";

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
    <Stack spacing={4}>
      {skills.map((row, rowIndex) => (
        <Grid key={rowIndex} container spacing={4}>
          {row.map((skill) => (
            <Grid key={skill.skillTitle} size={{ xs: 12, sm: 6, md: 3 }}>
              <CardSkill {...skill} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Stack>
  );
}
