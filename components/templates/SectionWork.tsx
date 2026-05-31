"use client";

import { Grid } from "@mui/material";
import CardWork from "@/components/molecules/CardWork";

export default function Skill() {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, sm: 6, md: 1 }} />
      <Grid size={{ xs: 12, sm: 6, md: 5 }}>
        <CardWork />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 5 }}>
        <CardWork />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 1 }} />
    </Grid>
  );
}
