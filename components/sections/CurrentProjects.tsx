"use client";

import { motion } from "framer-motion";
import { currentProjects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function buildProgressBar(progress: number): string {
    const total = 20;
    const filled = Math.round((progress / 100) * total);
    return "█".repeat(filled) + "░".repeat(total - filled);
}

export default function CurrentProjects() {
    return (
        <section
            id="projects"
            className="section-wrapper"
            style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <p className="section-header prompt">$ ls active.missions/</p>
                <p className="section-subheader comment">
          // [{currentProjects.length} items found]
                </p>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {currentProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariant}
                            whileHover={{ y: -4 }}
                            className="terminal-window card-hover"
                            style={{ padding: "1.5rem" }}
                        >
                            {/* Mission ID */}
                            <p
                                style={{
                                    fontSize: "0.7rem",
                                    color: "var(--text-muted)",
                                    fontFamily: "var(--font-mono)",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {project.id}.exe
                            </p>

                            {/* Project title */}
                            <h3
                                style={{
                                    fontSize: "1.1rem",
                                    fontWeight: 600,
                                    color: "var(--accent-primary)",
                                    marginBottom: "0.5rem",
                                    fontFamily: "var(--font-mono)",
                                }}
                            >
                                {project.name}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: "0.82rem",
                                    color: "var(--text-muted)",
                                    fontFamily: "var(--font-mono)",
                                    marginBottom: "1rem",
                                    lineHeight: "1.6",
                                }}
                            >
                                {project.description}
                            </p>

                            {/* Stack */}
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.4rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                {project.stack.map((t) => (
                                    <span key={t} className="tag-chip">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Progress bar */}
                            <div style={{ marginBottom: "0.5rem" }}>
                                <p
                                    style={{
                                        fontSize: "0.72rem",
                                        color: "var(--text-muted)",
                                        fontFamily: "var(--font-mono)",
                                        marginBottom: "2px",
                                    }}
                                >
                                    status:{" "}
                                    <span
                                        style={{
                                            color:
                                                project.status === "shipping soon"
                                                    ? "var(--accent-primary)"
                                                    : "#ffbd2e",
                                            animation:
                                                project.status === "shipping soon"
                                                    ? "pulse 2s ease-in-out infinite"
                                                    : "none",
                                        }}
                                    >
                                        {project.status}
                                    </span>
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "0.72rem",
                                        color: "var(--accent-primary)",
                                        letterSpacing: "0.5px",
                                    }}
                                >
                                    {buildProgressBar(project.progress)} {project.progress}%
                                </p>
                            </div>

                            <p
                                style={{
                                    fontSize: "0.7rem",
                                    color: "var(--text-muted)",
                                    fontFamily: "var(--font-mono)",
                                    marginBottom: "1rem",
                                }}
                            >
                                started: {project.startDate}
                            </p>

                            {/* Links */}
                            <div style={{ display: "flex", gap: "0.75rem" }}>
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="terminal-btn"
                                    style={{ fontSize: "0.75rem" }}
                                >
                                    <Github size={12} />→ view repo
                                </a>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="terminal-btn"
                                    style={{ fontSize: "0.75rem" }}
                                >
                                    <ExternalLink size={12} />→ live demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
