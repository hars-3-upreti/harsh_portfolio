"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { sectionVariant, staggerContainer, itemVariant } from "@/lib/variants";

export default function Education() {
    return (
        <section
            id="education"
            className="section-wrapper"
            style={{ padding: "6rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}
        >
            <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <p className="section-header prompt">$ cat education.log</p>
                <p className="section-subheader comment">// loading academic history...</p>

                <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
                    {/* Timeline line */}
                    <div
                        style={{
                            position: "absolute",
                            left: "0",
                            top: "8px",
                            width: "2px",
                            height: "calc(100% - 8px)",
                            background:
                                "linear-gradient(to bottom, var(--accent-primary), transparent)",
                        }}
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
                    >
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariant}
                                className="terminal-window card-hover"
                                style={{ padding: "1.5rem", position: "relative" }}
                            >
                                {/* Timeline dot */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "-1.85rem",
                                        top: "1.5rem",
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        background: "var(--accent-primary)",
                                        boxShadow: "var(--glow-green)",
                                    }}
                                />

                                {/* Header row */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "space-between",
                                        gap: "1rem",
                                        flexWrap: "wrap",
                                        marginBottom: "0.75rem",
                                        fontFamily: "var(--font-mono)",
                                    }}
                                >
                                    <div>
                                        <span
                                            style={{
                                                color: "var(--text-muted)",
                                                fontSize: "0.8rem",
                                                marginRight: "1rem",
                                            }}
                                        >
                                            [{edu.period}]
                                        </span>
                                        <span
                                            style={{
                                                color: "var(--accent-primary)",
                                                fontSize: "1rem",
                                                fontWeight: 600,
                                                transition: "text-shadow 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLSpanElement).style.textShadow =
                                                    "0 0 8px var(--accent-primary)";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLSpanElement).style.textShadow = "none";
                                            }}
                                        >
                                            ● {edu.school}
                                        </span>
                                    </div>
                                    <span
                                        style={{
                                            fontSize: "0.7rem",
                                            padding: "2px 8px",
                                            border: `1px solid ${edu.badgeColor === "cyan" ? "var(--accent-cyan)" : "var(--accent-primary)"}`,
                                            borderRadius: "4px",
                                            color: edu.badgeColor === "cyan" ? "var(--accent-cyan)" : "var(--accent-primary)",
                                            fontFamily: "var(--font-mono)",
                                            whiteSpace: "nowrap",
                                            boxShadow: `0 0 8px ${edu.badgeColor === "cyan" ? "rgba(0,212,255,0.3)" : "rgba(0,255,157,0.3)"}`,
                                        }}
                                    >
                                        {edu.badge} {edu.badgeColor === "cyan" ? "✓" : "✓"}
                                    </span>
                                </div>

                                <p
                                    style={{
                                        color: "var(--text-muted)",
                                        fontSize: "0.82rem",
                                        marginBottom: "0.5rem",
                                        fontFamily: "var(--font-mono)",
                                    }}
                                >
                                    degree:{" "}
                                    <span style={{ color: "var(--text-primary)" }}>{edu.degree}</span>
                                </p>

                                {edu.dept && (
                                    <p
                                        style={{
                                            color: "var(--text-muted)",
                                            fontSize: "0.82rem",
                                            marginBottom: "0.5rem",
                                            fontFamily: "var(--font-mono)",
                                        }}
                                    >
                                        dept:{" "}
                                        <span style={{ color: "var(--text-primary)" }}>{edu.dept}</span>
                                    </p>
                                )}

                                {edu.cgpa && (
                                    <p
                                        style={{
                                            color: "var(--text-muted)",
                                            fontSize: "0.82rem",
                                            marginBottom: "0.5rem",
                                            fontFamily: "var(--font-mono)",
                                        }}
                                    >
                                        cgpa:{" "}
                                        <span style={{ color: "var(--accent-primary)" }}>{edu.cgpa}</span>
                                    </p>
                                )}

                                <p
                                    style={{
                                        color: "var(--text-muted)",
                                        fontSize: "0.82rem",
                                        fontFamily: "var(--font-mono)",
                                    }}
                                >
                                    location:{" "}
                                    <span style={{ color: "var(--text-primary)" }}>{edu.location}</span>
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
