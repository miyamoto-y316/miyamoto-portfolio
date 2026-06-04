"use client";
import styles from "./CardSkill.module.css";

export type SkillCardProps = {
  color: string;
  label: string;
  labelTextColor: "black" | "white";
  skillTitle: string;
  iconSrc: string;
};

export default function CardSkill({
  color,
  label,
  labelTextColor,
  iconSrc,
  skillTitle,
}: SkillCardProps) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: `${color}33`,
      }}
    >
      <span
        className={styles.label}
        style={{
          color: labelTextColor,
          backgroundColor: color,
        }}
      >
        実務経験{label}年
      </span>
      <img
        className="w-50 h-50 mt-5"
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
