import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Menu, X, Linkedin, Moon, Sun } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { path: "/case-studies", label: "Case Studies", hoverClass: "md:hover:bg-accent-orange md:hover:text-accent-orange-foreground" },
  { path: "/leadership", label: "Leadership & Practice", hoverClass: "md:hover:bg-accent-grey md:hover:text-accent-grey-foreground" },
  { path: "/writing", label: "Writing", hoverClass: "md:hover:bg-accent-green md:hover:text-accent-green-foreground" },
  { path: "/about", label: "About", hoverClass: "md:hover:bg-accent-grey md:hover:text-accent-grey-foreground" },
];

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`sticky top-0 z-50 border-b border-border transition-[padding,background-color] duration-200 ${
          scrolled
            ? "py-3 backdrop-blur-md bg-background/80 border-border/80"
            : "py-6 bg-background"
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
                    className={`transition-colors no-underline px-3 py-1 rounded-full ${item.hoverClass} ${
                      location.pathname === item.path
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
                    className={`block text-base transition-colors no-underline ${
                      location.pathname === item.path
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border mt-24">
        <div className="container-wide py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} · Rob Millington</p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <Sun size={20} aria-hidden />
                ) : (
                  <Moon size={20} aria-hidden />
                )}
                <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
              </button>
              <a
                href="https://www.linkedin.com/in/rmillington/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}