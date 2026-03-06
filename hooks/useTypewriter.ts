"use client";

import { useState, useEffect, useRef } from "react";

export function useTypewriter(text: string, speed: number = 40, delay: number = 0) {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const indexRef = useRef(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        setDisplayedText("");
        setIsComplete(false);
        indexRef.current = 0;

        const startTimeout = setTimeout(() => {
            const type = () => {
                if (indexRef.current < text.length) {
                    setDisplayedText(text.slice(0, indexRef.current + 1));
                    indexRef.current++;
                    timeoutRef.current = setTimeout(type, speed);
                } else {
                    setIsComplete(true);
                }
            };
            type();
        }, delay);

        return () => {
            clearTimeout(startTimeout);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [text, speed, delay]);

    return { displayedText, isComplete };
}
