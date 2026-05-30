"use client";

export type SkillCardProps = {
  backGroundColor: string;
  label: string;
  skillTitle: string;
  iconSrc: string;
};

export default function SkillCard({
  backGroundColor,
  label,
  iconSrc,
  skillTitle,
}: SkillCardProps) {
  return (
    <div
      className="relative w-1/4 aspect-square rounded-tl-[48px] rounded-tr-none rounded-br-3xl rounded-bl-3xl flex flex-col items-center justify-center gap-2"
      style={{ backgroundColor: backGroundColor }}
    >
      <span className="absolute top-0 right-0 text-xs  bg-black text-white px-2 py-1">
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
