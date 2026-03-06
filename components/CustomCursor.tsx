"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;
        let rafId: number;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        };

        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;
            rafId = requestAnimationFrame(animateRing);
        };

        const onEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a");
            if (isInteractive) setIsHovering(true);
        };

        const onLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseover", onEnter);
        window.addEventListener("mouseout", onLeave);
        rafId = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseover", onEnter);
            window.removeEventListener("mouseout", onLeave);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className={`cursor-dot${isHovering ? " cursor-hover" : ""}`}
            />
            <div
                ref={ringRef}
                className={`cursor-ring${isHovering ? " cursor-hover" : ""}`}
            />
        </>
    );
}
