import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

const navItems = [
    { path: "/case-studies", label: "Case Studies", hoverClass: "hover:bg-white dark:hover:bg-zinc-800 hover:text-foreground transition-colors" },
    { path: "/leadership", label: "Leadership & Practice", hoverClass: "hover:bg-white dark:hover:bg-zinc-800 hover:text-foreground transition-colors" },
    { path: "/writing", label: "Writing", hoverClass: "hover:bg-white dark:hover:bg-zinc-800 hover:text-foreground transition-colors" },
    { path: "/about", label: "About", hoverClass: "hover:bg-white dark:hover:bg-zinc-800 hover:text-foreground transition-colors" },
];

export function Header() {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 border-b transition-[padding,background-color] duration-200 ${scrolled
                ? "py-3 border-border/40"
                : "py-6 border-transparent"
                } ${
                // Header styling: dark mode 70% opacity black, light mode 70% opacity white, both strong blur
                theme === "dark"
                    ? "bg-black/70 backdrop-blur-xl"
                    : "bg-white/70 backdrop-blur-xl"
                }`}
        >
            <nav className="container-wide">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="font-serif text-xl text-foreground hover:text-foreground no-underline"
                    >
                        Rob Millington
                    </Link>

                    <ul className="hidden md:flex items-center gap-4 text-sm">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`transition-colors no-underline px-3 py-1 rounded-full ${item.hoverClass} ${location.pathname === item.path
                                        ? "text-foreground font-medium"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile hamburger button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 -mr-2 text-foreground"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile navigation */}
                {mobileMenuOpen && (
                    <ul className="md:hidden mt-6 pt-6 border-t border-border space-y-4">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block text-base transition-colors no-underline ${location.pathname === item.path
                                        ? "text-foreground font-medium"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-8 mt-8 border-t border-border/50">
                            <p className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.2em] leading-relaxed">
                                Built with Lovable, <br />
                                Antigravity and Netlify
                            </p>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}
