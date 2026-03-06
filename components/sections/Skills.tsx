"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";
import { sectionVariant } from "@/lib/variants";

function buildSkillBar(level: number): string {
    const total = 20;
    const filled = Math.round((level / 100) * total);
    return "█".repeat(filled) + "░".repeat(total - filled);
}

function SkillRow({
    name,
    level,
    animated,
}: {
    name: string;
    level: number;
    animated: boolean;
}) {
    const label =
        level >= 90 ? "expert" : level >= 75 ? "advanced" : "intermediate";
    const barStr = animated ? buildSkillBar(level) : "░".repeat(20);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "0.6rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
            }}
        >
            <span
                style={{ width: "120px", color: "var(--text-primary)", flexShrink: 0 }}
            >
                {">"} {name}
            </span>
            <span
                style={{
                    color: "var(--accent-primary)",
                    letterSpacing: "1px",
                    flex: 1,
                    transition: animated ? "all 1s ease" : "none",
                }}
            >
                {barStr}
            </span>
            <span
                style={{ color: "var(--text-muted)", width: "90px", flexShrink: 0 }}
            >
                {label}
            </span>
        </div>
    );
}

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" } as Parameters<typeof useInView>[1]);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (inView) {
            const t = setTimeout(() => setAnimated(true), 300);
            return () => clearTimeout(t);
        }
    }, [inView]);

    return (
        <section
            ref={ref}
            className="section-wrapper"
            style={{ padding: "6rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}
        >
            <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <p className="section-header prompt">$ cat sys.config</p>
                <p className="section-subheader comment">
          // scanning installed packages...
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
                        gap: "2.5rem",
                    }}
                >
                    <div>
                        <p
                            style={{
                                color: "var(--accent-secondary)",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.82rem",
                                marginBottom: "1rem",
                            }}
                        >
                            [languages]
                        </p>
                        {skills.languages.map((s) => (
                            <SkillRow
                                key={s.name}
                                name={s.name}
                                level={s.level}
                                animated={animated}
                            />
                        ))}
                    </div>

                    <div>
                        <p
                            style={{
                                color: "var(--accent-secondary)",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.82rem",
                                marginBottom: "1rem",
                            }}
                        >
                            [frameworks]
                        </p>
                        {skills.frameworks.map((s) => (
                            <SkillRow
                                key={s.name}
                                name={s.name}
                                level={s.level}
                                animated={animated}
                            />
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: "2.5rem" }}>
                    <p
                        style={{
                            color: "var(--accent-secondary)",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.82rem",
                            marginBottom: "1rem",
                        }}
                    >
                        [tools]
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {skills.tools.map((tool) => (
                            <motion.span
                                key={tool}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                className="tag-chip"
                                style={{ fontSize: "0.8rem", padding: "4px 12px" }}
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
