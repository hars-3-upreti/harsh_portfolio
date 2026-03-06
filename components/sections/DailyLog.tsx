"use client";

import { motion } from "framer-motion";
import { dailyLog } from "@/lib/data";
import { sectionVariant, staggerContainer, itemXVariant } from "@/lib/variants";

export default function DailyLog() {
    return (
        <section
            id="log"
            className="section-wrapper"
            style={{ padding: "6rem 1.5rem", maxWidth: "800px", margin: "0 auto" }}
        >
            <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <p className="section-header prompt">$ tail -f daily.log</p>
                <p className="section-subheader comment">// streaming live entries...</p>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0",
                        maxHeight: "450px",
                        overflowY: "auto",
                        paddingRight: "0.5rem",
                        marginTop: "1rem"
                    }}
                    className="custom-scrollbar"
                >
                    {dailyLog.map((entry, i) => (
                        <motion.div
                            key={i}
                            variants={itemXVariant}
                            className="log-entry"
                            style={{
                                padding: "1rem 1.25rem",
                                marginBottom: "0.25rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginBottom: "0.35rem",
                                    flexWrap: "wrap",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "0.75rem",
                                        color: "var(--accent-secondary)",
                                        fontFamily: "var(--font-mono)",
                                    }}
                                >
                                    [{entry.date}]
                                </span>
                                {entry.isLive && (
                                    <span
                                        style={{
                                            fontSize: "0.65rem",
                                            padding: "1px 6px",
                                            border: "1px solid var(--accent-primary)",
                                            borderRadius: "4px",
                                            color: "var(--accent-primary)",
                                            fontFamily: "var(--font-mono)",
                                            animation: "pulse 2s ease-in-out infinite",
                                        }}
                                    >
                    // live
                                    </span>
                                )}
                            </div>
                            <p
                                style={{
                                    color: "var(--text-primary)",
                                    fontSize: "0.875rem",
                                    fontFamily: "var(--font-mono)",
                                    lineHeight: "1.7",
                                }}
                            >
                                <span style={{ color: "var(--accent-primary)" }}>{">"} </span>
                                {entry.content}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
