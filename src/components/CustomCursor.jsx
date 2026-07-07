import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(isFinePointer && !prefersReducedMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    let frame;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      frame = requestAnimationFrame(animateRing);
    };

    const grow = () => ringRef.current?.classList.add("scale-150", "border-signal-cyan");
    const shrink = () => ringRef.current?.classList.remove("scale-150", "border-signal-cyan");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    frame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-signal-violet pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-signal-violet/60 pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out"
      />
    </>
  );
};

export default CustomCursor;
