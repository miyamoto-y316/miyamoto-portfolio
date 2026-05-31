"use client";

export type SkillCardProps = {
  color: string;
  label: string;
  labelTextColor: "black" | "white";
  skillTitle: string;
  iconSrc: string;
};

export default function SkillCard({
  color,
  label,
  labelTextColor,
  iconSrc,
  skillTitle,
}: SkillCardProps) {
  return (
    <div
      className="relative w-1/4 aspect-square rounded-tl-[48px] rounded-tr-none rounded-br-3xl rounded-bl-3xl flex flex-col items-center justify-center gap-2"
      style={{ backgroundColor: `${color}33` }}
    >
      <span
        className="absolute top-0 right-0 text-xs px-2 py-1"
        style={{
          color: labelTextColor,
          backgroundColor: color,
        }}
      >
        実務経験{label}年
      </span>
      <img
        className="w-50 h-50"
        src={iconSrc}
        alt={skillTitle}
        style={{
          width: "clamp(24px, 10vw, 1000px)",
          height: "clamp(24px, 10vw, 1000px)",
        }}
      />
      <span
        className="text-black"
        style={{ fontSize: "clamp(10px, 10vw, 36px)" }}
      >
        {skillTitle}
      </span>
    </div>
  );
}
