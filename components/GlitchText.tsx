"use client";

import React, { useState, useCallback, useEffect, ElementType } from "react";

const GLITCH_CHARS =
    "アイウエオカキクケコ!<>-_\\/[]{}—=+*^?#$@%&";

interface GlitchTextProps {
    text: string;
    className?: string;
    as?: ElementType;
    triggerOnMount?: boolean;
}

export default function GlitchText({
    text,
    className = "",
    as: Tag = "span",
    triggerOnMount = true,
}: GlitchTextProps) {
    const [displayed, setDisplayed] = useState(text);
    const [isGlitching, setIsGlitching] = useState(false);
    
    const Component = Tag as any;

    const glitch = useCallback(() => {
        if (isGlitching) return;
        setIsGlitching(true);

        let iteration = 0;
        const maxIterations = 12;

        const interval = setInterval(() => {
            setDisplayed(
                text
                    .split("")
                    .map((char, i) => {
                        if (char === " ") return " ";
                        if (i < iteration / 1.5) return text[i];
                        return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
                    })
                    .join("")
            );

            iteration++;
            if (iteration >= maxIterations) {
                clearInterval(interval);
                setDisplayed(text);
                setIsGlitching(false);
            }
        }, 35);
    }, [text, isGlitching]);

    useEffect(() => {
        if (triggerOnMount) {
            const t = setTimeout(glitch, 300);
            return () => clearTimeout(t);
        }
    }, [triggerOnMount, glitch]);

    return (
        <>
            <Component
                className={`glitch-text ${className}`}
                onMouseEnter={glitch}
                data-text={text}
                style={{
                    position: "relative" as const,
                    display: "inline-block",
                    fontFamily: "var(--font-mono)",
                }}
            >
                {displayed}
            </Component>
            <style>{`
        .glitch-text {
          position: relative;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
        .glitch-text:hover::before {
          opacity: 1;
          color: #ff2d78;
          animation: glitch-clip-1 0.4s steps(2, end) 1;
          text-shadow: 2px 0 #ff2d78;
        }
        .glitch-text:hover::after {
          opacity: 1;
          color: #00d4ff;
          animation: glitch-clip-2 0.4s steps(2, end) 1;
          text-shadow: -2px 0 #00d4ff;
        }
        .glitch-text:hover {
          animation: glitch-skew 0.4s steps(2, end) 1;
        }
      `}</style>
        </>
    );
}
