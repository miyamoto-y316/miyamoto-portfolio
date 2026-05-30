"use client";
import Image from "next/image";
import styles from "./About.module.css";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center gap-8">
      <Image
        src="/images/miyamoto_character.png"
        alt="宮本優聖"
        width={320}
        height={320}
        className={styles.image}
      />
      <div
        className="relative rounded-full p-6 h-80 w-full flex items-center justify-center"
        style={{ boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.15)" }}
      >
        <div
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0
            border-t-8 border-t-transparent
            border-b-8 border-b-transparent
            border-r-[16px] border-r-gray"
        />
        <p className="text-center text-gray-800 leading-relaxed text-2xl">
          1997年3月16日生まれ(29歳)
          <br />
          山梨県出身
          <br />
          趣味でゲーム開発をしながら
          <br />
          Web開発の仕事をしています。
        </p>
      </div>
    </section>
  );
}
