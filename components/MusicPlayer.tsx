"use client";

import { useState, useRef, useEffect } from "react";
import { musicConfig } from "@/lib/data";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = new Audio(musicConfig.file);
        audio.loop = true;
        audio.volume = 0.4;
        audio.onerror = () => setError(true);
        audioRef.current = audio;

        return () => {
            audio.pause();
            audio.src = "";
        };
    }, []);

    const toggle = () => {
        if (!audioRef.current || error) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(() => setError(true));
            setIsPlaying(true);
        }
    };

    return (
        <button
            onClick={toggle}
            className="terminal-btn"
            title={isPlaying ? "pause music" : "play music"}
            style={{
                position: "fixed",
                bottom: "1.5rem",
                right: "1.5rem",
                zIndex: 1000,
                background: "rgba(10, 10, 15, 0.9)",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                fontSize: "0.75rem",
                cursor: "none",
            }}
            aria-label={isPlaying ? "pause ambient music" : "play ambient music"}
        >
            {isPlaying ? (
                <>
                    <span style={{ display: "flex", alignItems: "flex-end", gap: "1px", height: "14px" }}>
                        <span className="eq-bar" style={{ animationDelay: "0s" }} />
                        <span className="eq-bar" style={{ animationDelay: "0.15s" }} />
                        <span className="eq-bar" style={{ animationDelay: "0.3s" }} />
                    </span>
                    <span style={{ color: "var(--accent-primary)" }}>
                        ♪ {musicConfig.songName}
                    </span>
                    <span style={{ color: "var(--text-muted)" }}>⏸</span>
                </>
            ) : (
                <>
                    <span style={{ color: "var(--text-muted)" }}>♪</span>
                    <span style={{ color: "var(--text-muted)" }}>
                        {error ? "no audio" : musicConfig.songName}
                    </span>
                    <span style={{ color: "var(--accent-primary)" }}>▶</span>
                </>
            )}
        </button>
    );
}
