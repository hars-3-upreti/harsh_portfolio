"use client";

import { useEffect, useRef } from "react";

const KATAKANA =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

export default function KatakanaRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const fontSize = 14;
        let cols: number[] = [];
        let drops: number[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const isMobile = window.innerWidth < 640;
            const columnWidth = isMobile ? 30 : 20;
            const numCols = Math.floor(canvas.width / columnWidth);
            cols = Array(numCols).fill(columnWidth);
            drops = Array(numCols)
                .fill(0)
                .map(() => Math.floor(Math.random() * -100));
        };

        resize();
        window.addEventListener("resize", resize);

        let rafId: number;
        let lastTime = 0;
        const fps = 20;
        const interval = 1000 / fps;

        const draw = (timestamp: number) => {
            rafId = requestAnimationFrame(draw);
            const delta = timestamp - lastTime;
            if (delta < interval) return;
            lastTime = timestamp - (delta % interval);

            ctx.fillStyle = "rgba(10, 10, 15, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px 'Noto Sans JP', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = KATAKANA[Math.floor(Math.random() * KATAKANA.length)];
                const x = i * (canvas.width / drops.length);
                const y = drops[i] * fontSize;

                // Head char is slightly brighter
                if (drops[i] > 0) {
                    ctx.fillStyle = "rgba(0, 255, 157, 0.15)";
                    ctx.fillText(char, x, y);
                }

                // Trail chars
                for (let t = 1; t <= 6; t++) {
                    const trailOpacity = 0.08 - t * 0.012;
                    if (trailOpacity <= 0) continue;
                    const trailChar = KATAKANA[Math.floor(Math.random() * KATAKANA.length)];
                    ctx.fillStyle = `rgba(0, 255, 157, ${trailOpacity})`;
                    ctx.fillText(trailChar, x, y - t * fontSize);
                }

                // Reset when off screen
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = Math.floor(Math.random() * -30);
                }

                drops[i] += 0.5 + Math.random() * 0.5;
            }
        };

        rafId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="katakana-canvas"
            aria-hidden="true"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}
