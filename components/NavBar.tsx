"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import GlitchText from "./GlitchText";
import { personalInfo } from "@/lib/data";

const NAV_LINKS = [
    { label: "[about]", href: "#about" },
    { label: "[log]", href: "#log" },
    { label: "[work]", href: "#work" },
    { label: "[projects]", href: "#projects" },
    { label: "[contact]", href: "#contact" },
];

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const navLinkStyle: React.CSSProperties = {
        background: "none",
        border: "none",
        color: "var(--text-muted)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8rem",
        cursor: "none",
        transition: "color 0.2s ease, text-shadow 0.2s ease",
    };

    return (
        <>
            <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>

            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "48px",
                    zIndex: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 1.5rem",
                    background: scrolled
                        ? "rgba(10, 10, 15, 0.95)"
                        : "rgba(10, 10, 15, 0.7)",
                    backdropFilter: "blur(12px)",
                    borderBottom: "var(--border-terminal)",
                    transition: "background 0.3s ease",
                    fontFamily: "var(--font-mono)",
                }}
            >
                {/* Left: name + live dot */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="pulse-dot" />
                    <GlitchText
                        text={`~/${personalInfo.handle}`}
                        className="prompt"
                        as="span"
                        triggerOnMount={false}
                    />
                </div>

                {/* Desktop nav links */}
                <div
                    className="nav-links"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                        fontSize: "0.8rem",
                    }}
                >
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            style={navLinkStyle}
                            onMouseEnter={(e) => {
                                const b = e.currentTarget as HTMLButtonElement;
                                b.style.color = "var(--accent-primary)";
                                b.style.textShadow = "0 0 8px var(--accent-primary)";
                            }}
                            onMouseLeave={(e) => {
                                const b = e.currentTarget as HTMLButtonElement;
                                b.style.color = "var(--text-muted)";
                                b.style.textShadow = "none";
                            }}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="nav-hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: "none",
                        border: "none",
                        color: "var(--accent-primary)",
                        cursor: "none",
                        display: "none",
                    }}
                    aria-label="toggle menu"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile full-screen menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 99,
                            background: "rgba(10, 10, 15, 0.97)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "2rem",
                            fontFamily: "var(--font-mono)",
                        }}
                    >
                        {NAV_LINKS.map((link, i) => (
                            <motion.button
                                key={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                onClick={() => handleNavClick(link.href)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "var(--accent-primary)",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "1.5rem",
                                    cursor: "none",
                                }}
                            >
                                {link.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
