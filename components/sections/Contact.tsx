"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { sectionVariant, staggerContainer, itemXVariant } from "@/lib/variants";

const LINKS = [
    {
        icon: Mail,
        label: `${personalInfo.email}`,
        href: `mailto:${personalInfo.email}`,
    },
    {
        icon: Github,
        label: `github/${personalInfo.handle}`,
        href: personalInfo.github,
    },
    {
        icon: Linkedin,
        label: `linkedin/${personalInfo.handle}`,
        href: personalInfo.linkedin,
    },
    {
        icon: Twitter,
        label: `twitter/${personalInfo.handle}`,
        href: personalInfo.twitter,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="section-wrapper"
            style={{ padding: "6rem 1.5rem", maxWidth: "800px", margin: "0 auto" }}
        >
            <motion.div
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <p className="section-header prompt">
                    $ ping {personalInfo.handle}.dev
                </p>
                <p
                    style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                        marginBottom: "0.25rem",
                    }}
                >
          // establishing connection...
                </p>
                <p
                    style={{
                        fontSize: "0.8rem",
                        color: "var(--accent-primary)",
                        fontFamily: "var(--font-mono)",
                        marginBottom: "2rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    {">"} connection established ✓
                    <span style={{ position: "relative", display: "inline-flex", width: "8px", height: "8px" }}>
                        <span
                            className="sonar-ping"
                            style={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: "50%",
                                background: "var(--accent-primary)",
                                opacity: 0.4,
                            }}
                        />
                        <span
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "var(--accent-primary)",
                                display: "block",
                                boxShadow: "var(--glow-green)",
                            }}
                        />
                    </span>
                </p>

                <p
                    style={{
                        color: "var(--text-primary)",
                        fontSize: "0.875rem",
                        fontFamily: "var(--font-mono)",
                        lineHeight: "1.8",
                        marginBottom: "0.5rem",
                    }}
                >
                    {">"} i&apos;m always down to talk about cool projects, anime, or life.
                </p>
                <p
                    style={{
                        color: "var(--text-muted)",
                        fontSize: "0.875rem",
                        fontFamily: "var(--font-mono)",
                        marginBottom: "2rem",
                    }}
                >
                    {">"} drop me a line:
                </p>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                        marginBottom: "2.5rem",
                    }}
                >
                    {LINKS.map((link) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                variants={itemXVariant}
                                className="terminal-btn"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    alignSelf: "flex-start",
                                    fontSize: "0.85rem",
                                    cursor: "none",
                                    textDecoration: "none",
                                }}
                            >
                                <Icon size={14} />
                                {link.label}
                            </motion.a>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <p
                        style={{
                            color: "var(--text-muted)",
                            fontSize: "0.82rem",
                            fontFamily: "var(--font-mono)",
                            marginBottom: "1rem",
                        }}
                    >
                        {">"} want to know more?
                    </p>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                        <a
                            href={personalInfo.cvFile}
                            download="Harsh_Resume.pdf"
                            className="terminal-btn"
                            style={{
                                fontSize: "0.8rem",
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
                                fontSize: "0.8rem",
                                textDecoration: "none",
                                cursor: "none",
                                borderColor: "rgba(0, 255, 157, 0.4)"
                            }}
                        >
                            → view cv
                        </a>
                    </div>

                    <p
                        style={{
                            color: "var(--text-muted)",
                            fontSize: "0.82rem",
                            fontFamily: "var(--font-mono)",
                            marginBottom: "1rem",
                        }}
                    >
                        {">"} or just say hi. seriously.
                    </p>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="terminal-btn"
                        style={{
                            fontSize: "0.875rem",
                            padding: "10px 20px",
                            cursor: "none",
                            border: "1px solid var(--accent-primary)",
                            color: "var(--accent-primary)",
                            textDecoration: "none",
                        }}
                    >
                        → send message
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    style={{
                        marginTop: "4rem",
                        paddingTop: "2rem",
                        borderTop: "var(--border-terminal)",
                    }}
                >
                    <p
                        style={{
                            color: "var(--text-muted)",
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                            textAlign: "center",
                        }}
                    >
            // built with next.js + framer motion + too much lo-fi{" "}
                        <span style={{ color: "var(--accent-primary)" }}>
                            © {personalInfo.name} 2026
                        </span>
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
