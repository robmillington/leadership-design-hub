import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
        >
            {/* Base layer */}
            <div
                className={`absolute inset-0 transition-colors duration-500 ${theme === "dark" ? "bg-[hsl(0,0%,8%)]" : "bg-[hsl(0,0%,98%)]"
                    }`}
            />

            {/* Animated gradient layer */}
            <div
                className={`absolute inset-0 ${theme === "dark" ? "opacity-[0.08]" : "opacity-[0.08]"
                    }`}
                style={{
                    background: `
            radial-gradient(
              ellipse 80% 50% at 50% 50%,
              hsl(280, 70%, 50%),
              transparent
            )
          `,
                    willChange: "transform, filter",
                }}
            >
                {/* Hue cycling animation */}
                <div
                    className="absolute inset-0 animate-hue-cycle"
                    style={{
                        background: "inherit",
                        willChange: "filter",
                    }}
                />

                {/* Gradient movement animation */}
                <div
                    className="absolute inset-[-150%] animate-gradient-move"
                    style={{
                        background: `
              radial-gradient(
                ellipse 60% 40% at 30% 30%,
                hsl(200, 70%, 50%),
                transparent
              ),
              radial-gradient(
                ellipse 50% 60% at 70% 70%,
                hsl(320, 70%, 50%),
                transparent
              )
            `,
                        willChange: "transform",
                    }}
                />
            </div>
        </div>
    );
}
