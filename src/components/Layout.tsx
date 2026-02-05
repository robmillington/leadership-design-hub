import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { path: "/", label: "Home", colorClass: "" },
  { path: "/case-studies", label: "Case Studies", colorClass: "md:bg-accent-orange md:text-accent-orange-foreground md:px-3 md:py-1 md:rounded-full" },
  { path: "/leadership", label: "Leadership & Practice", colorClass: "md:bg-accent-grey md:text-accent-grey-foreground md:px-3 md:py-1 md:rounded-full" },
  { path: "/writing", label: "Writing", colorClass: "md:bg-accent-green md:text-accent-green-foreground md:px-3 md:py-1 md:rounded-full" },
  { path: "/about", label: "About", colorClass: "" },
];

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <nav className="container-wide py-6">
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
                    className={`transition-colors no-underline ${item.colorClass} ${
                      location.pathname === item.path
                        ? "font-medium"
                        : "hover:opacity-80"
                    } ${!item.colorClass ? (location.pathname === item.path ? "text-foreground" : "text-muted-foreground hover:text-foreground") : ""}`}
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
          <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} · Head of Product Design</p>
            <p>Built with React + Vite · No dependencies on proprietary platforms</p>
          </div>
        </div>
      </footer>
    </div>
  );
}