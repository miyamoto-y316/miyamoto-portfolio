"use client";
import Image from "next/image";

export type SkillCardProps = {
  label: string;
  skillTitle: string;
  iconSrc: string;
  width?: string; // 追加: カードの幅を指定できるようにする（例: "300px" や "20rem" など）
  experienceBgColor?: string; // 追加: 背景色（カラーコードやTailwindカラー名）を指定できるようにする
  experienceTextColor?: "black" | "white"; // 文字色を "black" か "white" のみに制限
};

export default function CardSkill({
  label,
  iconSrc,
  skillTitle,
  width = "180px", // デフォルトの幅（指定がない場合の初期値）
  experienceBgColor = "#FDE047", // デフォルトの黄色（yellow-300相当）
  experienceTextColor: textColor = "black", // デフォルトは黒
}: SkillCardProps) {
  return (
    <div className="flex flex-col items-end" style={{ width }}>
      <Image src={iconSrc} alt={skillTitle} width={120} height={120} />
      <span className="text-3xl">{skillTitle}</span>
      <div
        className="flex justify-between items-end w-full px-1 text-base"
        style={{ backgroundColor: experienceBgColor, color: textColor }}
      >
        <span>開発歴</span>
        <span className="text-xl font-medium">{label}年</span>
      </div>
    </div>
  );
}
