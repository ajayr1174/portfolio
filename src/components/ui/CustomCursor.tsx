"use client";

import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  active: boolean;
};

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  (window.matchMedia?.("(pointer: coarse)")?.matches ?? "ontouchstart" in window);

export function CustomCursor() {
  const [enabled] = useState(() => !isTouchDevice());
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    active: false,
  });
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("hide-default-cursor");

    const handleMove = (event: MouseEvent) => {
      setCursor((prev) => ({
        ...prev,
        x: event.clientX,
        y: event.clientY,
        active: true,
      }));
    };

    const handleLeave = () => {
      setCursor((prev) => ({ ...prev, active: false }));
    };

    const handleEnterInteractive = () => setInteractive(true);
    const handleLeaveInteractive = () => setInteractive(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    const interactiveEls = document.querySelectorAll<HTMLElement>(
      "[data-cursor='interactive']",
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleEnterInteractive);
      el.addEventListener("mouseleave", handleLeaveInteractive);
    });

    return () => {
      document.body.classList.remove("hide-default-cursor");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnterInteractive);
        el.removeEventListener("mouseleave", handleLeaveInteractive);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  const { x, y, active } = cursor;

  const innerSize = interactive ? 14 : 10;
  const outerSize = interactive ? 22 : 32;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60]"
      aria-hidden="true"
    >
      <div
        className="pointer-events-none fixed rounded-full bg-white transition-[width,height,transform,opacity] duration-150 ease-out"
        style={{
          width: innerSize,
          height: innerSize,
          opacity: active ? 1 : 0,
          transform: `translate(${x - innerSize / 2}px, ${y - innerSize / 2}px)`,
        }}
      />
      <div
        className="pointer-events-none fixed rounded-full border border-cyan-300/40 bg-cyan-300/5 transition-[width,height,transform,opacity,border-color,background-color] duration-220 ease-out"
        style={{
          width: outerSize,
          height: outerSize,
          opacity: active ? 1 : 0.6,
          transform: `translate(${x - outerSize / 2}px, ${y - outerSize / 2}px)`,
          borderColor: interactive ? "rgba(34,211,238,0.7)" : "rgba(148,163,184,0.4)",
          backgroundColor: interactive ? "rgba(34,211,238,0.12)" : "rgba(15,23,42,0.25)",
        }}
      />
    </div>
  );
}
