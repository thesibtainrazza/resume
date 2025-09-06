"use client";

import { useEffect, useState } from "react";

function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldBeDark = stored ? stored === "dark" : prefersDark;
        setIsDark(shouldBeDark);
        const root = document.documentElement;
        if (shouldBeDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        const root = document.documentElement;
        if (next) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    if (!mounted) return null;

    return (
        <button
            aria-label="Toggle Dark Mode"
            onClick={toggle}
            className="rounded-full border border-[#353a52] px-3 py-1 text-xs md:text-sm text-white transition-colors duration-300 hover:border-[#16f2b3]"
        >
            {isDark ? "Light" : "Dark"}
        </button>
    );
}

export default ThemeToggle;


