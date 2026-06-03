"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./CardWork.module.css";

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
      className={styles.card}
      sx={{
        height: 500,
        boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          padding: 3,
        }}
      >
        <Box
          component="img"
          src={workSrc}
          alt={srcAlt}
          sx={{
            width: "100%",
            height: 400,
            objectFit: "cover",
            borderRadius: 10,
            display: "block",
          }}
        />
        {/* リボンの影 */}
        <Box
          sx={{
            position: "absolute",
            top: 53,
            right: 0,
            background: "rgba(0, 0, 0, 0.3)",
            fontWeight: "bold",
            pl: 4,
            pr: 2,
            lineHeight: "30px",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 20px 50%)",
          }}
        >
          U22プログラミングコンテスト受賞
        </Box>
        {/* リボン本体 */}
        <Box
          sx={{
            position: "absolute",
            top: 48,
            right: 0,
            background:
              "linear-gradient(135deg, #ffde7c 0%, #fcf049 50%, #daa923 100%)",
            color: "#000",
            fontWeight: "bold",
            pl: 4,
            pr: 2,
            py: 0.5,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 20px 50%)",
            textShadow: "1px 1px 0px rgba(255, 255, 255, 1)",
          }}
        >
          U22プログラミングコンテスト受賞
        </Box>
      </Box>
      <Typography sx={{ color: "#000000" }} variant="h5">
        {workTitle}
      </Typography>
    </Box>
  );
}
