"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type GlassSphereProps = {
  iconSrc: string;
  alt?: string;
  size?: number;
  floatDelay?: number;
  skillName?: string; // 追加: 型定義に含める
  experience?: string | number; // 追加: 型定義に含める
};

export default function GlassSphere({
  iconSrc,
  alt = "Skill icon",
  size = 140,
  floatDelay = 0,
  skillName,
  experience,
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
        {skillName && <span className="text-xl">{skillName}</span>}
        {/* 経験年数 */}
        {experience && (
          <span className="text-xs  text-slate-400">
            経験年数 {experience}年
          </span>
        )}
      </div>
    </div>
  );
}
