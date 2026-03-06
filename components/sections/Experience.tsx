"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { sectionVariant, staggerContainer, itemVariant } from "@/lib/variants";

export default function Experience() {
    return (
        <section
            id="work"
            className="section-wrapper"
            style={{ padding: "6rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}
        >
            <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <p className="section-header prompt">$ cat work.history</p>
                <p className="section-subheader comment">// loading previous missions...</p>

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
                        {experience.map((job, i) => (
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
                                            [{job.period}]
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
                                            ● {job.company}
                                        </span>
                                    </div>
                                    <span
                                        style={{
                                            fontSize: "0.7rem",
                                            padding: "2px 8px",
                                            border: `1px solid ${job.status === "ongoing"
                                                    ? "#ffbd2e"
                                                    : "var(--accent-primary)"
                                                }`,
                                            borderRadius: "4px",
                                            color:
                                                job.status === "ongoing"
                                                    ? "#ffbd2e"
                                                    : "var(--accent-primary)",
                                            fontFamily: "var(--font-mono)",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {job.status === "ongoing" ? "ongoing ⟳" : "completed ✓"}
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
                                    role:{" "}
                                    <span style={{ color: "var(--text-primary)" }}>{job.role}</span>
                                </p>

                                <p
                                    style={{
                                        color: "var(--text-muted)",
                                        fontSize: "0.82rem",
                                        marginBottom: "0.75rem",
                                        fontFamily: "var(--font-mono)",
                                    }}
                                >
                                    stack:{" "}
                                    <span style={{ color: "var(--accent-cyan)" }}>
                                        {job.stack.join(", ")}
                                    </span>
                                </p>

                                {job.highlights.map((h, j) => (
                                    <p
                                        key={j}
                                        style={{
                                            color: "var(--text-primary)",
                                            fontSize: "0.82rem",
                                            fontFamily: "var(--font-mono)",
                                            marginBottom: "0.25rem",
                                            paddingLeft: "1rem",
                                        }}
                                    >
                                        <span style={{ color: "var(--accent-primary)" }}>{">"} </span>
                                        {h}
                                    </p>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
