"use client";

import { motion } from "framer-motion";
import TerminalWindow from "@/components/TerminalWindow";
import { personalInfo } from "@/lib/data";
import { sectionVariant } from "@/lib/variants";

const STATS = [
    { key: "name", value: personalInfo.name },
    { key: "class", value: "AI/ML Engineer" },
    { key: "location", value: personalInfo.location },
    { key: "status", value: "online ●", isOnline: true },
    { key: "mood", value: personalInfo.currentMood },
    { key: "now", value: `building ${personalInfo.currentlyBuilding}` },
    { key: "music", value: personalInfo.nowPlaying },
];

export default function AboutMe() {
    return (
        <section
            id="about"
            className="section-wrapper"
            style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}
        >
            <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <p className="section-header prompt">$ cat about.txt</p>
                <p className="section-subheader comment">// reading user.profile...</p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "2rem",
                    }}
                >
                    {/* Bio text */}
                    <div style={{ fontFamily: "var(--font-mono)" }}>
                        {personalInfo.bio.map((para, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                style={{
                                    color: "var(--text-primary)",
                                    lineHeight: "1.8",
                                    fontSize: "0.9rem",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                {para}
                            </motion.p>
                        ))}
                    </div>

                    {/* Character stat card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <TerminalWindow title="user.profile">
                            <div
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.82rem",
                                }}
                            >
                                {STATS.map((stat) => (
                                    <div
                                        key={stat.key}
                                        style={{
                                            display: "flex",
                                            gap: "0.5rem",
                                            marginBottom: "0.6rem",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: "var(--text-muted)",
                                                minWidth: "80px",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {stat.key.padEnd(10)}
                                        </span>
                                        <span style={{ color: "var(--text-muted)" }}>:</span>
                                        <span
                                            style={{
                                                color: stat.isOnline
                                                    ? "var(--accent-primary)"
                                                    : "var(--text-primary)",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: stat.isOnline ? "6px" : "0",
                                            }}
                                        >
                                            {stat.isOnline ? (
                                                <>
                                                    online <span className="pulse-dot" />
                                                </>
                                            ) : (
                                                stat.value
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </TerminalWindow>
                    </motion.div>
                </div>
            </motion.div>

            <style>{`
        @media (min-width: 768px) {
          #about .section-wrapper > div > div {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
