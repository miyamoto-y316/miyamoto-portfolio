"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // GSAPにScrollTrigger機能を登録
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,              // セクション固定
          scrub: 1,               // スクロールと同期
          snap: 1 / (sections.length - 1), // スナップ
          end: () =>
            "+=" + window.innerWidth * sections.length,
        },
      });
    }, containerRef);

    return () => ctx.revert(); // クリーンアップ
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <div className="flex">
        <div className="panel min-w-full h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">Miyamoto Portfolio</h2>
        </div>

        <div className="panel min-w-full h-screen bg-blue-200 flex items-center justify-center">
          <h2 className="text-4xl font-bold">About</h2>
        </div>

        <div className="panel min-w-full h-screen bg-green-200 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Works</h2>
        </div>

        <div className="panel min-w-full h-screen bg-purple-200 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Contact</h2>
        </div>
      </div>
    </section>
  );
}