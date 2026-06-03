"use client";

import { Grid } from "@mui/material";
import CardSkill from "@/components/molecules/CardSkill";

export default function Skill() {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <CardSkill
          color="#F7DF1E"
          label="2"
          labelTextColor="black"
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          skillTitle="JavaScript"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <CardSkill
          color="#1677C7"
          label="2"
          labelTextColor="white"
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          skillTitle="TypeScript"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <CardSkill
          color="#53C1DE"
          label="1"
          labelTextColor="white"
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          skillTitle="React"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <CardSkill
          color="#41B883"
          label="1"
          labelTextColor="white"
          iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
          skillTitle="Nuxt.js"
        />
      </Grid>
    </Grid>
  );
}
