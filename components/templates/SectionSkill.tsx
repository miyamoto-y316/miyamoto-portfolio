"use client";

import { Grid } from "@mui/material";
import CardSkill from "@/components/molecules/CardSkill";

const skills = [
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
];

export default function Skill() {
  return (
    <Grid container spacing={4}>
      {skills.map((skill) => (
        <Grid key={skill.skillTitle} size={{ xs: 12, sm: 6, md: 3 }}>
          <CardSkill {...skill} />
        </Grid>
      ))}
    </Grid>
  );
}
