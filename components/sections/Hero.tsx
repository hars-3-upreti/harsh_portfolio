"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import GlitchText from "@/components/GlitchText";
import { personalInfo } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    const { displayedText: taglineText, isComplete: taglineDone } = useTypewriter(
        personalInfo.tagline,
        35,
        1200
    );

    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: "0 1.5rem",
                paddingTop: "80px",
                position: "relative",
                zIndex: 10,
            }}
        >
            <div style={{ maxWidth: "860px", width: "100%" }}>
                {/* Comment header */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{
                        color: "var(--text-muted)",
                        fontSize: "0.85rem",
                        marginBottom: "0.75rem",
                        fontFamily: "var(--font-mono)",
                    }}
                >
          // system user identified
                </motion.p>

                {/* Prompt */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    style={{
                        color: "var(--accent-primary)",
                        fontSize: "1rem",
                        marginBottom: "0.5rem",
                        fontFamily: "var(--font-mono)",
                    }}
                >
                    {"> hello, world. i'm"}
                </motion.p>

                {/* Big glitch name */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    style={{ marginBottom: "1rem" }}
                >
                    <GlitchText
                        text={personalInfo.name}
                        className="prompt"
                        as="h1"
                        triggerOnMount
                    />
                    <style>{`
            .prompt h1, h1.prompt {
              font-size: clamp(2.5rem, 8vw, 5rem);
              font-weight: 700;
              color: var(--accent-primary);
              text-shadow: var(--glow-green);
              line-height: 1.1;
              letter-spacing: -1px;
            }
          `}</style>
                </motion.div>

                {/* Tagline typewriter */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    style={{
                        fontSize: "clamp(0.9rem, 2.5vw, 1.25rem)",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                        marginBottom: "2.5rem",
                        minHeight: "1.8em",
                    }}
                >
                    {taglineText}
                    {!taglineDone && <span className="terminal-cursor" />}
                </motion.p>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 1.4, duration: 0.4 }}
                    style={{
                        height: "1px",
                        background:
                            "linear-gradient(to right, var(--accent-primary), transparent)",
                        marginBottom: "1.5rem",
                        transformOrigin: "left",
                    }}
                />

                {/* Currently block */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.875rem",
                    }}
                >
                    <p style={{ color: "var(--accent-primary)", marginBottom: "0.6rem" }}>
                        {"> currently:"}
                    </p>
                    {[
                        {
                            label: `building ${personalInfo.currentlyBuilding}`,
                            value: `— ${personalInfo.currentlyBuildingDesc}`,
                            delay: 1.7,
                        },
                        {
                            label: `based in ${personalInfo.location}`,
                            value: "",
                            delay: 1.85,
                        },
                        {
                            label: "open to work?",
                            value: personalInfo.status === "open to work" ? "yes ✓" : "no",
                            delay: 2.0,
                            badge: true,
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: item.delay, duration: 0.4 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                marginBottom: "0.4rem",
                                paddingLeft: "1rem",
                            }}
                        >
                            <span style={{ color: "var(--text-muted)" }}>↳</span>
                            <span style={{ color: "var(--text-primary)" }}>{item.label}</span>
                            {item.value && !item.badge && (
                                <span style={{ color: "var(--text-muted)" }}>{item.value}</span>
                            )}
                            {item.badge && item.value && (
                                <span
                                    style={{
                                        padding: "1px 8px",
                                        border: "1px solid var(--accent-primary)",
                                        borderRadius: "4px",
                                        color: "var(--accent-primary)",
                                        fontSize: "0.75rem",
                                        boxShadow: "0 0 8px rgba(0,255,157,0.3)",
                                    }}
                                >
                                    {item.value}
                                </span>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* CV Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 0.4 }}
                    style={{
                        marginTop: "2rem",
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap"
                    }}
                >
                    <a
                        href={personalInfo.cvFile}
                        download="Harsh_Resume.pdf"
                        className="terminal-btn"
                        style={{
                            fontSize: "0.85rem",
                            textDecoration: "none",
                            cursor: "none"
                        }}
                    >
                        ↓ download cv
                    </a>
                    <a
                        href={personalInfo.cvFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-btn"
                        style={{
                            fontSize: "0.85rem",
                            textDecoration: "none",
                            cursor: "none",
                            borderColor: "rgba(0, 255, 157, 0.4)"
                        }}
                    >
                        → view cv
                    </a>
                </motion.div>

                {/* Scroll arrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    style={{
                        position: "absolute",
                        bottom: "2rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                    }}
                >
                    <div className="bounce-arrow">
                        <ChevronDown
                            size={20}
                            style={{ color: "var(--text-muted)", opacity: 0.6 }}
                        />
                    </div>
                    <p
                        style={{
                            fontSize: "0.7rem",
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-mono)",
                            marginTop: "4px",
                        }}
                    >
                        scroll to explore
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
