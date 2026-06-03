"use client";

import { Grid } from "@mui/material";
import CardWork from "@/components/molecules/CardWork";

export default function Skill() {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, sm: 6, md: 1 }} />
      <Grid size={{ xs: 12, sm: 6, md: 5 }}>
        <CardWork
          workSrc="/images/work1.png"
          srcAlt="不思議なおもちゃとパズルの世界"
          workTitle="不思議なおもちゃとパズルの世界"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 5 }}>
        <CardWork
          workSrc="/images/work2.png"
          srcAlt="GoRoom"
          workTitle="GoRoom"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 1 }} />
    </Grid>
  );
}
