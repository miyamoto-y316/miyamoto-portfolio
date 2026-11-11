"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Chip from "@mui/material/Chip";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";

type GlassSphereProps = {
  iconSrc: string;
  alt?: string;
  size?: number;
  floatDelay?: number;
  skillName: string;
  experience: string | number;
  experienceType: "pro" | "personal";
};

const chipStyles = {
  pro: {
    backgroundColor: "#DBEAFE",
    color: "#1E3A8A",
  },
  personal: {
    backgroundColor: "#DCFCE7",
    color: "#15803D",
  },
};

const chipIcons = {
  pro: <BusinessCenterIcon />,
  personal: <RoomPreferencesIcon />,
};

export default function GlassSphere({
  iconSrc,
  alt = "Skill icon",
  size = 140,
  floatDelay = 0,
  skillName,
  experience,
  experienceType,
}: GlassSphereProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      {/* 浮遊するガラススフィア（アイコン）部分 */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        style={{
          width: size,
          height: size,
        }}
      >
        <div
          className="
            flex items-center justify-center
            w-full h-full
            rounded-full
            bg-linear-to-br
            from-sky-100/50
            via-sky-100/50
            to-blue-200/80
            /* エッジを際立たせる光のボーダー */
            border border-white/90
            /* 立体感を生むシャドウとインセット（内側）の光沢 */
            shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),5px_5px_15px_rgba(0,0,0,0.1)]
          "
        >
          {/* Top Reflection */}
          <div
            className="
        absolute
        top-[10%] left-[10%]
        w-[35%] h-[20%]
        rounded-[50%]
        bg-white
        rotate-[-35deg]
        blur-sm
      "
          />
          {/* Bottom Reflection */}
          <div
            className="
        absolute
        bottom-[15%] right-[5%]
        w-[45%] h-[20%]
        bg-sky-300/60
        rotate-[-35deg]
        blur-xl
      "
          />

          {/* Icon */}
          <Image
            src={iconSrc}
            alt={alt}
            width={Math.round(size * 0.57)}
            height={Math.round(size * 0.57)}
          />
        </div>
      </motion.div>

      <div className="flex flex-col items-center">
        {/* 経験年数 */}
        {<span className="text-xl">{skillName}</span>}
        {/* 経験年数：緑色のMUI Chip */}
        {
          <Chip
            icon={chipIcons[experienceType ?? "personal"]}
            label={`${experienceType === "pro" ? "実務経験" : "自主制作"} ${experience}年`}
            size="small"
            sx={{
              ...chipStyles[experienceType ?? "personal"],
              fontWeight: 600,
              fontSize: "12px",
              "& .MuiChip-icon": {
                color: experienceType === "pro" ? "#1E3A8A" : "#0369A1",
                fontSize: "16px",
                marginRight: "-8px",
                marginLeft: "8px",
                marginBottom: "2px",
              },
              "& .MuiChip-label": {
                px: 1.5,
              },
            }}
          />
        }
      </div>
    </div>
  );
}
