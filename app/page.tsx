"use client";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex gap-8 w-full items-center justify-center">
        
        {/* キャラクターアイコン */}
        <img
          src="/images/miyamoto_character.png"
          alt="宮本優聖"
          className="w-80 h-80 object-contain"
        />

        {/* 吹き出し */}
        <div className="relative rounded-full p-6" style={{ boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.15)" }}>
          {/* 吹き出しの三角（左向き） */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0
            border-t-8 border-t-transparent
            border-b-8 border-b-transparent
            border-r-[16px] border-r-gray"
          />

          {/* テキスト */}
          <p className="text-center text-gray-800 leading-relaxed text-lg">
            1997年3月16日生まれ(29歳)<br />
            山梨県出身<br />
            趣味でゲーム開発をしながら<br />
            Web開発の仕事をしています。
          </p>
        </div>

      </div>
    </section>
  );
}