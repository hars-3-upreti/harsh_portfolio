"use client";

import { motion } from "framer-motion";
import { pastProjects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

const staggerContainer = {
    visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PastProjects() {
    return (
        <section
            className="section-wrapper"
            style={{ padding: "4rem 1.5rem 6rem", maxWidth: "1100px", margin: "0 auto" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <p className="section-header prompt">$ ls completed.exe/</p>
                <p className="section-subheader comment">
          // [{pastProjects.length} items found]
                </p>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                        gap: "1rem",
                    }}
                >
                    {pastProjects.map((project, i) => (
                        <motion.a
                            key={i}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={cardVariant}
                            whileHover={{ y: -3 }}
                            className="terminal-window"
                            style={{
                                display: "block",
                                padding: "1.25rem",
                                textDecoration: "none",
                                cursor: "none",
                                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.borderColor = "#00d4ff60";
                                el.style.boxShadow = "var(--glow-cyan)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.borderColor = "";
                                el.style.boxShadow = "";
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "var(--text-primary)",
                                        fontFamily: "var(--font-mono)",
                                    }}
                                >
                                    {project.name}
                                </h3>
                                <ExternalLink
                                    size={12}
                                    style={{ color: "var(--text-muted)", flexShrink: 0 }}
                                />
                            </div>
                            <p
                                style={{
                                    fontSize: "0.78rem",
                                    color: "var(--text-muted)",
                                    fontFamily: "var(--font-mono)",
                                    marginBottom: "0.75rem",
                                    lineHeight: "1.5",
                                }}
                            >
                                {project.description}
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                                {project.stack.map((t) => (
                                    <span key={t} className="tag-chip" style={{ fontSize: "0.65rem" }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
