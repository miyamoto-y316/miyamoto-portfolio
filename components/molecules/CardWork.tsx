"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CardWork() {
  return (
    <Box
      sx={{
        height: 500,
        boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        component="img"
        src="/images/work1.png"
        alt="不思議なおもちゃとパズルの世界"
        sx={{
          padding: 3,
          width: "100%",
          height: 400,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />
      {/* テキスト */}
      <Typography sx={{ paddingLeft: 3, color: "#000000" }} variant="h5">
        不思議なおもちゃとパズルの世界
      </Typography>
    </Box>
  );
}
