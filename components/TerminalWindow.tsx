"use client";

import { ReactNode } from "react";

interface TerminalWindowProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export default function TerminalWindow({
    title = "terminal",
    children,
    className = "",
}: TerminalWindowProps) {
    return (
        <div className={`terminal-window ${className}`}>
            <div className="terminal-titlebar">
                <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
                <div className="terminal-dot" style={{ background: "#28c840" }} />
                <span
                    style={{
                        marginLeft: "8px",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                    }}
                >
                    {title}
                </span>
            </div>
            <div style={{ padding: "1.25rem" }}>{children}</div>
        </div>
    );
}
