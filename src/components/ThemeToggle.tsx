import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 shadow-lg border border-border/50 ${theme === "dark"
                    ? "bg-black/70 backdrop-blur-xl text-white hover:bg-black/80"
                    : "bg-white/70 backdrop-blur-xl text-black hover:bg-white/90"
                }`}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
            {theme === "dark" ? (
                <Sun size={18} aria-hidden />
            ) : (
                <Moon size={18} aria-hidden />
            )}
            <span className="text-sm font-medium">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
    );
}
