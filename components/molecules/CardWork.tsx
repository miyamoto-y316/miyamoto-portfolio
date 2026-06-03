"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type SkillCardProps = {
  workSrc: string;
  srcAlt: string;
  workTitle: string;
};

export default function CardWork({
  workSrc,
  srcAlt,
  workTitle,
}: SkillCardProps) {
  return (
    <Box
      sx={{
        height: 500,
        boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src={workSrc}
        alt={srcAlt}
        sx={{
          padding: 3,
          width: "100%",
          height: 400,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />
      <Typography sx={{ color: "#000000" }} variant="h5">
        {workTitle}
      </Typography>
    </Box>
  );
}
