"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const ctx = gsap.context(() => {
      const container = containerRef.current!;
      const sections = gsap.utils.toArray<HTMLElement>(".panel");
      const box = document.querySelector(".moving-circle") as HTMLElement;

      // マスタータイムライン
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + window.innerWidth * sections.length
        }
      });

      // 横スクロール
      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none"
      }, 0);

      // 横移動距離を取得
      const totalMove = window.innerWidth * (sections.length - 1);

      // MotionPath（カーブ移動）
      tl.to(box, {
        motionPath: {
          path: [
            { x: 0, y: 0 },
            { x: 0, y: -150 },
            { x: 0, y: 150 },
            { x: 0, y: 0 }
          ],
          curviness: 1.2
        },
        ease: "none"
      }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      <div className="moving-circle absolute top-1/2 left-1/2 w-12 h-12 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-50" />

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