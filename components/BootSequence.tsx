"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
    { text: "initializing system...", delay: 0 },
    { text: "loading kernel modules........... [OK]", delay: 300 },
    { text: "mounting filesystem................. [OK]", delay: 600 },
    { text: "[sys]: detecting user profile...", delay: 900 },
    { text: "[sys]: profile found — harsh upreti", delay: 1200 },
    { text: "[sys]: loading anime subsystems... [OK]", delay: 1500 },
    { text: "[sys]: enabling terminal interface... [OK]", delay: 1800 },
    { text: "[sys]: all systems nominal.", delay: 2100 },
    { text: "[sys]: welcome back. let's build something.", delay: 2400 },
];

interface BootSequenceProps {
    onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
    const [visibleLines, setVisibleLines] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);
    const [showProgress, setShowProgress] = useState(false);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        // Show each line
        BOOT_LINES.forEach((line, i) => {
            const t = setTimeout(() => {
                setVisibleLines((prev) => [...prev, i]);
            }, line.delay);
            return () => clearTimeout(t);
        });

        // Show progress bar
        const progressTimer = setTimeout(() => {
            setShowProgress(true);
            let p = 0;
            const interval = setInterval(() => {
                p += 4;
                setProgress(p);
                if (p >= 100) {
                    clearInterval(interval);
                    // Start fade
                    setTimeout(() => {
                        setFading(true);
                        setTimeout(onComplete, 600);
                    }, 200);
                }
            }, 20);
        }, 2700);

        return () => clearTimeout(progressTimer);
    }, [onComplete]);

    const filledBars = Math.floor(progress / 4);
    const progressBar = "█".repeat(filledBars) + "░".repeat(25 - filledBars);

    return (
        <AnimatePresence>
            {!fading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "#000010",
                        zIndex: 10000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2rem",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "600px",
                            width: "100%",
                            fontFamily: "var(--font-mono)",
                            fontSize: "clamp(0.7rem, 2vw, 0.875rem)",
                            lineHeight: "2",
                        }}
                    >
                        {BOOT_LINES.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={visibleLines.includes(i) ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.3 }}
                                style={{
                                    color: line.text.startsWith("[sys]")
                                        ? "var(--accent-primary)"
                                        : "#a0ffd0",
                                }}
                            >
                                {line.text}
                            </motion.div>
                        ))}

                        {showProgress && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ marginTop: "1rem" }}
                            >
                                <div
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        color: "var(--accent-primary)",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    {progressBar} {progress}%
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
