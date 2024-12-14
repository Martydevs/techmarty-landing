"use client";

import React, { useEffect } from "react";
import Dot from "@/lib/dot";
import { useTheme } from "next-themes";

interface FollowCursorProps {
  color?: string;
}

const FollowCursor: React.FC<FollowCursorProps> = () => {
  const { theme } = useTheme();
  const cursorColor = theme === "dark" ? "#fff" : "#000";

  useEffect(() => {
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const dot = new Dot(width / 2, height / 2, 25, 10, cursorColor, 0.5);

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const updateDot = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y, context);
      }
    };

    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };

    const init = () => {
      if (prefersReducedMotion.matches) {
        return;
      }

      canvas = document.createElement("canvas");
      context = canvas.getContext("2d");
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.pointerEvents = "none";
      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onWindowResize);
      loop();
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
    };

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    init();

    return () => {
      destroy();
    };
  }, [cursorColor]);

  return null; // This component doesn't render any visible JSX
};

export default FollowCursor;
